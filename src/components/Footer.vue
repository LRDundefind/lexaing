<template>
    <div class="footer">
        <div style="margin: 0 auto;width: 90%;">
            <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple clearfix">
                    <img src="../assets/u94.png" alt="" class="floatLeft m-l-10">
                    <div class="floatLeft m-l-20 m-t-10"><h3>闪电发货</h3><p>17点前运单当日发货</p></div></div>
                </el-col>
                <el-col :span="6"><div class="grid-content bg-purple clearfix">
                    <img src="../assets/u105.png" alt="" class="floatLeft m-l-10">
                    <div class="floatLeft m-l-20 m-t-10"><h3>优质服务</h3><p>免费代购、免费仓储</p></div></div>
                </el-col>
                <el-col :span="6"><div class="grid-content bg-purple clearfix">
                    <img src="../assets/u116.png" alt="" class="floatLeft m-l-10">
                    <div class="floatLeft m-l-20 m-t-10"><h3>超值物流</h3><p>优惠与全速双项体验</p></div></div>
                </el-col>
                <el-col :span="6"><div class="grid-content bg-purple clearfix">
                    <img src="../assets/u127.png" alt="" class="floatLeft m-l-10">
                    <div class="floatLeft m-l-20 m-t-10"><h3>便捷支付</h3><p>支持微信、支付宝支付</p></div></div>
                </el-col>
            </el-row>
            <p class="licence p-b-20 textCenter" style="color: #666">许可证编号：冀ICP备18030435号</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return{}
    },
    methods: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer{
    margin: 0 auto;
    background: #f0f0f0;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
}
.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 100px;
    font-size: 20px;
    padding-top: 20px;
    h3{
      font-weight: normal;
    }
    p{
      font-size: 14px;
      color: #666;
    }
    img{
      width: 80px;
    }
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}

</style>
