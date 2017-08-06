<template>
  <div>
    <div class='form-title'>Feedback Form</div>
  	<textarea class='textarea'></textarea>
  	<button class='submit'  v-on:click='submit()'>Submit</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    
    }
  },
  methods: {
    submit: function(){
      this.$emit('formSubmitted', 'Feedback Form successfully submitted.')
    }
  }
}
</script>

<style scoped>
textarea{
	height: 200px;
    width: 500px;
    margin: 40px;
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
.form-title{
    margin-left: 50px;
    margin-top: 50px;
}
</style>
