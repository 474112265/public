<template>
  <div style="margin-top: 50px; text-align: center">
    <fieldset style="width: 50%; margin: 0 auto">
      <legend>Wcp组件</legend>
      firstName: <input type="text" v-model="person.firstName" /><br />
      lastName: <input type="text" v-model="person.lastName" /><br />
      Name: <input type="text" v-model="fullName4" />
    </fieldset>
  </div>
</template>

<script>
import { computed, watch, ref, watchEffect } from "vue";

export default {
  name: "wcp",
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
  setup() {
    let fullName3 = ref("");
    return {
      fullName3,
    };
  },
  beforeCreate() {
    // let setName = computed({
    //     get(){
    //         return person.lastName + '--' + person.firstName;
    //     },
    //     set(val){
    //         console.log('=====',val);
    //     }
    // })
    const fullName4 = computed({
      get() {
        console.log("fullName4 get");
        return this.person.firstName + "-" + this.person.lastName;
      },
      set(value) {
        if (typeof value == string) {
          const names = value.split("-");
          this.person.firstName = names[0];
          this.person.lastName = names[1];
        }else{
          console.log(`类型不对啊`);
        }
      },
    });
    // watch(this.person, ({firstName,lastName}) => {
    //     this.fullName3 = firstName + '--' + lastName;
    // },{immediate: true,deep:true});
    //immediate 默认直接一次watch    deep深度监听
  },
};
</script>

<style>
</style>