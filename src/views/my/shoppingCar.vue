<template>
    <div class="shoppingCar">
        <h1 style="font-size: 24px">购物车</h1>
        <el-container class="m-b-20">
            <el-header>
                
                <table width="100%" class="textCenter">
                    <tr>
                        <td width="60">
                          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                        </td>
                        <td>
                            物品信息
                        </td>
                        <td width="120">
                            单价（￥）
                        </td>
                        <td width="150">
                            数量
                        </td>
                        <td width="120px">
                            小计（￥）
                        </td>
                        <td width="100px">
                            操作
                        </td>
                  </tr>
                </table>
            </el-header>
            <el-main>
                <el-checkbox-group v-model="checkedGoods" @change="handleCheckedGoodsChange">
                <el-table
                  :data="tableData"
                  style="width: 100%"
                  :show-header="false"
                  >
                  <el-table-column
                    width="60">
                    <template slot-scope="scope">
                        <el-checkbox :label="scope.row" :key="scope.row.itemId"></el-checkbox>
                    </template>
                  </el-table-column>
                  <el-table-column>
                    <template slot-scope="scope">
                      <img :src="scope.row.goods.goodsImg" alt="" style="width: 100px;height: 100px">
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="info"
                    width="320">
                    <template slot-scope="scope">
                      <div>
                          <p><span>商品名称：</span>{{scope.row.goods.goodsName}}</p>
                          <span>备注：</span><el-input v-model="scope.row.goods.goodsRemark" placeholder="商品备注" type="textarea"></el-input>
                      </div>
                    </template>
                  </el-table-column>
                  <!-- <el-table-column
                    prop="standard">
                  </el-table-column> -->
                  <el-table-column
                    prop="goods.goodsPrice"
                    width="120"
                    align="center">

                  </el-table-column>
                  <el-table-column
                    width="150"
                    align="center">
                    <template slot-scope="scope">
                        <div>
                          <el-input
                            v-model="scope.row.itemNum" @change="numCount(scope.row)">
                            <el-button slot="prepend" @click="del(scope.row)"><i class="el-icon-minus"></i></el-button>
                            <el-button slot="append" @click="add(scope.row)"><i class="el-icon-plus"></i></el-button>
                          </el-input>
                        </div>
                    </template>
                  </el-table-column>
                  
                  <el-table-column
                    prop="itemPrice"
                    align="center"
                    width="120">

                  </el-table-column>
                  <el-table-column
                    width="100"
                    align="center">
                    <template slot-scope="scope">
                        <el-button type="text" @click.native.prevent="deleteRow(scope.$index,scope.row, tableData)">删除</el-button>
                        <el-button type="text" @click="savaCar(scope.row)">保存</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                </el-checkbox-group>
                
            </el-main>
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              layout="prev, pager, next"
              :page-size="10"
              :total="total">
            </el-pagination>
            <el-footer class="clearfix">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>&nbsp;
                <el-button type="text">批量删除</el-button>
                
                <div class="floatRight">
                    合计：{{totalPrice}}￥

                    <el-button type="danger" class="m-l-20">前往支付</el-button>
                </div>
            </el-footer>
            
        </el-container>
        <!-- {{checkedGoods}} -->
    </div>
</template>

<script>
import { my } from '@/services/apis/my';
export default {
    name: 'my',
    data () {
        return {
            total:null,//总数
            currentPage:1,
            checkAll:false,
            goods:[],
            isIndeterminate:false,
            tableData:[
                // {
                //   itemId:'1',
                //   imgPath: 'https://assets-cdn.github.com/images/modules/dashboard/github-universe-2018.svg',
                //   info: 'motuoluola',
                //   standard: '规格：黑',
                //   itemNum:1,
                //   price:4488,
                //   itemPrice:4488,
                //   remark:''
                // },
                // {
                //   itemId:'2',
                //   imgPath: 'https://assets-cdn.github.com/images/modules/dashboard/github-universe-2018.svg',
                //   info: 'Iapple',
                //   standard: '规格：黑',
                //   itemNum:1,
                //   price:4488,
                //   itemPrice:4488,
                //   remark:''
                // }
            ],
            checkedGoods:[],
            param:{
                accid:"",
                page:"1",
                size:"10"
            }
        }
    },
    mounted() {
        this.param.accid = localStorage.getItem("userId") || '';
        this.getGoods();
    },
    created(){
        
    },
    methods:{
        getGoods(){
            my.check(this.param).then(response=>{
                if (response.data.code == 200) {
                    this.total = parseInt(response.data.data.count);
                    this.tableData = response.data.data.item;
                }
            })
        },
        handleCheckAllChange(val) {
            this.checkedGoods = val ? this.tableData : [];
            this.isIndeterminate = false;
        },
        handleCheckedGoodsChange(value) {
            //console.log(value)
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.tableData.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.tableData.length;
        },
        //分页
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            //console.log(`当前页: ${val}`);
            this.param.page = val;
            this.getGoods();
        },
        numCount:function(value){

            if(null==value.itemNum || value.itemNum==""){
                value.itemNum=1;
            }
            value.itemPrice=(value.itemNum*value.goods.goodsPrice).toFixed(2);//保留两位小数
            //增加商品数量也需要重新计算商品总价
            //this.selected(this.multipleSelection);
        },
        add:function(addGood){
            //输入框输入值变化时会变为字符串格式返回到js
            //此处要用v-model，实现双向数据绑定
            if(typeof addGood.itemNum=='string'){
                addGood.itemNum=parseInt(addGood.itemNum);
            };
            addGood.itemNum+=1;

            this.numCount(addGood)
        },
        del:function(delGood){
            if(typeof delGood.itemNum=='string'){
                delGood.itemNum=parseInt(delGood.itemNum);
            };
            if(delGood.itemNum>1){
                delGood.itemNum-=1;
                this.numCount(delGood)
            } 
        },
        /**
         * 保存购物车修改
         * @param  {[type]} row [修改的商品]
         * @return {[type]}     [description]
         */
        savaCar(row){
            my.updateItem({
                accid:this.param.accid,
                itemId:row.itemId,
                itemNum:row.itemNum
            }).then(response=>{
                if (response.data.code == 200) {
                    this.$message({
                        type: 'success',
                        message: '保存成功!'
                    });
                }
            })
        },
        /**
         * 删除购物车商品
         * @param  {[type]} index [索引值]
         * @param  {[type]} row [删除的商品]
         * @param  {[type]} rows [剩余的商品]
         * @return {[type]}     [description]
         */
        deleteRow(index, row, rows) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                my.deleteItem({accid:this.param.accid,itemId:row.itemId}).then(response=>{
                    if (response.data.code == 200) {
                        rows.splice(index, 1);
                        for (var i = 0; i < this.checkedGoods.length; i++) {
                            if (row.id == this.checkedGoods[i].id) {
                                this.checkedGoods.splice(i, 1);
                            }
                        }
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        }   
    },
    computed: {
        // 计算属性的 getter
        totalPrice: function () {
          var total = 0;
          for (var i = 0; i < this.checkedGoods.length; i++) {
              total+=parseInt(this.checkedGoods[i].itemPrice);
          }
          return total.toFixed(2);
        }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.shoppingCar{
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
    .el-checkbox__label{
        display: none;
    }
}

</style>
