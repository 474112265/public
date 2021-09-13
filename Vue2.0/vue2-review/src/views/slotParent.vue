<template>
  <div>
    <p>this is slotParent</p>
    <Slot1>
      <span>匿名插槽</span>
    </Slot1>
    <Slot2>
      <span slot="jm">具名</span>
      <span slot="jmcc">具名插槽</span>
    </Slot2>
    <Slot3>
      <ul slot-scope="scope">
        <li v-for="(v,i) in scope.asd" :key="i">{{v}}</li>
      </ul>
    </Slot3>
  </div>
</template>

<script>
import Slot1 from "./slots/slot1.vue";
import Slot2 from "./slots/slot2.vue";
import Slot3 from "./slots/slot3.vue";

export default {
  name: "slotParent",
  components: {
    Slot1,
    Slot2,
    Slot3,
  },
  created(){
    console.log(this.$el);
    console.log(this.$data);
    console.log(this.$message);
  }
};
</script>

<style>
</style>