<template>
    <div class="goods clearfix">
        
        <div class="m-l-10 m-r-10">
        
                <el-card class="clearfix p-b-20">
                    <h1 style="font-size: 24px" class="m-b-10">申请代购</h1>
                    <img :src="goodsList.goodsImg" class="image floatLeft">
                    <div class="con floatRight">
                        <p class="goodsName line-ellipsis-1 m-t-10"><label>商品名称：</label>{{goodsList.goodsName}}</p>
                        <el-form ref="form" :model="form" label-width="80px" class="m-t-20">
                              <el-form-item label="商品价格">
                                <el-input v-model="form.goodsPrice" placeholder="请输入商品价格" size="small"></el-input>
                              </el-form-item>
                              <el-form-item label="商品描述">
                                <el-input type="textarea" v-model="form.goodsRemark"></el-input>
                              </el-form-item>
                        </el-form>
                        <el-button type="danger" class="m-t-20" @click="update">加入购物袋</el-button>
                        <el-button class="m-t-20" @click="goBack">返回上一步</el-button>
                    </div>
                </el-card>
            
        </div>

        <Footer-bar/>
    </div>
</template>

<script>
import { goods } from '@/services/apis/goods';
import { my } from '@/services/apis/my';
export default {
    name: 'goods',
    data () {
        return {
            goodsList:{},
            form:{
                goodsId:'',
                goodsPrice:'',
                goodsName:'',
                goodsRemark:''
            },
            param:{
                accid:'',//用户ID
                goodsId:'',//商品ID
                itemNum:1,//购物车数量
            }
        }
    },
    mounted() {
        this.goodsPrice = '';
        this.goodsRemark = '';
        this.param.accid = localStorage.getItem("userId") || '';
        goods.list({goodsUrl:this.$route.query.url}).then(response=>{
            this.form = response.data.data
            this.param.goodsId = response.data.data.goodsId
            this.goodsList = response.data.data
            //console.log(response)
        })
    },
    created(){
        
    },
    methods:{
        update(){
            goods.update({
                goodsId:this.form.goodsId,
                goodsPrice:this.form.goodsPrice,
                goodsRemark:this.form.goodsRemark
            }).then(response=>{
                if (response.data.code == 200) {
                    this.addCar()
                }
                //console.log(response)
            })
        },
        goBack(){
            this.$router.push({path: "/home"})

        },
        addCar(){
            my.saveItem(this.param).then(response=>{
                if (response.data.code == 200) {
                    this.$message({
                        message: '成功加入购物车',
                        type: 'success'
                    });
                }
                    
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.goods{
    .el-card{
        width: 800px;
        margin: 20px auto;
        .con{
            width: 460px;
        }
        img{
            max-width: 260px;
        }
    }
}

</style>
