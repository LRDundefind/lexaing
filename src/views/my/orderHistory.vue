<template>
    <div class="warehouse">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">待付款</el-menu-item>
            <el-menu-item index="2">已付款</el-menu-item>
            <el-menu-item index="3">待收货</el-menu-item>
        </el-menu>
        <el-container class="m-b-20 m-t-20">
            
            <el-main>
                <el-table
                  :data="tableData"
                  style="width: 100%"
                  >
                  <el-table-column
                    label="商品详情"
                    prop="info">

                  </el-table-column>
                  <el-table-column
                    label="总金额"
                    prop="amount">
                  </el-table-column>
                  <el-table-column
                    label="订单状态"
                    prop="status">
                 
                  </el-table-column>
                  
                  <el-table-column
                    width="100"
                    label="操作"
                    align="center">
                    <template slot-scope="scope">
                        <el-button type="text">取消订单</el-button>
                    </template>
                  </el-table-column>
                </el-table>
            </el-main>
            
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex:"1",//当前tab
                checkAll:'',
                goods:[],
                isIndeterminate:false,
                tableData:[
                    {

                      info: 'motuoluola',
                      amount: 1000,
                      status:"待收货",

                    },{

                      info: 'iPhone',
                      amount: 1000,
                      status:"待收货",

                    },
                ],
                checkedGoods:{},
            }
        },
        mounted() {
            
        },
        created(){
            
        },
        methods:{
            handleSelect(key, keyPath) {
                //console.log(key)
            },
            handleCheckAllChange(val) {
                //this.checkedGoods = val ? cityOptions : [];
                //this.isIndeterminate = false;
            },
            handleCheckedGoodsChange(value) {
                let checkedCount = value.length;
                //this.checkAll = checkedCount === this.goods.length;
                //this.isIndeterminate = checkedCount > 0 && checkedCount < this.goods.length;
            },
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.warehouse{
    .el-container{
        border:1px #ccc solid;
    }
    .el-header, .el-footer {
        background-color: #f0f0f0;
        color: #333;
        line-height: 60px;
    }
    .el-input-group__append, .el-input-group__prepend{
        padding: 0 10px; 
    }
}

</style>