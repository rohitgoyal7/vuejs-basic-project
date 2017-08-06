<template>
  <div>
    <div>
      <input type='text' placeholder='Search Blogs' v-model='searchBLog'/>
    </div>
    <ul>
      <li v-for='blog in filteredBlogs'><router-link v-bind:to='"blog/"+ blog.id'>{{blog.name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	blogs: [],
      searchBLog: ''
    }
  },
  created() {
        this.$http.get('https://my-blogs-vue.firebaseio.com/posts.json').then(function(data){
            return data.json()
        }).then(function(data){
            var blogsArray = [];
            for (let key in data){
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray;
            //console.log(this.blogs);
        });
    },
    computed: {
      filteredBlogs: function(){
        return this.blogs.filter((blog) => {
            return blog.name.match(this.searchBLog);
        });
      }
    }
}
</script>

<style scoped>
ul{
	padding-left: 10px;
	padding-right: 10px;
}
li{
	height: 30px;
    border: 1px solid black;
    line-height: 30px;
    text-align: center;
    background-color: #e8e8db;
    cursor: pointer;
}
input{
  width: 90%;
    margin: 16px;
    display: inline-block;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px #ddd;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
}
</style>
