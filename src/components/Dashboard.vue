<template>
	<div id='dashboard'>
		<div id='left-panel'>
			<side-panel></side-panel>
		</div>
		<div id='right-panel'>
			<router-view></router-view>
		</div>
		<div id='clear'></div>
	</div>
</template>

<script>
import SidePanel from './SidePanel.vue';
import PostBlog from './PostBlog.vue';
import MyBlogs from './MyBlogs.vue';
import Faq from './Faq.vue';
import SingleBlog from './SingleBlog.vue';
export default {
	components:{
		'side-panel': SidePanel
	},
	data () {
		return {

		}
	}
}
</script>

<style scoped>
#left-panel{
	width: 20%;
    float: left;
   	background-color: #e6e6bd !important;
	height: 700px !important;
}
#right-panel{
	width:80%;
	float:right;
}
#clear{
	clear: both;
}
</style>
