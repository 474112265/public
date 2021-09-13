<template>
  <div>
    <h3 @click="randowValue">demo2：{{ randow }}</h3>
    <p>get:{{ $route.params.id }}-------{{ $route.params.age }}</p>
    <p>props====={{person}}</p>
    <input type="text" v-model="randow" @keyup.enter="add">
    <p><span v-for="(v) in arr" :key="v" >  {{v}}  ,</span></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randow: Math.random().toFixed(2),
      arr:[1,2]
    };
  },
  methods:{
    randowValue(){
      this.randow = Math.random().toFixed(2);
      return Math.random().toFixed(2)
    },
    add(e){
      this.arr.push(e.target.value)
    }
  },
  props:['person'],
  watch:{
    randow:(newValue,oldValue)=>{
      console.log(`${newValue}----${oldValue}`);
    }
  }
};
</script>

<style>
</style>