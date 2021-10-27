<!--  -->
<template>
  <div>
    测试页面
    <br />
    <router-link :to="{ path: '/stateshow' }">跳转stateshow</router-link>

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