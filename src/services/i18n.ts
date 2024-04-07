import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zhCN from 'vxe-table/lib/locale/lang/zh-CN';
import enUS from 'vxe-table/lib/locale/lang/en-US';
Vue.use(VueI18n);

const messages = {
  en: {
    ...enUS,
    common: {
      'Success': 'Success',
      'Close': 'Close',
      'Create': 'Create',
      'Confirm': 'Confirm',
      'Cancel': 'Cancel',
      'Import': 'Import',
      'Delete': 'Delete',
      'Confirm Delete': 'Confirm whether to delete?',
      'Logout': 'Logout',
      'Upload': 'Upload',
      'placeholderIp': 'multiple IP, please comma-seprated, support CIDR or Range',
      'Required': 'Can not be empty',
      'Clusters': 'Clusters',
      'overview': 'overview',
      'manage': 'manage',
      'tables': 'tables',
      'session': 'session',
      'query-execution': 'query-execution',
      'package': 'package manage',
      'settings': 'settings',
      'Upgrade': 'Upgrade',
      'Save': 'Save',
      'Table Name': 'Table Name',
      'Save Reboot': 'Save & Reboot',
      'Version': 'Version',
      'Files': 'Files',
      'Action': 'Action',
      'Upload File': 'Upload File',
      'tips': 'tips',
      'start': 'Confirm to start?',
      'stop': 'Confirm to stop?',
      'destroy': 'Confirm to destroy?',
      'rebalance': 'Confirm to rebalance?',
      'upgrade': 'upgrade',
      'Yes': 'Yes',
      'No': 'No',
      'Please fill out': 'Please fill out',
      'Please choose': 'Please choose',
      'Input error, please check the rules and re-enter': 'Input error, please check the rules {rule} and re-enter',
      'Field Name': 'Field Name',
      'Field Type': 'Field Type',
      'Defaults': 'Defaults',
      'Is it required': 'Is it required',
      'Description': 'Description',
      'Ranges': 'Ranges',
      'Null': 'Null',
      'Please enter a value greater than {min}': 'Please enter a value greater than {min}',
      'Please enter a value less than or equal to {max}': 'Please enter a value less than or equal to {max}',
      'Filter': 'Filter',
      'Reset': 'Reset',
      'keyword search': 'keyword search',
      "Current Browser Not Support": "Current Browser Not Support",
      'Package Type': 'Package Type',
      'Message Center': 'Message Center',
      'Action Success': 'Action Success',
      'Refresh': 'Refresh',
      'Force Override': 'Force Override',
      'Force Delete': 'Force Delete',
    },
    layout: {
      'ClickHouse Management Console': 'ClickHouse Management Console',
      'Settings': 'Settings',
      'Logout Success': 'Logout Success',
      'Message Center': 'Message Center',
      'Document': 'Document',
      'API': 'Swagger'
    },
    home: {
      'Create or import a ClickHouse Cluster': 'Create or import a ClickHouse Cluster',
      'Create a ClickHouse Cluster': 'Create a ClickHouse Cluster',
      'Logic Name': 'Logic Name',
      'Belongs to Logic': 'Belongs to Logic',
      'Cluster Name': 'Cluster Name',
      'ClickHouse TCP Port': 'ClickHouse TCP Port',
      'ClickHouse Node List': 'ClickHouse Node List',
      'Replica': 'Replica',
      'Zookeeper Node List': 'Zookeeper Node List',
      'ZooKeeper Port': 'ZooKeeper Port',
      'ZK Status Port': 'ZK Status Port',
      'Data path': 'Data path',
      'Cluster Username': 'Cluster Username',
      'Cluster Password': 'Cluster Password',
      'SSH Username': 'SSH Username',
      'Public Key': 'Public Key',
      'Save Password': 'Save Password',
      'SSH Password': 'SSH Password',
      'SSH Port':'SSH Port',
      'Import a ClickHouse Cluster':'Import a ClickHouse Cluster',
      'Data Loader Management':'Data Loader Management',
      'All ClickHouse Clusters': 'All ClickHouse Clusters',
      'Mode': 'Mode',
      'ClickHouse Node IP': 'ClickHouse Node IP',
      'ClickHouse Node Count': 'ClickHouse Node Count',
      'Actions': 'Actions',
      'Go to cluster': 'Go to Cluster',
      'ClickHouse Version': 'ClickHouse Version',
      'Overview': 'Overview',
      'Manage': 'Manage',
      'Tables': 'Tables',
      'Session': 'Session',
      'Query Execution': 'Query Execution',
      'Settings': 'Settings',
      'The imported cluster does not support editing': 'The imported cluster does not support editing',
      'Address': 'Address',
      'Port': 'Port',
      'ClickHouse HTTP Port': 'HTTP Port',
      'ClickHouse Protocol': 'Protocol',
      'TLS Secure': 'TLS Secure',
    },
    manage: {
      'Upgrade Cluster': 'Upgrade Cluster',
      'Upgrade to': 'Upgrade to',
      'Policy': 'Policy',
      'Full': 'Full',
      'Rolling': 'Rolling',
      'skip same version': 'skip same version',
      'Node IP': 'Node IP',
      'Node Name': 'Node Name',
      'shard number': 'shard number',
      'replica number': 'replica number',
      'Node Status': 'Node Status' ,
      'Online': 'Online',
      'Offline': 'Offline',
      'View Log': 'View Log',
      'Start Cluster': 'Start Cluster',
      'Stop Cluster': 'Stop Cluster',
      'Destroy Cluster': 'Destroy Cluster',
      'Rebalance Cluster': 'Rebalance Cluster',
      'Add Node': 'Add Node',
      'New Node IP': 'New Node IP',
      'Node Shard': 'Node Shard',
      'Disk(Used/Total)': 'Disk(Used/Total)',
      'clickhouse Log': 'clickhouse Log',
      'Normal Log': 'Normal Log',
      'Error Log': 'Error Log',
      'Latest log': 'Latest log',
      'Log Count': 'Log Count',
      'Default: 1000': 'Default: 1000',
      'All Table Rebalance': 'All Table Rebalance',
      'Disabled Writing': 'Warning: During load balancing, data changes are prohibited. Please stop all write operations!',
    },
    tables: {
      'Table Metrics': 'Table Metrics',
      'Table Name': 'Table Name',
      'Columns': 'Columns',
      'Rows': 'Rows',
      'Partitions': 'Partitions',
      'Parts': 'Parts Count',
      'UnCompressed': 'Disk Space(uncompress)',
      'Compressed': 'Disk Space(compress)',
      'Disk Space': 'Disk Space',
      'Completed Queries in last 24h': 'Completed Queries in last 24h',
      'Failed Queries in last 24h': 'Failed Queries in last 24h',
      'Last 7 days info': 'Queries cost(0.5,0.99,max)in last 7 days(ms)',
      'Table Replication Status': 'Table Replication Status',
      'Zookeeper Status': 'Zookeeper Status',
      'Schema': 'Schema',
      'Delete': 'Delete',
      'Action': 'Action',
      'RWStatus': 'RWStatus',
      'View': 'View',
      'Partition': 'Partition',
      'Min Time': 'Min Time',
      'Max Time': 'Max Time',
      'Disk Name': 'Disk Name',
      'Archive': 'Archive',
      'Time Range': 'Time Range',
      'To': '-',
      'Begin': 'Begin',
      'End': 'End',
      'Export Format': 'Export Format',
      'Maximum Time Slice': 'Maximum Time Slice',
      'Target': 'Target',
      'Path': 'Path',
      'Address': 'Address',
      'User': 'User',
      'Directory': 'Directory',
      'Endpoint': 'Endpoint',
      'AccessKeyID': 'AccessKeyID',
      'SecretAccessKey': 'SecretAccessKey',
      'Region': 'Region',
      'Bucket': 'Bucket',
      'Compression': 'Compression',
      'Current Month': 'Current Month',
      'So far this year': 'So far this year',
      'Last six months': 'Last six months',
      'Resume': 'Resume',
      'Table Merges': 'Table Merges',
      'Elapsed': 'Elapsed',
      'MergeStart': 'MergeStart',
      'Progress': 'CPU',
      'MemUsage': 'Memory',
      'NumParts': 'NumParts',
      'ResultPartName': 'ResultPartName',
      'SourcePartNames': 'SourcePartNames',
      'Algorithm': 'Algorithm'
    },
    session: {
      'Open Sessions': 'Open Sessions',
      'DDL Queue':'Distributed DDL Queue',
      'Slow Sessions': 'Slow Sessions',
      'Limit Count': 'Limit Count',
      'Query Start Time': 'Query Start Time',
      'Query Duration': 'Query Duration(ms)',
      'Query': 'Query',
      'Initial User': 'Initial User',
      'Initial Query ID': 'Initial Query ID',
      'Initial Address': 'Initial Address',
      'Thread Numbers': 'Thread Numbers',
      'Kill': 'Kill',
      'Node Host': 'Node Host',
    },
    queryExecution: {
      'Query History': 'Query History',
      'Execute Query': 'Execute Query',
      'Execute Explain': 'Execute Explain',
      "Format": 'Format',
      'Database': 'Database',
      'SQL Console': 'SQL Console',
      'Result': 'Result',
      'SQL': 'SQL',
      'CreateTime': 'CreateTime',
      'Copy Success': 'Copy Success',
      'Copy': 'Copy',
      'No Data': 'No Data',
      'No Sql': 'No Sql',
      'Node': 'Node',
      'Random': 'Random',
    },
    homePackage: {
      'Upload Packages': 'Upload Packages',
      'ClickHouse Packages': 'ClickHouse Packages',
    },
    ClickHouseEcharts: {
      'ClickHouse Table KPIs': 'ClickHouse Database KPIs',
      'clickhouse Query': 'clickhouse.Query',
      'ClickHouse Node KPIs': 'ClickHouse Node KPIs',
      'cpu usage': 'cpu usage',
      'memory usage': 'memory usage',
      'disk usage': 'disk usage',
      'IOPS': 'IOPS',
      'ZooKeeper KPIs': 'ZooKeeper KPIs',
      'znode_count': 'znode_count',
      'leader_uptime': 'leader_uptime',
      'stale_sessions_expired': 'stale_sessions_expired',
      'jvm_gc_collection_seconds_count': 'jvm_gc_collection_seconds_count',
      'jvm_gc_collection_seconds_sum': 'jvm_gc_collection_seconds_sum',
      'Clickhouse Sinker KPIs': 'Clickhouse Sinker KPIs',
      'rate clickhouse_sinker_consume_msgs_total 1m': 'sum by(task)(rate(clickhouse_sinker_consume_msgs_total[1m]))',
      'rate clickhouse_sinker_flush_msgs_total 1m': 'sum by(task) (rate(clickhouse_sinker_flush_msgs_total[1m]))',
      'rate clickhouse_sinker_shard_msgs 1m': 'sum by(task) (clickhouse_sinker_shard_msgs)',
      'rate clickhouse_sinker_ring_msgs 1m': 'sum by(task) (clickhouse_sinker_ring_msgs)',
      'rate clickhouse_sinker_parsing_pool_backlog 1m': 'sum by(task)(clickhouse_sinker_parsing_pool_backlog)',
      'rate clickhouse_sinker_writing_pool_backlog 1m': 'sum by(task) (clickhouse_sinker_writing_pool_backlog)',
    },
    task: {
      'Task List': 'Task List',
      "Running Task Num": 'Running Task: ',
      'Task ID': 'Task ID',
      'Cluster Name': 'Cluster Name',
      'Task Type': 'Task Type',
      'Task Name': 'Task Name',
      'Task Status': 'Task Status',
      'Create Time': 'Create Time',
      'View': 'View',
      'View Task': 'View Task Status',
      'Close': 'Close',
      'Current Action': 'Current Action',
      'Node': 'Node',
      'Status': 'Status',
      'Delete Task': 'Delete Task',
      'Message': 'Message',
      'Update Time': 'Update Time',
      'Duration': 'Duration',
      'Stop': 'Stop',
      'The current operation cannot be actually canceled, only the task status is changed to stopped': 'The current operation cannot be actually canceled, only the task status is changed to stopped.Confirm the operation?',
    }
  },
  zh: {
    ...zhCN,
    common: {
      'Success': '成功',
      'Close': '关闭',
      'Create': '创建',
      'Confirm': '确定',
      'Cancel': '取消',
      'Import': '导入',
      'Delete': '删除',
      'Confirm Delete': '确认要进行 删除 操作么?',
      'Logout': '退出',
      'Upload': '上传',
      'placeholderIp': '多个IP以逗号分隔，支持CIDR和Range简写',
      'Required': '必填字段',
      'Clusters': '集群',
      'overview': '监控集群',
      'manage': '管理集群',
      'tables': '表管理',
      'session': '会话管理',
      'query-execution': '查询管理',
      'package': '安装包管理',
      'settings': '设置',
      'Upgrade': '升级',
      'Save': '保存',
      'Table Name': '表名',
      'Save Reboot': '保存 & 重启',
      'Version': '版本',
      'Files': '文件',
      'Action': '操作',
      'Upload File': '上传文件',
      'tips': '提示',
      'start': '确认要进行 启动 操作么?',
      'stop': '确认要进行 停止 操作么?',
      'destroy': '确认要进行 销毁 操作么?',
      'rebalance': '确认要进行 平衡 操作么?',
      'upgrade': '升级',
      'Yes': '是',
      'No': '否',
      'Please fill out': '请输入',
      'Please choose': '请选择',
      'Input error, please check the rules and re-enter': '输入错误，请根据规则{rule}重新输入',
      'Field Name': '字段名称',
      'Field Type': '字段类型',
      'Defaults': '默认值',
      'Is it required': '是否必填',
      'Description': '描述',
      'Ranges': '取值范围',
      'Null': '无',
      'Please enter a value greater than {min}': '请输入大于 {min} 的值',
      'Please enter a value less than or equal to {max}': '请输入小于等于 {max} 的值',
      'Filter': '筛选',
      'Reset': '重置',
      'keyword search': '关键字搜索',
      "Current Browser Not Support": '当前浏览器不支持',
      'Package Type': '安装包类型',
      'Message Center': '消息中心',
      'Action Success': '操作成功',
      'Refresh': '刷新',
      'Force Override': '强制覆盖',
      'Force Delete': '强制删除',
    },
    layout: {
      'ClickHouse Management Console': 'ckman管理平台',
      'Settings': '设置',
      'Logout Success': '成功登出',
      'Message Center': '消息中心',
      'Document': '文档',
      'API':'接口说明',
    },
    home: {
      'Create or import a ClickHouse Cluster': '创建或导入集群',
      'Create a ClickHouse Cluster': '创建集群',
      'Logic Name': '逻辑名称',
      'Belongs to Logic': '逻辑集群',
      'Cluster Name': '集群名称',
      'ClickHouse TCP Port': 'TCP端口',
      'ClickHouse Node List': '节点列表',
      'Replica': '是否设置副本',
      'Zookeeper Node List': 'Zookeeper集群列表',
      'ZooKeeper Port': 'Zookeeper端口',
      'ZK Status Port': 'Zookeeper监控端口',
      'Data path': '数据路径',
      'Cluster Username': '用户名',
      'Cluster Password': '密码',
      'SSH Username': '主机用户名',
      'Public Key': '使用公钥',
      'Save Password': '保存密码',
      'SSH Password': '主机密码',
      'SSH Port': 'SSH端口',
      'Import a ClickHouse Cluster':'导入集群',
      'Data Loader Management':'数据导入管理',
      'All ClickHouse Clusters': '集群列表',
      'Mode': '集群模式',
      'ClickHouse Node IP': 'ClickHouse节点IP',
      'ClickHouse Node Count': 'ClickHouse节点数量',
      'Actions': '操作',
      'Go to cluster': '进入集群',
      'ClickHouse Version': 'ClickHouse版本',
      'Overview': '监控集群',
      'Manage': '管理集群',
      'Tables': '表管理',
      'Session': '会话管理',
      'Query Execution': '查询管理',
      'Settings': '设置',
      'The imported cluster does not support editing': '导入的集群不支持编辑',
      'Address': '地址',
      'Port': '端口',
      'ClickHouse HTTP Port': 'HTTP 端口',
      'ClickHouse Protocol': '连接协议',
      'TLS Secure': 'TLS 安全认证',
    },
    manage: {
      'Upgrade Cluster': '升级集群',
      'Upgrade to': '升级至',
      'Policy': '升级策略',
      'Full': '全量升级',
      'Rolling': '滚动升级',
      'skip same version': '是否跳过相同版本',
      'Node IP': '节点IP',
      'Node Name': '节点名称',
      'shard number': '分片编号',
      'replica number': '副本编号',
      'Node Status': '节点状态' , // （green-健康 red-离线  yellow-亚健康）
      'Online': '上线',
      'Offline': '下线',
      'View Log': '查看日志',
      'Start Cluster': '开启集群',
      'Stop Cluster': '停止集群',
      'Destroy Cluster': '销毁集群',
      'Rebalance Cluster': '均衡集群',
      'Add Node': '增加节点',
      'New Node IP': '节点IP',
      'Node Shard': '分片编号',
      'Disk(Used/Total)': '磁盘(已用/总计)',
      'clickhouse Log': 'clickhouse 日志',
      'Normal Log': '正常日志',
      'Error Log': '错误日志',
      'Latest log': '最新日志',
      'Log Count': '日志条数',
      'Default: 1000': '默认值：1000',
      'All Table Rebalance': '所有表均参与均衡',
      'Disabled Writing': '注意：负载均衡期间禁止更改数据，请停止所有写入操作!',
    },
    tables: {
      'Table Metrics': '表指标',
      'Table Name': '表名',
      'Columns': '列数',
      'Rows': '行数',
      'Partitions': '分区数',
      'Parts': 'Parts数量',
      'UnCompressed': '占用磁盘(压缩前)',
      'Compressed': '占用磁盘(压缩后)',
      'Disk Space': '占用磁盘',
      'Completed Queries in last 24h': '过去24小时成功的SQL数量',
      'Failed Queries in last 24h': '过去24小时失败的SQL数量',
      'Last 7 days info': '过去7天（0.5,0.99,max）SQL耗时(ms)',
      'Table Replication Status': '复制表状态',
      'Zookeeper Status': 'Zookeeper状态',
      'Schema': '查看建表语句',
      'Delete': '删除',
      'Action': '操作',
      'RWStatus': '读写状态',
      'View': '查看',
      'Partition': '分区名称',
      'Min Time': '最小时间',
      'Max Time': '最大时间',
      'Disk Name': '磁盘名称',
      'Archive': '备份',
      'Time Range': '时间范围',
      'To': '至',
      'Begin': '开始日期',
      'End': '结束日志',
      'Export Format': '导出格式',
      'Maximum Time Slice': '最大时间片',
      'Target': '备份目标',
      'Path': '路径',
      'Address': '地址',
      'User': '用户',
      'Directory': '目录',
      'Endpoint': 'Endpoint',
      'AccessKeyID': 'AccessKeyID',
      'SecretAccessKey': 'SecretAccessKey',
      'Region': 'Region',
      'Bucket': 'Bucket',
      'Compression': '压缩格式',
      'Current Month': '本月',
      'So far this year': '今年至今',
      'Last six months': '最近六个月',
      'Resume': '恢复',
      'Table Merges': '合并指标',
      'Elapsed': '耗时',
      'MergeStart': '合并开始时间',
      'Progress': 'CPU',
      'MemUsage': '内存',
      'NumParts': '合并Part个数',
      'ResultPartName': '合并后Part名',
      'SourcePartNames': '合并前Part名',
      'Algorithm': '合并算法'
    },
    session: {
      'Open Sessions': '正在执行的SQL会话',
      'DDL Queue': '分布式DDL查询',
      'Slow Sessions': '慢SQL查询',
      'Limit Count': '查询条数',
      'Query Start Time': 'SQL开始时间',
      'Query Duration': 'SQL持续时间(ms)',
      'Query': 'SQL语句',
      'Initial User': '执行用户',
      'Initial Query ID': '初始查询ID',
      'Initial Address': '执行主机',
      'Thread Numbers': '线程号',
      'Kill': '终止',
      'Node Host': '主节点',
    },
    queryExecution: {
      'Query History': '查询历史',
      'Execute Query': '执行查询',
      'Execute Explain': '执行计划',
      "Format": '格式化',
      'Database': '数据库',
      'SQL Console': '控制台',
      'Result': '执行结果',
      'SQL': '查询语句',
      'CreateTime': '创建时间',
      'Copy Success': '复制成功',
      'Copy': '复制',
      'No Data': '暂无数据',
      'No Sql': '请输入sql语句',
      'Node': '节点',
      'Random': '随机',
    },
    homePackage: {
      'Upload Packages': '上传安装包',
      'ClickHouse Packages': 'ClickHouse 安装包管理',
    },
    ClickHouseEcharts: {
      'ClickHouse Table KPIs': 'ClickHouse 数据库性能指标',
      'clickhouse Query': 'SQL查询指标',
      'ClickHouse Node KPIs': 'ClickHouse节点性能指标',
      'cpu usage': 'CPU占用',
      'memory usage': '内存占用',
      'disk usage': '磁盘占用',
      'IOPS': 'IO指标',
      'ZooKeeper KPIs': 'zookeeper指标',
      'znode_count': 'znode数量',
      'leader_uptime': 'leader存活时间',
      'stale_sessions_expired': '过期会话',
      'jvm_gc_collection_seconds_count': 'jvm gc 次数',
      'jvm_gc_collection_seconds_sum': 'jvm gc 耗时',
      'Clickhouse Sinker KPIs': 'ClickHouse Sinker 指标',
      'rate clickhouse_sinker_consume_msgs_total 1m': 'clickhouse_sinker消费Kafka消息的速率(个/秒)',
      'rate clickhouse_sinker_flush_msgs_total 1m': 'clickhouse_sinker写ClickHouse的速率(行/秒)',
      'rate clickhouse_sinker_shard_msgs 1m': 'clickhouse_sinker shard buffer当前包含的消息数目',
      'rate clickhouse_sinker_ring_msgs 1m': 'clickhouse_sinker ring buffer当前包含的消息数目',
      'rate clickhouse_sinker_parsing_pool_backlog 1m': 'clickhouse_sinker 解析协程池当前积压的消息数目',
      'rate clickhouse_sinker_writing_pool_backlog 1m': 'clickhouse_sinker 输出协程池当前积压的批数目',
    },
    task: {
      'Task List': '任务列表',
      "Running Task Num": '运行中：',
      'Task ID': '任务编号',
      'Cluster Name': '集群名称',
      'Task Type': '任务类型',
      'Task Name': '任务名称',
      'Task Status': '任务状态',
      'Create Time': '创建时间',
      'View': '查看',
      'View Task': '查看任务状态',
      'Close': '关闭',
      'Current Action': '当前操作',
      'Node': '节点',
      'Status': '状态',
      'Delete Task': '删除任务',
      'Message': '返回信息',
      'Update Time': '更新时间',
      'Duration': '持续时间',
      'Stop': '停止',
      'The current operation cannot be actually canceled, only the task status is changed to stopped': '当前操作无法实际取消，仅将任务状态改为已停止。确认操作？',
    }
  },
};

const locale = localStorage.getItem('locale') || 'en';
export const $i18n = new VueI18n({ locale, messages });
const title = $i18n.t('layout.ClickHouse Management Console') + '';
document.title = title;
document.documentElement.lang = locale;
