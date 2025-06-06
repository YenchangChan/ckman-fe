<template>
  <main class="settings">
    <breadcrumb :data="breadcrumbInfo"></breadcrumb>
    <section class="container">
      <div v-for="(item, index) of chartMetrics" :key="item.title">
        <div class="title flex flex-vcenter flex-between">
          <span class="fs-18 font-bold mtb-20">{{ $t('ClickHouseEcharts.' + item.title) }}</span>
          <time-filter v-model="timeFilter" localKey="overviewBaseTimeFilter" :refreshDuration.sync="refresh"
            @input="timeFilterChange" @on-refresh="timeFilterRefresh" v-if="index === 0" />
        </div>
        <ul class="charts flex flex-wrap">
          <li class="chart-item mb-50" v-for="(item, index) of item.metrics" :key="index">
            <p class="mtb-10 fs-16 font-bold expect">{{ $t('ClickHouseEcharts.' + item.expect) }}</p>
            <vue-echarts v-if="item.option" ref="Charts" :option="item.option"
              @mousemove.native="mousemove('series', $event)" />
          </li>
        </ul>
      </div>

    </section>
  </main>
</template>
<script>
import echarts from "echarts";
import { chartOption } from "./chartOption";
import { MetricApi } from "@/apis";
import { convertTimeBounds } from "@/helpers";

export default {
  props: {
    breadcrumbInfo: {
      type: Array,
      default: [],
    },
    metrics: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      timeFilter: ["now-1h", "now"],
      refresh: null,
      chartOption: null,
      chartMetrics: [],
    };
  },
  mounted() {
    this.chartMetrics = (this.metrics || []).map(({ title, metrics }) => {
      return {
        title,
        metrics: (metrics || [])
      };
    });
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.chartMetrics.forEach((item, index) => {
        item.metrics.forEach((metric, index) => {
          this.fetchChartData(metric, index);
        });
      });
    },  
    async fetchChartData(chart, index) {
      const { duration, min, max } = convertTimeBounds(this.timeFilter);
      let step = step = Math.floor(+duration / 360 / 1000);
      step = step < 60 ? 60 : step;
      const {
        data: { entity },
      } = await MetricApi.queryMetric(this.$route.params.id, {
        metric: chart.expect,
        start: Math.floor(min / 1000),
        end: Math.floor(max / 1000),
        step,
      });
      this.$set(chart, "option", chartOption(entity, min, max));
      this.$nextTick(() => {
        this.$refs.Charts[index] && this.$refs.Charts[index].refreshChart();
        const chartInstances = (this.$refs.Charts || []).map((item) => item.chart);
        echarts.connect(chartInstances);
      });
    },
    mousemove(params, $event) { },
    timeFilterChange() {
      this.fetchData();
    },
    timeFilterRefresh() {
      this.fetchData();
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.chart-item {
  height: 500px;
  width: 33%;

  .expect {
    height: 36px;
    overflow: hidden;
  }
}
</style>
