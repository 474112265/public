<template>
  <div class="about">
    <h3 @click="clickBgColor">{{ hello }}</h3>
    <TransferMode
      msg="hello valueMode"
      :fun="clickMsg"
      ref="transfer"
      @e-msg="getMsg"
      :helloChange.sync="hello"
    />
    <Tab />
  </div>
</template>
<script>
import TransferMode from "@/components/valueTransferMode.vue";
import Tab from "@/components/Tab.vue"

export default {
  name: "Transfer",
  data() {
    return {
      hello: "This is an about page",
    };
  },
  methods: {
    clickMsg() {
      console.log(`my is About!!`);
    },
    clickBgColor() {
      this.$refs.transfer.$refs.btn.style.backgroundColor = "yellowgreen";
    },
    getMsg(res) {
      console.log(res);
    },
  },
  components: {
    TransferMode,
    Tab
  },
};
</script>
<style scoped>
</style>