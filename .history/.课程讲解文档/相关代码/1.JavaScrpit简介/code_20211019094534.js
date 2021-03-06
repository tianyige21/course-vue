<!DOCTYPE html>
<html>

<head>
  <title>父子组件通信</title>
  <meta charset="utf-8">
  <script type="text/javascript" src="https://cn.vuejs.org/js/vue.js"></script>
</head>

<body>
  <div id="app">
    <child-component ref="child"></child-component>
  </div>
  <script src="https://cdn.bootcss.com/vue/2.5.10/vue.min.js"></script>
  <script type="text/javascript">

    new Vue({
      el: '#app',
      components: {
        // ********
        childComponent: {
          template: '<div>{{message}}</div>',
          data() {
            return {
              message: ''
            }
          },
          methods: {
            getMsg(value) {
              this.message = value;
            }
          }
        }
        // ********
      },
      mounted() {
        this.$refs.child.getMsg('父组件给子组件传递数据的');
      }
    });
    
  </script>
</body>
</html>