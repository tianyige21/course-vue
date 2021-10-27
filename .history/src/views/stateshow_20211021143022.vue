<!--  -->
<template>
<div>
   state页面
   <br>{{count}}
   <button @click="increment">点击</button>
   <router-link :to="{path:'/test'}"><router-link
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
   increment (){
     this.$store.commit('increment')
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
<style >
/* @import url(); 引入css类 */

</style>