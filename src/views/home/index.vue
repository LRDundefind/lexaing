<template>
    <div class="hello">
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>

    </div>
</template>

<script>

export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'home'
      }
    },
    mounted() {

    },
    created(){
        //this.defaultAddForm = JSON.parse(JSON.stringify(this.addForm));
    },
    methods:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
}

</style>
