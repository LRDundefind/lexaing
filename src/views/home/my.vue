<template>
    <div class="my">
        <el-container style="width: 100%;min-height: 500px;">
            <el-aside width="200px">
                <el-menu @select="handleSelect">
                    <el-menu-item-group>
                        <template slot="title">我的交易</template>
                        <el-menu-item index="/my/ShoppingCar"><i class="el-icon-message"></i>购物车</el-menu-item>
                        <el-menu-item index="/my/warehouse"><i class="el-icon-message"></i>乐云仓库</el-menu-item>
                        <el-menu-item index="/my/order"><i class="el-icon-menu"></i>我的订单</el-menu-item>
                        <el-menu-item index="/my/1"><i class="el-icon-news"></i>我的运单</el-menu-item>
                        <el-menu-item index="/my/2"><i class="el-icon-news"></i>历史订单</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">账户信息</template>
                        <el-menu-item index="4"><i class="el-icon-message"></i>人名币账户</el-menu-item>
                        <el-menu-item index="5"><i class="el-icon-menu"></i>账户设置</el-menu-item>
                    </el-menu-item-group>
                </el-menu>
            </el-aside>
          
            <el-main>
                <router-view name="myView"/>
            </el-main>
        </el-container>
        <Footer-bar/>
    </div>
</template>

<script>

export default {
    name: 'my',
    data () {
      return {
      }
    },
    mounted() {

    },
    created(){
        
    },
    methods:{
        handleSelect(key, keyPath) {
            this.$router.push({path:key})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.my{
    .el-menu-item-group__title {
        line-height: normal;
        font-size: 20px;
        color: #333;
        border-bottom: 1px #ccc solid;
    }
}

</style>
