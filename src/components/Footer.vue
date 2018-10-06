<template>
    <div class="footer">
        <div style="margin: 0 auto;width: 90%;">
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content bg-purple">闪电发货</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">优质服务</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">超值物流</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">便捷支付</div></el-col>
        </el-row>
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
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 100px;
    font-size: 20px;
    text-align: center;
    padding-top: 20px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
