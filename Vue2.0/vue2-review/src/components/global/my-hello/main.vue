<template>
  <div class="hello">
      <h3>hello {{text}}</h3>
  </div>
</template>

<script>
export default {
    name:"my-hello",
    props:{
        text:{
            type:String,
            default:'Vue2.0'
        }
    }
}
</script>

<style>

</style>