<template>
  <fieldset>
    <legend>App</legend>
    <input type="text" />
    ---
    <input type="text"  ref="inputRef"/>
  </fieldset>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
/*
ref获取元素: 利用ref函数获取组件中的标签元素
功能需求: 让输入框自动获取焦点
*/
export default {
  setup() {
    const inputRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      inputRef.value && inputRef.value.focus();
    });

    return {
      inputRef,
    };
  },
};
</script>