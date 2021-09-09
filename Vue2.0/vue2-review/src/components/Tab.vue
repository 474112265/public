<template>
  <div>
    <!-- <button @click="flag = 'demo1'">demo1</button>
    <button @click="flag = 'demo2'">demo2</button> -->
    <router-link :to="{path:'/about/demo1',query:{idd:12,agge:13}}">demo1</router-link>
    <router-link to="/about/demo2/23/76">demo2</router-link>
    <fieldset>
      <legend>flag</legend>
        <my-hello text="worlds" />
      <!-- <keep-alive> -->
      <router-view></router-view>
        <!-- <components :is="flag"></components> -->
      <!-- </keep-alive> -->
    </fieldset>
  </div>
</template>

<script>
// import demo1 from "@/views/tab/demo1";
// import demo2 from "@/views/tab/demo2";

export default {
  name: "tab",
  data() {
    return {
      flag: "demo1",
    };
  },
  components: {
    // demo1,
    // demo2,
  },
};
</script>

<style>
</style>