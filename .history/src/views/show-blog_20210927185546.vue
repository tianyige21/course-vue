<template>
  <div>
    <h3>博客总览</h3>
    <input type="text"
           v-model="searchText"
           placeholder="搜索">
    <div v-theme:column="'wide'"
         class="blogrow"
         v-for="blog in  filteredBlogs">
      <h4 v-titleColor>{{blog.title | to-upcase}}</h4>
      <article>{{blog.body  | snipper}}</article>
    </div>
  </div>
</template>
<script>
export default {
  name: "show-blog",
  data () {
    return {
      blogs: [],
      searchText: ''
    }
  },
  /*注册局部组件*/
  filters: {
    /* "to-upcase":function (value) {
       return value.toUpperCase();
     },*/
    toUpcase (value) {
      return value.toUpperCase();
    }
  },
  directives: {
    'titleColor': {
      bind (el, binding, vnode) {
        el.style.color = 'blue'
      }
    }
  },
  created () {
    this.$http.get('././static/data.json')
      .then(
        res => {
          this.blogs = res.body;
        }
      )
  },
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.searchText);
      })
    }
  }
}
</script>

<style scoped>
.blogrow {
  background-color: #efefef;
  padding: 10px;
  margin: 10px auto;
  text-align: left;
}
.blogrow h4 {
  margin: 0 0 10px 0;
}
</style>