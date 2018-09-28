<template>
    <div>
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">我的云仓库</el-menu-item>
            <el-menu-item index="2">待付款</el-menu-item>
            <el-menu-item index="3">已付款</el-menu-item>
            <el-menu-item index="4">代发货</el-menu-item>
            <el-menu-item index="5">代收货</el-menu-item>
        </el-menu>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex:'1',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        mounted() {

        },
        created(){
            
        },
        methods:{
            handleSelect(key, keyPath) {

            }
        }
    }
</script>