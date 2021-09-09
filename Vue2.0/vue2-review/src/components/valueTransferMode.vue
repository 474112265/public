<template>
  <fieldset>
      <legend>valueTransferMode</legend>
      <h2>{{msg}}</h2>
      <button @click="fun() ; clickEmit();" ref="btn" >按钮</button>
  </fieldset>
</template>

<script>
export default {
  props:{
    msg:{
      type:String,
      default:'hello worlds!'
    },
    fun:Function
  },
  methods:{
    clickEmit(){
      this.$emit('update:helloChange','123 123')
      this.$emit('e-msg',['this is a childrenAssembly',this])
    }
  }
}
</script>

<style>

</style>