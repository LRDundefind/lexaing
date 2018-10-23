<template>
    <div class="warehouse">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">已支付</el-menu-item>
            <el-menu-item index="2">已发出</el-menu-item>
            <el-menu-item index="3">已签收</el-menu-item>
        </el-menu>
        <el-container class="m-b-20 m-t-20">
            
            <el-main>
                <el-table
                  :data="tableData"
                  style="width: 100%"
                  >
                  <el-table-column
                    label="包裹编号"
                    prop="parcelNum">
              
                  </el-table-column>
                  <el-table-column
                    label="详情"
                    prop="info">

                  </el-table-column>
                  <el-table-column
                    label="重量"
                    prop="weight">
                  </el-table-column>
                  <el-table-column
                    prop="consignee"
                    label="收货人">

                  </el-table-column>
                  <el-table-column
                    label="状态"
                    prop="status">
                 
                  </el-table-column>
                  
                  <el-table-column
                    label="物流编号"
                    prop="logisticsNum">

                  </el-table-column>
                  <el-table-column
                    width="100"
                    label="操作"
                    align="center">
                    <template slot-scope="scope">
                        <el-button type="text">删除</el-button>
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
                      parcelNum: '001',
                      info: 'motuoluola',
                      weight: '10',
                      consignee:"李",
                      status:"已收货",
                      logisticsNum:"001",

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