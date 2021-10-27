<!--  -->
<template>
<div>
   测试页面
   <br>{{stateshow1}}
</div>
</template>

<script>
export default {
  name: 'state',
  props: {
    
},
  data () {
    return {
      stateshow1:this.$store.state.data1
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
<style >
/* @import url(); 引入css类 */

</style>