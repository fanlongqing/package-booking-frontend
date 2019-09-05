<template>
  <a-table :columns="columns"
    :dataSource="data"
    :loading="loading"
  >
    <template slot="name" slot-scope="name">
      {{name.first}} {{name.last}}
    </template>
  </a-table>
</template>
<script>
const columns = [{
  title: '运单号',
  dataIndex: 'trackingNumber',
  sorter: true,
  width: '20%',
}, {
  title: '收件人',
  dataIndex: 'addressee',
  width: '20%',
}, {
  title: '电话',
  dataIndex: 'telephone',
}, {
  title: '状态',
  dataIndex: 'state',
}, {
  title: '预约时间',
  dataIndex: 'dateTime',
}];

export default {
  computed: {
    data:function(){
      return this.$store.state.data;
    },
    loading:function(){
        return this.$store.state.loading;
    }
  },
  data() {
    return {
      columns,
    }
  },
  created:{
      getPackages:function(){
          this.$store.dispatch("getPackages");
      }
  }
}
</script>
