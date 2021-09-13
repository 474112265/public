<template>
  <div>
      <template>
  <el-table
    :data="lists"
    border
    style="width: 100%">
    <el-table-column
      prop="product_id"
      label="序号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="product_img_url"
      label="图片"
      width="80">
      <template   slot-scope="scope">            
      <img :src="scope.row.product_img_url" width="100%" alt="图片加载失败，请重新刷新页面！">
    </template>
    </el-table-column>
    <el-table-column
      prop="product_name"
      label="名称">
    </el-table-column>
    <el-table-column
      prop="product_price"
      label="价格"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
        <el-button type="primary">查看详细</el-button>
    </el-table-column>
  </el-table>
</template>
  </div>
</template>

<script>
export default {
    props:['lists']
}
</script>

<style>

</style>