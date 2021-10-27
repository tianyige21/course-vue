<!--  -->
<template>
  <div>
    测试页面
    <br />
    <router-link :to="{ path: '/stateshow' }">跳转stateshow</router-link>
    <div v-show="state">
       ====>s显示的页面
    </div>
    <div v-if="name1 === '张三'">
   这个是张三的页面
    </div>
    <div v-else>
  这是李四的页面
    </div>
    <br />
    {{count}}
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {

  },
  data () {
    return {
      state:true,
      name1:'张三'
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
<style  >
/* @import url(); 引入css类 */
</style>