<!--  -->
<template>
  <div>
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column prop="date"
                       label="日期"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="address"
                       label="地址">
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: 'MachineData',
  props: {
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components: {

  },
  computed: {

  },
  watch: {

  },
  methods: {
    async getData () {
      try {
          this.$axios({
      method: "get",
      url: "/practice/user/"
    }).then(response => {
      //这里使用了ES6的语法
      console.log(response); //请求成功返回的数据
    });
         console.log(ResData);
      } catch (error) {
        console.log(error);
      }
     
    }
  },
  beforeMount () {

  },
  mounted () {

  },
  activated () {

  }
}
</script>
<style>
/* @import url(); 引入css类 */
</style>