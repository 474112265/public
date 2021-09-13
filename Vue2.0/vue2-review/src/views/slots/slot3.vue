<template>
  <div>
    <!-- 绑定后的属性名可自定义 -->
      <h2>my is <slot :asd="arr"></slot></h2>
  </div>
</template>

<script>
export default {
  data(){
    return {
      arr:[7,8,9]
    }
  }
}
</script>

<style>

</style>