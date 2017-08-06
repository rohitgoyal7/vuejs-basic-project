<template>
  	<ul>
  		<router-link v-for='tab in tabs' v-bind:to='tab.path' exact><li>{{tab.name}}</li></router-link>
  	</ul>
</template>

<script>
export default {
  data () {
    return {
    	tabs: [
    		{
    			'name':'Post Blog',
    			'path':'/dashboard/postBlog'
    		},
    		{
    			'name':'My Blogs',
    			'path':'/dashboard/myBlogs'
    		},
    		{
    			'name':"FAQ's",
    			'path':'/dashboard/faqs'
    		},
    		{
    			'name':'Logout',
    			'path':'/'
    		}
    	]
    }
  }
}
</script>

<style>
ul{
	list-style: none;
	padding-left: 10px;
	padding-right: 10px;
}
li{
	height: 30px;
    border: 1px solid black;
    line-height: 30px;
    text-align: center;
    background-color: #afaf76
}
.router-link-active li{
    background: #d0d884;
}
</style>
