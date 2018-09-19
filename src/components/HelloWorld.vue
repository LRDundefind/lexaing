<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

  </div>
</template>

<script>
import { test } from '@/services/apis/test';
export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App...'
      }
    },
    mounted() {
        this.getList()
    },
    created(){
        //this.defaultAddForm = JSON.parse(JSON.stringify(this.addForm));
    },
    methods:{
        getList(){
            test.api({
                query_type: "province",
                top_num: 10
            })
            .then(response => {
                console.log(response)
            });
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
    h1, h2 {
        color: red;
      font-weight: normal;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
}

</style>
