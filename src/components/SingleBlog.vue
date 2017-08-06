<template>
	<div>
     	<div>Author:  {{blog.name}}</div>
     	<div>Title:  {{blog.title}}</div>
     	<div>Description:  {{blog.description}}</div>
  	</div>
</template>

<script>
export default {
  data () {
    return {
        id: this.$route.params.id,
        blog: {}
    }
  },
  created (){
  	this.$http.get('https://my-blogs-vue.firebaseio.com/posts/' + this.id + '.json').then(function(data){
            return data.json();
        }).then(function(data){
            this.blog = data;
        });
  }
}
</script>

<style scoped>

</style>
