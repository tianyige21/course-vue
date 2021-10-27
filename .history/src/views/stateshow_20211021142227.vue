<!--  -->
<template>
<div>
   state页面
   <br>{{count}}
</div>
</template>

<script>
export default {
  name: 'stateshow',
  props: {
    
},
  data () {
    return {
    }
  },
  components: {
    
},
  computed: {
    count () {
      return this.$store.state.count
    }
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