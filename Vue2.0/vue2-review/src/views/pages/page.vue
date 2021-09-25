<template>
  <div>
    <template>
      <el-table :data="lists" border style="width: 100%">
        <el-table-column prop="product_id" label="序号" width="180">
        </el-table-column>
        <el-table-column prop="product_img_url" label="图片" width="80">
          <template slot-scope="scope">
            <img
              :src="loadImg"
              v-lazy="scope.row.product_img_url"
              width="100%"
              alt="图片加载失败，请重新刷新页面！"
            />
          </template>
        </el-table-column>
        <el-table-column prop="product_name" label="名称"> </el-table-column>
        <el-table-column prop="product_price" label="价格" width="80">
        </el-table-column>
        <el-table-column prop="name" label="查看详细" width="180">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click.native="clickMsg(scope.row.product_id)"
              >查看详细</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loadImg:require('@/assets/load.gif')
    }
  },
  props: ["lists"],
  methods: {
    clickMsg(id) {
      this.$http({
        url: `/detail?mId=${id}`,
        method: "get",
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created(){
    console.log(this.loadImg);
  }
};
</script>

<style>
</style>