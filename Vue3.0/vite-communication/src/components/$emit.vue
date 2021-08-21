<template>
  <div class="border">
      <h2>$emit</h2>
      <ul>
          <li v-for="(item,index) in users" :key="index" :@click="deliver(index)" >{{item}}</li>
      </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default {
    name: 'emit',
    props:{
        users:{
            type:Array,
            required:true,
            default:[1,2,3,4]
        }
    },
    created(){
        this.users.pop();
    },
    methods:{
        deliver(index){
            this.$emit('deliverIndex',index)
        }
    }
}
</script>

<style>
    #app{
        cursor: pointer;
    }
    .border{
        display:inline-block;
        border: 1px solid;
        padding: 20px 30px;
    }
    .border h2{
        display:inline;
        color:yellowgreen;
    }
</style>