<template>
	<div id='form'>
		<input type='text' placeholder="Enter your username" ref='username' v-on:keyup='hideErrorMsg'/>
		<input type='password' placeholder="Enter your password" ref='password' v-on:keyup='hideErrorMsg'/>
		<div id='error-msg' v-if='showErrorMsg'>You have entered wrong credentials.</div>
		<button id='submit' v-on:click='submit'>Submit</button>
	</div>
</template>

<script>
export default {
    props: {                // this is with validation check
        validateUser:{
            type: Function,
            required: true
        },
        showErrorMsg:{
            type: Boolean,
            required: true
        },
        hideErrorMsg: {
            type: Function,
            required: true
        }
    },
    data () {
        return {
        
        }
    },
    methods: {
        submit : function(){
            this.validateUser(this.$refs.username.value, this.$refs.password.value);
        }
    }
}
</script>

<style scoped>
#form{
	width: 25%;
    height: 350px;
    background-color: rgba(239, 232, 208, 0.68);
    border-radius: 10px;
    margin: auto;
    margin-top: 50px;
    padding-top: 50px;
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
#error-msg{
	margin: 16px;
    font-size: 12px;
    color: red;
}
#submit {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    width: 200px;
    margin-left: 70px;
}
</style>
