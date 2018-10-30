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
                        <el-checkbox :label="scope.row" :key="scope.row.id"></el-checkbox>
                    </template>
                  </el-table-column>
                  <el-table-column>
                    <template slot-scope="scope">
                      <img :src="scope.row.imgPath" alt="" style="width: 50px;height: 50px">
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="info">
                    <template slot-scope="scope">
                      <div>
                          {{scope.row.info}}
                          <el-input v-model="scope.row.remark" placeholder="商品备注" size="mini"></el-input>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="standard">
                  </el-table-column>
                  <el-table-column
                    prop="price"
                    width="120"
                    align="center">

                  </el-table-column>
                  <el-table-column
                    width="150"
                    align="center">
                    <template slot-scope="scope">
                        <div>
                          <el-input
                            v-model="scope.row.number" @change="numCount(scope.row)">
                            <el-button slot="prepend" @click="del(scope.row)"><i class="el-icon-minus"></i></el-button>
                            <el-button slot="append" @click="add(scope.row)"><i class="el-icon-plus"></i></el-button>
                          </el-input>
                        </div>
                    </template>
                  </el-table-column>
                  
                  <el-table-column
                    prop="goodTotal"
                    align="center"
                    width="120">

                  </el-table-column>
                  <el-table-column
                    width="100"
                    align="center">
                    <template slot-scope="scope">
                        <el-button type="text" @click.native.prevent="deleteRow(scope.$index,scope.row, tableData)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                </el-checkbox-group>
            </el-main>
            <el-footer class="clearfix">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>&nbsp;
                <el-button type="text">批量删除</el-button>
                <el-button type="text">清空购物车</el-button>
                <div class="floatRight">
                    合计：{{}}￥
                    <el-button type="danger" class="m-l-20">前往支付</el-button>
                </div>
            </el-footer>
            
        </el-container>
        {{checkedGoods}}
    </div>
</template>

<script>
import { my } from '@/services/apis/my';
export default {
    name: 'my',
    data () {
        return {
            checkAll:false,
            goods:[],
            isIndeterminate:false,
            tableData:[
                {
                  id:'1',
                  imgPath: 'https://assets-cdn.github.com/images/modules/dashboard/github-universe-2018.svg',
                  info: 'motuoluola',
                  standard: '规格：黑',
                  number:1,
                  price:4488,
                  goodTotal:4488,
                  remark:''
                },
                {
                  id:'2',
                  imgPath: 'https://assets-cdn.github.com/images/modules/dashboard/github-universe-2018.svg',
                  info: 'Iapple',
                  standard: '规格：黑',
                  number:1,
                  price:4488,
                  goodTotal:4488,
                  remark:''
                }
            ],
            checkedGoods:[],
            param:{
                accid:"73b49cf1808441ce91478682c34b199c",
                page:"1",
                size:"10"
            }
        }
    },
    mounted() {
        my.check(this.param).then(response=>{
            console.log(response)
        })
    },
    created(){
        
    },
    methods:{
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
        numCount:function(value){

            if(null==value.number || value.number==""){
                value.number=1;
            }
            value.goodTotal=(value.number*value.price).toFixed(2);//保留两位小数
            //增加商品数量也需要重新计算商品总价
            //this.selected(this.multipleSelection);
        },
        add:function(addGood){
            //输入框输入值变化时会变为字符串格式返回到js
            //此处要用v-model，实现双向数据绑定
            if(typeof addGood.number=='string'){
                addGood.number=parseInt(addGood.number);
            };
            addGood.number+=1;

            this.numCount(addGood)
        },
        del:function(delGood){
            if(typeof delGood.number=='string'){
                delGood.number=parseInt(delGood.number);
            };
            if(delGood.number>1){
                delGood.number-=1;
                this.numCount(delGood)
            } 
        },

        /**
         * 删除购物车商品
         * @param  {[type]} index [索引值]
         * @param  {[type]} row [删除的商品]
         * @param  {[type]} rows [剩余的商品]
         * @return {[type]}     [description]
         */
        deleteRow(index, row, rows) {
            rows.splice(index, 1);

            for (var i = 0; i < this.checkedGoods.length; i++) {
                if (row.id == this.checkedGoods[i].id) {
                    this.checkedGoods.splice(i, 1);
                }
            }
            
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
