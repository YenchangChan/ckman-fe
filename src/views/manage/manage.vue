<template>
  <main class="settings">
    <breadcrumb :data="['Clusters', $route.params.id, 'manage']">
      <template v-slot:default>
        <el-button type="primary"
                   size="mini"
                   class="fs-14"
                   v-for="item of clusterStatus"
                   :key="item"
                   :disabled="isStatusDisable(item)"
                   @click="clusterOperation(item)">{{$t('manage.' + item + ' Cluster')}}</el-button>
      </template>
    </breadcrumb>
    <section class="container">
      <div class="uprade ptb-15">
        <span class="fs-18 font-bold mb-15 inline-block">{{$t('manage.Upgrade Cluster')}}</span>
        <div class="">
          <span class="fs-14 font-bold">{{$t('home.ClickHouse Version')}}: {{ list.version }}</span>
          <template v-if="mode === 'deploy'">
            <span class="fs-14 font-bold ml-30">{{$t('manage.Upgrade to')}}:</span>
            <el-select v-model="packageVersion"
              size="small"
              clearable
              filterable
              class="ml-10 mr-10">
              <el-option v-for="item in versionOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span class="fs-14 font-bold ml-0">{{$t('manage.Policy')}}:</span>
            <el-select v-model="policy"
              size="small"
              clearable
              filterable
              class="ml-10 mr-20">
              <el-option :label="$t('manage.Full')" value="Full"></el-option>
              <el-option :label="$t('manage.Rolling')" value="Rolling"></el-option>
            </el-select>
            <el-checkbox v-model="skip" class="mr-50">{{$t('manage.skip same version')}}</el-checkbox>
            <el-checkbox v-model="keeper" class="mr-50">{{$t('manage.skip keeper')}}</el-checkbox>
            <el-button type="primary"
              size="mini"
              class="fs-16"
              :disabled="!packageVersion"
              @click="clusterOperation('upgrade')">{{$t('common.Upgrade')}}</el-button>
          </template>
        </div>
      </div>
      <div class="node-list">
        <h3 class="mt-15 mb-30">{{$t('home.ClickHouse Node List')}}</h3>
        <div class="search flex flex-between pull-left">
          <el-button type="primary"
            v-if="mode === 'deploy'"
            size="medium"
            class="fs-16"
            @click="addNode">{{$t('manage.Add Node')}}</el-button>
        </div>

        
        <AddNodeDialog
          :visible.sync="addNodeDialogVisible"
          @close="addNodeDialogVisible = false"
          @onOk="onAddNodeSuccess"
          :numberRange="numberRange"
          :password="password" />

        <vxe-toolbar zoom custom class="pull-right">
          <template #buttons>
            <el-input v-model="input"
              :placeholder="$t('common.keyword search')"
              autocomplete="false"
              clearable
              size="medium"
              suffix-icon="el-icon-search"
              class="width-300"></el-input>
          </template>
        </vxe-toolbar>

        <vxe-table class="mt-10"
          style="clear: both;"
          v-bind="gridOptions"
          :data="queryList"
          border>
          <vxe-column v-for="(col, index) in columns"
            :key="index"
            :field="col.prop"
            show-overflow-tooltip
            :title="col.label"
            :filters="col.filters || null"
            sortable
            align="center">
            <template slot-scope="{row, column}">
              <div v-if="col.prop === 'status'" class="flex flex-between">
                <span>
                  <span class="dot mr-5" :class="row.status"></span>
                  <span>{{row.status}}</span>
                </span>
                <span class="ml-10 pull-right">{{row.uptime}}</span>
              </div>
              <div v-else-if="col.prop === 'ip'">
                <el-button type="text" @click="openHttpWeb(row.ip, httpPort)">
                    {{ row.ip }}
                </el-button>
                <!-- <el-button  class="no-border" icon="el-icon-monitor" @click="openDashboard(row.ip, httpPort)"></el-button> -->
              </div>
              <span v-else>{{row[column.property]}}</span>
            </template>
          </vxe-column>
          <vxe-column :title="$t('home.Actions')"
            v-if="mode === 'deploy'"
            width="250"
            align="center">
            <template slot-scope="{ row }">
              <el-button type="text" v-if="row.status === 'green'" @click="offlineClusterNode(row)" :loading="row.offlineLoading">{{ $t('manage.Offline') }}</el-button>
              <el-button type="text" v-if="row.status === 'red'" @click="onlineClusterNode(row)" :loading="row.onlineLoading">{{ $t('manage.Online') }}</el-button>
              <el-button type="text" @click="viewClusterLog(row)">{{ $t('manage.View Log') }}</el-button>
              <el-button type="text" @click="remove(row)">{{ $t('common.Delete') }}</el-button>
            </template>
            <template>
            </template>
          </vxe-column>
        </vxe-table>
      </div>
    </section>
    <RebalanceFormComponent :visible.sync="reBalanceDialogVisible" :password="password" @close="reBalanceDialogVisible=false" />
    <DeleteNodeComponent :visible.sync="deleteNodeDialogVisible" :password="password" :ip="deleteIp" @onOk="onAddNodeSuccess" @close="deleteNodeDialogVisible = false" />
  </main>
</template>
<script>
import { upperFirst, lowerFirst, cloneDeep, head, last } from "lodash-es";
import AddNodeDialog from "./modal/addNode";
import InputPassword from "./modal/inputPassword";
import { $modal, $loading } from "@/services";
import { ClusterStatus, ClusterTypeStatus } from "@/constants";
import { ClusterApi, PackageApi } from "@/apis";
import TaskDetail from '@/views/task/components/TaskDetail.vue';
import ViewLogComponent from './modal/viewLog.vue';
import RebalanceFormComponent from './modal/rebalanceForm.vue';
import DeleteNodeComponent from './modal/deleteNode.vue';
export default {
  components: {
    AddNodeDialog,
    DeleteNodeComponent,
    RebalanceFormComponent,
  },
  data() {
    return {
      addNodeDialogVisible: false,
      reBalanceDialogVisible: false,
      deleteNodeDialogVisible: false,
      mode: "",
      httpPort: 8123,
      versionOptions: [
        {
          value: "",
          label: "",
        },
      ],
      input: "",
      list: {
        status: "green",
        version: "",
        pkgType:'',
        nodes: [],
      },
      clusterStatus: [],
      packageVersion: "",
      skip: true,
      keeper: false,
      policy: 'Full',
      needPassword: false,
      password: '',
      packageType: '',
      gridOptions: {
        border: true,
        resizable: true,
        showHeaderOverflow: true,
        showOverflow: true,
        highlightHoverRow: true,
        rowId: 'tableName',
        toolbarConfig: {
          zoom: true,
          custom: true
        },
        sortConfig: {
          trigger: 'cell',
        },
        filterConfig: {
        },
      },
      numberRange: [],
      deleteIp: '',
    };
  },
  computed: {
    queryList() {
      const { list, input } = this;
      return list.nodes.filter(node => {
        return node.hostname.includes(input) || node.ip.includes(input) || node.status.includes(input);
      });
    },
    columns() {
      return [
        {
          prop: "ip",
          label: this.$t('manage.Node IP'),
          minWidth: 250,
          sortable: true
        },
        {
          prop: "hostname",
          label: this.$t('manage.Node Name'),
          minWidth: 250,
          sortable: true
        },
        {
          prop: "shardNumber",
          label: this.$t('manage.shard number'),
          minWidth: 250,
          sortable: true
        },
        {
          prop: "replicaNumber",
          label: this.$t('manage.replica number'),
          minWidth: 250,
          sortable: true
        },
        {
          prop: "disk",
          label: this.$t('manage.Disk(Used/Total)'),
          minWidth: 250,
          sortable: true
        },
        {
          prop: "status",
          label: this.$t('manage.Node Status'),
          minWidth: 250,
          sortable: true,
          filters: [{ 'label': 'green', 'value': 'green' }, { 'label': 'red', 'value': 'red' }]
        }
      ];
    }
  },
  mounted() {
    this.clusterStatus = Object.keys(ClusterStatus)
      .filter((item) => item !== "upgrade")
      .map((v) => upperFirst(v));
    this.fetchData();
    // this.fetchVersionData();
  },
  methods: {
    async fetchData() {
      const {
        data: { entity },
      } = await ClusterApi.getClusterInfo(this.$route.params.id);
      this.list = entity;
      this.mode = entity.mode;
      this.httpPort = entity.httpPort;
      this.needPassword = entity.needPassword;
      this.packageType = entity.pkgType;
      this.fetchVersionData();
      this.numberRange = this.getNumberRange();
    },
    async fetchVersionData() {
      const { packageType } = this;
      const {
        data: { entity },
      } = await PackageApi.getList(packageType);
      this.versionOptions = (entity||[]).map((item) => ({
        value: item.version,
        label: item.version,
        disabled: item.version === this.list.version,
      }));
    },
    isStatusDisable(item) {
      if ( this.mode === "import" && lowerFirst(item) != "rebalance")
        return true;
      if (
        ["start", "destroy"].includes(lowerFirst(item)) &&
        this.list.status !== "red"
      )
        return true;
      if (lowerFirst(item) === "stop" && this.list.status === "red")
        return true;
      return false;
    },
    getNumberRange() {
      let { nodes } = this.list;
      nodes = nodes.sort((a, b) => a.shardNumber - b.shardNumber);
      const range =
        nodes.length === 0
          ? [1, 1]
          : [head(nodes).shardNumber, last(nodes).shardNumber + 1];
      return range;
    },

    async openPasswordDialog() {
      const password = await $modal({
        component: InputPassword,
        props: {
          title: this.$t("home.SSH Password"),
          width: 300,
          cancelText: this.$t("common.Cancel"),
          okText: this.$t("common.Confirm"),
        },
        data: {
          password: this.password,
        }
      }).then(password => {
        return password;
      });

      return password;
    },

    async addNode() {
      let password = '';
      if (this.needPassword) {
        password = await this.openPasswordDialog();
      }

      this.password = password;

      this.addNodeDialogVisible = true;
    },

    onAddNodeSuccess(taskId) {
      this.addNodeDialogVisible = false;
      this.deleteNodeDialogVisible = false;
      $modal({
        component: TaskDetail,
        props: {
          title: this.$t('task.View Task'),
          width: 800,
          cancelText: this.$t("task.Close"),
          okText: null,
        },
        data: {
          taskId: taskId,
          refresh: true
        },
      }).finally(() => this.fetchData());
    },

    async remove(item) {
      let password = '';
      if (this.needPassword) {
        password = await this.openPasswordDialog();
      }
      this.deleteIp = item.ip;
      this.deleteNodeDialogVisible = true;
    },
    async clusterOperation(type) {
      type = lowerFirst(type);

      if (type === 'rebalance') {
        this.reBalanceDialogVisible = true;
        return;
      }
      let password = '';
      if (this.needPassword) {
        password = await this.openPasswordDialog();
      }

      this.password = password; 

      await this.$confirm(this.$t('common.' + ClusterStatus[type]), this.$t('common.tips'), {
        confirmButtonText: this.$t("common.Confirm"),
        cancelButtonText: this.$t("common.Cancel"),
      });
      $loading.increase();
      let params = {
        clusterName: this.$route.params.id,
      };
      if (type === "upgrade") {
        const { packageVersion, policy, skip, keeper } = this;
        params = Object.assign(params, { packageVersion, policy, skip, skipKeeper: keeper });
      }
      const { data: { entity: taskId } } = await ClusterApi.manageCluster(type, params, password).finally(() =>
        $loading.decrease()
      );

      // 升级集群，显示任务状态弹出层
      if ((type === 'upgrade' || type === 'destroy') && taskId) {
        await $modal({
          component: TaskDetail,
          props: {
            title: this.$t('task.View Task'),
            width: 800,
            cancelText: this.$t("task.Close"),
            okText: null,
          },
          data: {
            taskId: taskId,
            refresh: true
          },
        }).finally(() => {
          if (type === 'destroy') {
            this.$router.push('/home');
            return;
          } else {
            this.fetchData();
          }
        });
      } else {
        this.$message.success(`${this.$t('manage.' + upperFirst(type) + ' Cluster')}` + ` ${this.$t('common.' + 'Success')}`);
        this.fetchData();
      }
    },

    // 集群node上线
    async onlineClusterNode(row) {
      let password = '';
      if (this.needPassword) {
        password = await this.openPasswordDialog();
      }
      this.$set(row, 'onlineLoading', true);
      const { id: clusterName } = this.$route.params;
      await ClusterApi.onlineClusterNode(clusterName, row.ip, password);
      this.$message.success(`${this.$t('manage.Online')}` + ` ${this.$t('common.' + 'Success')}`);
      this.fetchData();
      this.$set(row, 'onlineLoading', false);
    },

    // 集群node下线
    async offlineClusterNode(row) {
      let password = '';
      if (this.needPassword) {
        password = await this.openPasswordDialog();
      }
      this.$set(row, 'offlineLoading', true);
      const { id: clusterName } = this.$route.params;
      await ClusterApi.offlineClusterNode(clusterName, row.ip, password);
      this.$message.success(`${this.$t('manage.Offline')}` + ` ${this.$t('common.' + 'Success')}`);
      this.fetchData();
      this.$set(row, 'offlineLoading', false);
    },

    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },

    async openHttpWeb(ip, httpPort) {
      window.open("http://"+ip+":"+httpPort+"/play")
    },

    async openDashboard(ip, httpPort) {
      window.open("http://" + ip + ":" + httpPort + "/dashboard")
    },

    async viewClusterLog(row) {
      let password = "";
      if (this.needPassword) {
        password = await this.openPasswordDialog();
      }
      const { ip } = row;
      const { id: clusterName } = this.$route.params;
      await $modal({
        component: ViewLogComponent,
        props: {
          title: this.$t("manage.clickhouse Log"),
          width: 800,
          cancelText: null,
          okText: null,
        },
        data: {
          clusterName,
          ip,
          password,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.uprade {
  border-bottom: 1px solid #eaeef4;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  &.green {
    background-color: #1ac51a;
  }

  &.red {
    background-color: #f50600;
  }
}
</style>

<style scoped>
.no-border {
  border: none;
}
</style>
