<template>
    <div class="my">
        <el-container style="width: 100%;min-height: 500px;">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu @select="handleSelect">
                    <el-menu-item-group>
                        <template slot="title">我的交易</template>
                        <el-menu-item index="/my/warehouse"><i class="el-icon-message"></i>乐云仓库</el-menu-item>
                        <el-menu-item index="/my/order"><i class="el-icon-menu"></i>我的订单</el-menu-item>
                        <el-menu-item index="3"><i class="el-icon-news"></i>代购宝物</el-menu-item>
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
<style scoped lang="scss">
.my{
    
}

</style>
