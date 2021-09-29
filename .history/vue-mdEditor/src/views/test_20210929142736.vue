<!--  -->
<template>
<div>
  1212
</div>
</template>

<script>
//import x from ''
import { toRefs } from 'vue'
 

export default {
  name: 'Test',
  setup(props) {
	const { title } = toRefs(props)
 
	console.log(title.value)
},
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