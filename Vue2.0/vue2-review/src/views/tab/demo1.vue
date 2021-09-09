<template>
  <div>
      <h3>demo1：{{randow}}</h3>
      <p>get:{{$route.query.idd}}-------{{$route.query.agge}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      randow:Math.random().toFixed(2)
    }
  },
  created(){
    console.log(this.$route);
  }
}
</script>

<style>

</style>