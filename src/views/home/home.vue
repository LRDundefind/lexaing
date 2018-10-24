<template>
    <div class="home pos-a">
        <div class="searchBox">
            <el-input placeholder="复制淘宝、天猫、1688、京东商品链接快速代购" v-model="goods" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="searchGood">快速代购</el-button>
            </el-input>
            <div class="brand">
                <img class="dm m-l-30 m-r-30" src="../../assets/home/u38.png" alt="">
                <img class="gucci m-l-30 m-r-30" src="../../assets/home/u46.png" alt="">
                <img class="dior m-l-30 m-r-30" src="../../assets/home/u44.png" alt="">
                <img class="burberry m-l-30 m-r-30" src="../../assets/home/u42.png" alt="">
                <img class="amazon m-l-30 m-r-30" src="../../assets/home/u40.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'home',
    data () {
        return {
            goods: ''
        }
    },
    mounted() {

    },
    created(){
        //this.defaultAddForm = JSON.parse(JSON.stringify(this.addForm));
    },
    methods:{
        searchGood(){
            this.$router.push({path: "goods"})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home{
    width: 100%;
    height: calc(100vh - 60px);
    background: #51ade8;
    .searchBox{
        width: 60%;
        padding-top: 200px;
        margin: 0 auto;
        .el-input__inner{
            height: 54px;
            font-size: 16px;
        }
        .el-input-group__append{
            background: #ffcc00;
            color: #fff;
            font-size: 16px;
        }
    }
    .brand{
        margin: 60px auto 0 auto;
        width: 820px;
        img{
            vertical-align: middle;
        }
        .dm{
            width: 116px;
        }
        .gucci{
            width: 60px;
        }
        .dior{
            width: 90px;
        }
        .burberry{
            width: 130px;
        }
        .amazon{
            width: 100px;
        }
    } 
}

</style>
