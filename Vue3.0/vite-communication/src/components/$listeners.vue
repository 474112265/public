<template>
  <fieldset style="width: 50%; margin: 50px auto; border: 2px solid yellowgreen">
      <legend>$listeners</legend>
      <ul>
          <!-- <li v-for=""></li> -->
      </ul>
      <Bottom v-bind="$attrs" v-on="$listeners" />
  </fieldset>
</template>

<script>
import Bottom from "./bottom.vue"
export default {
    components:{
        Bottom
    },
    created(){
        console.log(this.$listeners);
        console.log(this.users instanceof Array);
        console.log(Object.prototype.toString.call(this.users));
    },
    props:{
        users:{
            type: Array || Object,
            required: true
        },
        msg:{
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>