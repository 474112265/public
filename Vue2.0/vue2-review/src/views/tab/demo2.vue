<template>
  <div>
      <h3>demo2：{{randow}}</h3>
      <p>get:{{$route.params.id}}-------{{$route.params.age}}</p>
  </div>
</template>

<script>
export default {
data(){
    return{
       randow:Math.random().toFixed(2)
    }
  }
}
</script>

<style>

</style>