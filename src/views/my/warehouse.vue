<template>
    <div class="warehouse">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">已入库</el-menu-item>
            <el-menu-item index="2">处理中</el-menu-item>
            <el-menu-item index="3">待支付</el-menu-item>
        </el-menu>
        <el-container class="m-b-20 m-t-20">
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
                            商品来源
                        </td>
                        <td width="150">
                            数量
                        </td>
                        <td width="120px">
                            总金额
                        </td>
                        <td width="100px">
                            操作
                        </td>
                  </tr>
                </table>
            </el-header>
            <el-main>

                <el-table
                  :data="tableData"
                  style="width: 100%"
                  :show-header="false"
                  >
                  <el-table-column
                    width="60">
                    <template slot-scope="scope">
                        <el-checkbox></el-checkbox>
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
                    prop="source"
                    width="120"
                    align="center">

                  </el-table-column>
                  <el-table-column
                    width="150"
                    align="center">
                    <template slot-scope="scope">
                        <div>
                            {{scope.row.number}}

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
                        <el-button type="text">退货</el-button>
                    </template>
                  </el-table-column>
                </el-table>
            </el-main>
            <el-footer class="clearfix">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>&nbsp;
                <div class="floatRight">
                    <el-button type="danger" class="m-l-20">前往支付</el-button>
                </div>
            </el-footer>
            
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
                    // {
                    //   imgPath: 'https://assets-cdn.github.com/images/modules/dashboard/github-universe-2018.svg',
                    //   info: 'motuoluola',
                    //   standard: '规格：黑',
                    //   number:1,
                    //   source:"亚马逊",
                    //   goodTotal:4488,
                    //   remark:''
                    // },
                    // {
                    //   imgPath: 'https://assets-cdn.github.com/images/modules/dashboard/github-universe-2018.svg',
                    //   info: 'motuoluola',
                    //   standard: '规格：黑',
                    //   number:1,
                    //   source:"亚马逊",
                    //   goodTotal:4488,
                    //   remark:''
                    // }
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