<template>
	<div>
		<div>
			<input type='text' placeholder="Enter Author" v-model.lazy='blog.name'/>
			<input type='text' placeholder="Enter Blog Title" v-model.lazy='blog.title'/>
			<input type='text' placeholder="Enter Blog Description" v-model.lazy='blog.description'/>
			<button id='submit' v-on:click='postBlog'>Submit</button>
		</div>
		<div id='preview'>
			<div>Author : {{blog.name | toUppercase}}</div>
			<div>Title : {{blog.title}}</div>
			<div>Description : {{blog.description}}</div>
		</div>

        <div class="slots">UNDERSTANDING SLOTS</div>
        <app-template>
            <div slot='first'>{{slotTitle}}</div>
            <div slot='second'>{{slotDescription}}</div>
        </app-template>

	</div>
</template>

<script>
import Template from './Template.vue';
export default {
    components :{
        'app-template': Template
    },
 	data () {
	    return {
	    	blog: {
	    		name: '',
	    		title: '',
	    		'description': ''
	    	},
            slotTitle: 'Slot Title',
            slotDescription: 'Slot Description'
	    }
 	},
 	methods: {
 		postBlog: function(){
            var self = this;
            this.$http.post('https://my-blogs-vue.firebaseio.com/posts.json', this.blog).then(function(data){
                alert('Successfully Submitted.');
                self.blog= {
                    name: '',
                    title: '',
                    'description': ''
                }
            });
 		}
 	},
  	filters: {
    	toUppercase: function(val){
    		if(val)
       		return val.toUpperCase();
    	}
	}

}
</script>

<style scoped>
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
.slots{
    margin-top: 50px;
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
#preview{
	border: 1px solid black;
}
</style>
