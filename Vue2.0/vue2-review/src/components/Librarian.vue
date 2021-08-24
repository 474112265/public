<template>
  <div class="hello">
    <table border="1" cellpadding="0" cellspacing="0">
      <tr>
        <th v-for="item of attribute" :key="item">{{ item }}</th>
      </tr>
      <tr v-for="(item, index) of bookList" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.author }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.quantity }}</td>
        <td>
          <button @click="item.quantity--">-</button
          ><button @click="item.quantity++">+</button>
        </td>
        <td>{{ getTotal[index] }}</td>
        <td><button @click="deleteList(index)">×</button></td>
      </tr>

      <tr>
        <td colspan="7">
          <fieldset>
            <legend>添加书籍信息</legend>
            <table>
              <tr>
                <th>书名</th>
                <th>作者</th>
                <th>单价</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="书名"
                    ref="bookName"
                    @keyup.enter="focusElement('bookAuthor')"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="作者"
                    ref="bookAuthor"
                    @keyup.enter="focusElement('bookPrice')"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="单价"
                    ref="bookPrice"
                    @keyup.enter="
                      addBook();
                      focusElement('bookName');
                    "
                  />
                </td>
              </tr>
            </table>
          </fieldset>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Librarian",
  props: {
    msg: String,
  },
  data() {
    return {
      bookList: [
        {
          name: "《格林童话》",
          author: "雅格·格林和威廉·格林",
          price: "18$",
          quantity: 0,
          total: 0,
        },
        {
          name: "《呐喊》",
          author: "鲁迅",
          price: "30$",
          quantity: 0,
          total: 0,
        },
        {
          name: "《背影》",
          author: "朱自清",
          price: "21$",
          quantity: 0,
          total: 0,
        },
        {
          name: "《水浒传》",
          author: "施耐庵",
          price: "26$",
          quantity: 0,
          total: 0,
        },
        {
          name: "《西游记》",
          author: "吴承恩",
          price: "25$",
          quantity: 0,
          total: 0,
        },
      ],
      attribute: ["书名", "作者", "单价", "个数", "选项", "总价", "删除"],
    };
  },
  methods: {
    deleteList(index) {
      this.bookList.splice(index, 1);
    },
    focusElement(eleName) {
      // console.log(eleName);
      this.$refs[eleName].focus();
    },
    addBook() {
      // let bookPriceValue = this.$refs.bookPrice.value;
      // if(String(bookPriceValue).indexOf('$') == -1) {
      //   bookPriceValue += bookPriceValue + '$'
      // }
      let bookArray = Object.values(this.$refs).map((item) => {
        return item.value;
      });
      Object.values(this.$refs).map((item) => {
        item.value = "";
      });
      bookArray[2] = bookArray[2].indexOf(`$`) != -1 ? bookArray[2] : bookArray[2] + "$"; //判断是否有$
      let book = {
        name: bookArray[0],
        author: bookArray[1],
        price: bookArray[2],
        quantity: 0,
        total: 0,
      };
      this.bookList.push(book);
    },
  },
  beforeCreate() {
    console.clear();
 },
  mounted() {
    console.log(this);
    this.$refs.bookName.focus();
    //判断localStorage中是否有 bookList
    if (localStorage.getItem("bookList") != null) {
      let listPse = JSON.parse(localStorage.getItem("bookList"));
      console.log(listPse);
      this.bookList = listPse;
    } else {
      let listStr = JSON.stringify(this.bookList);
      localStorage.setItem("bookList", listStr);
    }
  },
  beforeDestroy() {
    let listStr = JSON.stringify(this.bookList);
    localStorage.setItem("bookList", listStr);
  },
  computed: {
    getTotal: {
      get() {
        console.log(`调用get`);
        return this.bookList.map((v) => {
          return parseInt(v.price) * v.quantity + "$";
        });
      },
      set(newValue) {
        console.log(`调用set`);
        console.log(newValue);
      },
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  margin: 0 auto;
}
table td,
th {
  padding: 7px 12px;
}
table th {
  background-color: #ffec8b;
}
table td {
  background-color: #98f5ff;
}
table td:hover {
  background-color: #00f5ff;
}
td button {
  background-color: #fff68f;
  border: 1px solid;
  cursor: pointer;
}
td button:hover {
  background-color: #ffd700;
}
</style>
