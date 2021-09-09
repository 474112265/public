<template>
  <div class="btn">
      <button>{{text}}</button>
  </div>
</template>

<script>
export default {
    name:"my-btn",
    props:{
        text:{
            type:String,
            default:'按钮'
        }
    }
}
</script>

<style>

</style>