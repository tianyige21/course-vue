<!--  -->
<template>
<div>
 <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

</div>
</template>

<script>
//import x from ''
export default {
  name: 'MachineData',
  props: {
    
},
  data () {
    return {
    }
  },
  components: {
    
},
  computed: {
    
},
  watch: {
    
},
  methods: {
    
},
  beforeMount () { 
    
},
  mounted () { 
    
},
  activated () {
    
 }
}
</script>
<style lang='less' scoped>
/* @import url(); 引入css类 */

</style>