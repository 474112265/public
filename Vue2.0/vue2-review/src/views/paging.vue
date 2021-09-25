<template>
  <div>
    <PageView :lists="lists" />
    <el-pagination
      background
      layout="prev, pager, next"
      :total="rows"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import PageView from "./pages/page.vue";
export default {
  name: "paging",
  data() {
    return {
      lists: [],
      pageTotal: 0,
      rows: 0,
    };
  },
  components: {
    PageView,
  },
  created() {
    this.$http({
      url: "/home/page/1/40",
      method: "get",
    })
      .then((res) => {
        let { data, pageTotal, rows } = res.data;
        this.lists = data;
        this.rows = rows;
        this.pageTotal = pageTotal;
        console.log(this.rows, this.pageTotal);
        console.log(data, pageTotal, rows);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    handleCurrentChange(val) {
      this.$http({
        url: `/home/page/${val}/40`,
        method: "get",
      })
        .then((res) => {
          let { data, pageTotal, rows } = res.data;
          this.lists = data;
          console.log(data, pageTotal, rows);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>