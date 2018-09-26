<template>
    <div class="content">
        <Header-bar/>
        <el-container style="border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu>
     
                    <el-menu-item class="title">我的交易</el-menu-item>
                    <el-menu-item index="1"><i class="el-icon-message"></i>乐云仓库</el-menu-item>
                    <el-menu-item index="2"><i class="el-icon-menu"></i>我的订单</el-menu-item>
                    <el-menu-item index="3"><i class="el-icon-news"></i>代购宝物</el-menu-item>

                    <el-menu-item class="title">账户信息</el-menu-item>
                    <el-menu-item index="4"><i class="el-icon-message"></i>人名币账户</el-menu-item>
                    <el-menu-item index="5"><i class="el-icon-menu"></i>账户设置</el-menu-item>
                </el-menu>
            </el-aside>
          
            <el-container>

            </el-container>
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
