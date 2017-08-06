<template>
	<div>
		<div v-for='faq in faqs' class='faq'>
			<div>Q. {{faq.question}}</div>
			<div>A. {{faq.answer}}</div>
		</div>
		<button class='submit' v-on:click='changeForm("complaint-form")'>Complaint Form</button>
		<button class='submit' v-on:click='changeForm("feedback-form")'>Feedback Form</button>
		<keep-alive>
			<component v-bind:is='component' v-on:formSubmitted='alert($event)'></component>
		</keep-alive>
	</div>
</template>

<script>
	import ComplaintForm from './ComplaintForm.vue';
	import FeedbackForm from './FeedbackForm.vue';
  import changeFormMixin from '../mixins/changeFormMixin';
export default {
  components:{
  	'complaint-form': ComplaintForm,
  	'feedback-form': FeedbackForm
  },
  data () {
    return {
    	faqs: [
    		{
    			'question':'What is a blog?',
    			'answer':"Blog is a person's views on a topic"
    		},
    		{
    			'question':'Are blogs beneficial?',
    			'answer':'Yes'
    		}
    	],
    	form: {
    		feedback : '',
    		complaint: ''
    	},
    	component: ''
    }
  },
  methods: {
  	/*changeForm : function(val){.  //Converted the same to MIXIN
  		this.component = val;
  	}*/
    alert: function(msg){
      alert(msg);
    }
  },
  mixins: [changeFormMixin]
}
</script>

<style scoped>
.faq{
	border: 1px solid black;
    margin-bottom: 5px;
    padding: 15px;
}
.submit {
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
