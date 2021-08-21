<template>
  <div>
    <div class="border">
      <h2>APP component</h2>
      <ul>
        <li v-for="item in users" :key="item">{{ item }}</li>
      </ul>
    </div>
    <!-- <Emit v-bind:users="users"></Emit> -->
    <!-- <Emit @deliverIndex="getIndex" :users="users" />
    <fieldset style="width: 50%; margin: 50px auto; border: 2px solid #f12">
      <legend>APP组件</legend>
      firstName: <input type="text" v-model="person.firstName"/><br />
      lastName: <input type="text"  v-model="person.lastName"/><br />
    </fieldset>
    <WCP :person="person"/> -->
    <Hook />
    <ToRef/>
    <getElement/>
    <Listeners :users="users" msg="msg" @click="getIndex" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Emit from "./components/$emit.vue";
import WCP from "./components/watch和component.vue";
import Hook from "./components/hook.vue";
import ToRef from "./components/toRef.vue";
import Listeners from "./components/$listeners.vue";
import getElement from "./components/ref 获取元素.vue";

export default defineComponent({
  name: "App",
  components: {
    Emit,
    WCP,
    Hook,
    ToRef,
    getElement,
    Listeners,
  },
  setup() {
    console.clear();
    const users = ref(["nike", "jack", "nomKit"]);
    let person = reactive({
      lastName: "三",
      firstName: "张",
      Name: "",
    });
    console.log(users);
    return {
      users,
      person,
    };
  },
  methods: {
    getIndex(e) {
      // this.data = e
      console.log(this);
      // this.users[e] = `${this.users[e]}---${e}`;
    },
  },
});
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dialog {
  position: relative;
  max-width: 50%;
  min-width: 300px;
  min-height: 60px;
  height: auto;
  background: skyblue;
  margin: 10px auto;
  border-radius: 10px;
  padding:10px 20px;
  word-break: break-word;
  text-align: left;
}
.dialog::before {
  content: "";
  position: absolute;
  right: -30px;
  top: 20%;
  margin-left: -20px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px;
  border-color: transparent transparent transparent skyblue;
  font-size: 0;
  line-height: 0;
}
.customer,.business{display:flex;}
.business{
  flex-direction:row-reverse;
}
.dialog.right{margin-right: 0;}
.left.dialog{
  background:yellowgreen;
  margin-left: 0;
}

.left.dialog::before{
  right:auto;
  top: 20%;
  left: -30px;
  margin-left: auto;
  border-color: transparent yellowgreen transparent transparent ;
}
</style>
