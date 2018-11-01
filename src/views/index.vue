<template>
    <div class="content">
        <el-header class="clearfix">
            <router-link to="/home"><img class="logo" src="../assets/u20.png" alt=""></router-link>
            <el-menu :default-active="setMenuActive($route.path)" class="el-menu-demo floatRight" mode="horizontal" @select="handleSelect">
                <el-menu-item index="/login" v-if="isLogin=='false'">您好，请登陆</el-menu-item>
                <el-menu-item index="/home">首页</el-menu-item>
                <el-menu-item index="/my/index">我的乐享</el-menu-item>
                <el-menu-item index="/login?exit=1" v-if="isLogin=='true'">退出</el-menu-item>
                <!-- <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu> -->
                <!-- <el-menu-item index="/ShoppingCar">购物袋</el-menu-item>
                <el-menu-item index="/4">我的仓库</a></el-menu-item> -->
            </el-menu>
        </el-header>
        <div class="mainContent">
            <router-view/>
        </div>
    </div>
</template>

<script>
import vuex from 'vuex'
import store from '@/vuex/store'
export default {
    name: 'home',
    data () {
        return {
            activeIndex: '/home',
            isLogin:"false"
        }
    },
    mounted() {
        this.isLogin = localStorage.getItem('isLogin') || "false"
    },
    created(){
        //this.defaultAddForm = JSON.parse(JSON.stringify(this.addForm));
    },
    methods:{
        handleSelect(key, keyPath) {
            this.$router.push({path:key})
            if (key == '/login?exit=1') {
                store.commit('isLogin',false);
                localStorage.removeItem('userId')
            }
        },
        //设置菜单栏选中状态
        setMenuActive(path) {
            if(path.indexOf("/my") == 0) {
                return "/my/index";
            }else {
                return path;
            }
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.el-header{
    position: fixed;
    top: 0;
    z-index: 9;
    width: 100%;
    background: #f0f0f0;
    border-bottom: solid 1px #e6e6e6;
    .logo{
        height: 50px;
        margin:5px 10px;
    }
    .el-menu--horizontal{
        background: #f0f0f0;
    }
}
.mainContent{
    width: 100%;
    position: absolute;
    top: 60px;
    /*height: -moz-calc(100% - 60px);
    height: -webkit-calc(100% - 60px);
    height: calc(100% - 60px);*/
}



</style>
