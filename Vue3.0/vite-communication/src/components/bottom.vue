<template>
  <div>
    <legend>Bottom</legend>
    <!-- <ul>
      <li v-for="item in users" :key="item"></li>
    </ul> -->
    <p></p>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  created() {
    console.log(this.$listeners);
    console.log(this.$attrs);
    console.log(this.$props);
    console.log(this.$data);
  },
};
</script>

<style>
</style>