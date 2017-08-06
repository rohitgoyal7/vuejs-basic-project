import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routes from './routes';

Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
	routes: Routes,
	mode: 'history'
});

export const bus = new Vue(); //import and use it as EVENT BUS --- bus.$emit and bus.$on	

//GLOBAL FILTER
/*Vue.filter('to-uppercase',function(value){
	return value.toUpperCase();
})*/

//Custom Directives
Vue.directive('rainbow',{
	bind(el,binding,vnode){
		if(binding.value == 'random'){
			el.style.color = '#' + Math.random().toString().slice(2,8);
		}
		else{
			el.style.color = 'red';
		}
		if(binding.arg == 'column'){
			console.log('argument of this directive is logged.')
		}
	}
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
