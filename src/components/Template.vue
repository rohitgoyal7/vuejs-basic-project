<template>
  <div>
    <p>
      <div class='heading'>Hi I am the title.</div>
      <slot name='first'></slot>
    </p>
    <p>
      <div class='heading'>Hi I am the description.</div>
      <slot name='second'></slot>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    
    }
  }
}
</script>

<style scoped>
.heading{
  font-weight: 700;
}
</style>
