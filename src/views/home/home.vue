<template>
    <div class="home pos-a">
        <div class="searchBox">
            <el-input placeholder="复制淘宝、天猫、1688、京东商品链接快速代购" v-model="goods" class="input-with-select">
                <el-button slot="append" icon="el-icon-search">快速代购</el-button>
            </el-input>
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

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home{
    width: 100%;
    height: 100%;
    background: #51ade8;
    .searchBox{
        width: 60%;
        padding-top: 200px;
        margin: 0 auto;

    }
    .el-input__inner{
        height: 60px;
    }
}

</style>
