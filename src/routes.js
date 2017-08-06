import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import MyBlogs from './components/MyBlogs.vue';
import PostBlog from './components/PostBlog.vue';
import Faq from './components/Faq.vue';
import SingleBlog from './components/SingleBlog.vue';

export default [
	{
		path: '/',
		component: Login
	},
	{
		path: '/dashboard',
		component: Dashboard,
		children:[
			{
				path: 'postBlog',
				component: PostBlog 
			},
			{
				path: 'myBlogs',
				component: MyBlogs 
			},
			{
				path: 'faqs',
				component: Faq 
			},
			{
				path: 'blog/:id',
				component: SingleBlog
			}
		]
	}
]