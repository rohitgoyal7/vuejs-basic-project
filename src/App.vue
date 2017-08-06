<template>
    <div>
        <app-header></app-header>
        <div id='container'>
            <router-view  v-bind:validateUser='validateUser' v-bind:showErrorMsg='showErrormsg' v-bind:hideErrorMsg='hideErrorMsg'></router-view>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Login from './components/Login.vue';
export default {
  components: {
    'app-header' : Header,
    'app-footer' : Footer,
    'app-login' : Login
  },
  data () {
    return {
        showErrormsg : false
    }
  },
  methods : {
    validateUser : function(userName, password){
        if(userName == 'rohit' && password == 'rohit'){
        	this.$router.push({ path: 'dashboard/postBlog' });
        }
        else{
            this.showErrormsg = true;
        }
    },
    hideErrorMsg: function(){
        this.showErrormsg = false;
    }
  }
}
</script>

<style>

</style>
