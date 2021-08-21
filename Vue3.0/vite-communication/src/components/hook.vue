<template>
  <fieldset
    style="width: 50%; margin: 50px auto; border: 2px solid yellowgreen"
  >
    <legend>Hook组件</legend>
    <p>坐标X:{{ x }}</p>
    <p>坐标Y:{{ y }}</p>
  </fieldset>
</template>

<script>
import useMousePosition from '../hook/getPageCoordinate'
export default {
  setup() {
    //获取useMousePositon中返回的xy
    const { x, y } = useMousePosition()

    return {
      x,
      y
    }
  }
}
</script>

<style>
</style>