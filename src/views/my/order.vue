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
                  <!-- <el-table-column
                    width="60">
                    <template slot-scope="scope">
                        <el-checkbox></el-checkbox>
                    </template>
                  </el-table-column> -->
                  <el-table-column>
                    <template slot-scope="scope">
                      <img :src="scope.row.goods.goodsImg" alt="" style="width: 100px;height: 100px">
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="商品详情"
                    prop="goods.goodsName">
                    <template slot-scope="scope">
                      <div>
                          <p><span>商品名称：</span>{{scope.row.goods.goodsName}}</p>
                          <span>备注：</span><el-input v-model="scope.row.goods.goodsRemark" placeholder="商品备注" type="textarea" :disabled="true"></el-input>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="goods.goodsPrice"
                    width="120"
                    align="center">

                  </el-table-column>
                  <el-table-column
                    prop="itemNum"
                    width="120"
                    align="center">

                  </el-table-column>
                  <el-table-column
                    label="总金额"
                    prop="itemPrice">
                  </el-table-column>
                  <el-table-column
                    label="订单状态">
                    <template slot-scope="scope">
                        <span v-if="param.status == 1">待付款</span>
                        <span v-if="param.status == 2">已付款</span>
                        <span v-if="param.status == 3">待收货</span>
                    </template>
                  </el-table-column>
                  
                  <el-table-column
                    width="100"
                    label="操作"
                    align="center">
                    <template slot-scope="scope">
                        <el-button type="danger" size="mini" v-if="param.status == 1">付款</el-button>
                        <el-button type="text">取消</el-button>
                    </template>
                  </el-table-column>
                </el-table>
            </el-main>
            
        </el-container>
    </div>
</template>

<script>
import { my } from '@/services/apis/my';
    export default {
        data() {
            return {
                activeIndex:"1",//当前tab
                checkAll:'',
                goods:[],
                isIndeterminate:false,
                tableData:[
                    // {

                    //   info: 'motuoluola',
                    //   amount: 1000,
                    //   status:"待收货",

                    // },{

                    //   info: 'iPhone',
                    //   amount: 1000,
                    //   status:"待收货",

                    // },
                ],
                checkedGoods:{},
                param:{
                    userId:'',
                    status:1,
                }
            }
        },
        mounted() {
            this.param.userId = localStorage.getItem("userId") || '';
            this.getData();
        },
        created(){
            
        },
        methods:{
            getData(){
                my.usergoods(this.param).then(response=>{
                    if (response.data.code == 200) {
                        this.tableData = response.data.data
                        //console.log(response)
                    }
                })
            },
            handleSelect(key, keyPath) {
                this.param.status = key;
                this.getData();
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