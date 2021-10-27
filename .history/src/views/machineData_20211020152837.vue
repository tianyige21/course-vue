<!--  -->
<template>
  <div>
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column prop="name"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="data"
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
        name: '王小虎',
        data: '上海市普陀区金沙江路 1518 弄'
      }, {
        name: '王小虎',
        data: '上海市普陀区金沙江路 1517 弄'
      }, {
        name: '王小虎',
        data: '上海市普陀区金沙江路 1519 弄'
      }, {
        name: '王小虎',
        data: '上海市普陀区金沙江路 1516 弄'
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
      this.$axios({
        method: "get",
        url: "/practice/host_usage/"  // 直接请求  http://localhost:8000 回报跨域报错
      }).then(response => {
        //这里使用了ES6的语法
        console.log(response.data); //请求成功返回的数据
       this.tableData =  this.mapToArray(response.data.data)
      });

    },
    mapToArray (map) {
      let newArr = []
      Object.keys(map).forEach((key) => {
        newArr.push({
          name: key,
          data: map[key]
        })
      })
      return newArr
    }
  },
  beforeMount () {

  },
  mounted () {
    this.getData()
  },
  activated () {

  }
}
</script>
<style>
/* @import url(); 引入css类 */
</style>