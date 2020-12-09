<template>
  <ul>
  	<li v-for="m in list"></li>
  </ul>
</template>

<script>

export default {
  name: 'Tree',
  data(){
      return {
          list:[]
      }
  },
  components: {
    
  }
}
</script>

<style>
  
</style>
