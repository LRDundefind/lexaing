<template>
    <div class="shoppingCar">
        <h1 style="font-size: 24px">购物车</h1>
        <el-container class="m-b-20">
            <el-header>
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            </el-header>
            <el-main>

                <el-table
                  :data="tableData"
                  style="width: 100%"
                  :show-header="false">
                  <el-table-column>
                    <template slot-scope="scope">
                        <el-checkbox></el-checkbox>
                    </template>
                  </el-table-column>
                  
                  <el-table-column
                    prop="info">
                  </el-table-column>
                  <el-table-column
                    prop="standard">
                  </el-table-column>
                  <el-table-column>
                    <template slot-scope="scope">
                        <el-input-number v-model="num1" @change="numCount" :min="1" :max="10" label="描述文字"></el-input-number>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="price">

                  </el-table-column>
                  <el-table-column>
                    <template slot-scope="scope">
                        删除
                    </template>
                  </el-table-column>
                </el-table>
            </el-main>
            <el-footer>
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            </el-footer>
        </el-container>
        <Footer-bar/>
    </div>
</template>

<script>

export default {
    name: 'my',
    data () {
        return {
            checkAll:'',
            goods:[],
            isIndeterminate:false,
            tableData:[
                {
                  img: '',
                  info: 'motuoluola',
                  standard: '规格：黑',
                  price:4488
                }
            ],
            checkedGoods:{},
            num1:1
        }
    },
    mounted() {

    },
    created(){
        
    },
    methods:{
        handleCheckAllChange(val) {
            //this.checkedGoods = val ? cityOptions : [];
            //this.isIndeterminate = false;
        },
        handleCheckedGoodsChange(value) {
            //let checkedCount = value.length;
            //this.checkAll = checkedCount === this.goods.length;
            //this.isIndeterminate = checkedCount > 0 && checkedCount < this.goods.length;
        },
        numCount(value) {
            console.log(value);
        }   
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shoppingCar{
    .el-container{
        border:1px #ccc solid;
    }
    .el-header, .el-footer {
        background-color: #f0f0f0;
        color: #333;
        line-height: 60px;
    }
}

</style>
