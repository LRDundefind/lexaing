<template>
    <div class="home pos-a">
        <div class="searchBox">
            <el-input placeholder="复制商品链接" v-model="goods" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="searchGood">快速代购</el-button>
            </el-input>
            <div class="brand">
                <img class="dm m-l-30 m-r-30" src="../../assets/home/u38.png" alt="">
                <img class="gucci m-l-30 m-r-30" src="../../assets/home/u46.png" alt="">
                <img class="dior m-l-30 m-r-30" src="../../assets/home/u44.png" alt="">
                <img class="burberry m-l-30 m-r-30" src="../../assets/home/u42.png" alt="">
                <img class="amazon m-l-30 m-r-30" src="../../assets/home/u40.png" alt="">
            </div>
        </div>
        <div style="margin-top:100px;padding:20px; background:#51ade8">
            <el-card v-for="(o, index) in goodsList" :key="o.goodsId" class="goods m-l-20 m-r-20">
                <img :src="o.goodsImg" class="goodsImg">
                <div style="padding: 14px;">
                    <div class="bottom clearfix">
                        <p class="line-ellipsis-1">{{ o.goodsName }}</p>
                        <el-form ref="form" :model="o" label-width="40px" class="floatLeft">
                            <el-form-item label="价格">
                                <el-input v-model="o.goodsPrice" placeholder="请输入商品价格" size="small"></el-input>
                            </el-form-item>
                        </el-form>
                        <el-button type="text" class="button floatRight" @click="update(o)">加购</el-button>
                    </div>
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
    name: 'home',
    data () {
        return {
            accid:'',
            goods: '',
            goodsList:[
                {
                    goodsId:'00243801369f4f22b1e9e3e7cb56a8b6',
                    goodsImg:'//media.gucci.com/style/DarkGray_South_0_160_316x316/1488824104/454703_CWC10_9022_001_097_0000_Light-Espadrille-aus-Gucci-Signature-Leder.jpg',
                    goodsName:'Espadrille aus Gucci Signature Leder',
                    goodsPrice:''
                },
                {
                    goodsId:'01eb7a95e8da4f9293530ca7b36c3ffb',
                    goodsImg:'//media.gucci.com/style/DarkGray_South_0_160_316x316/1521064812/522866_K5V1N_8666_001_100_0029_Light-GG-Supreme-Tschchen-mit-Bienen-Print.jpg',
                    goodsName:'GG Supreme Täschchen Bienen-Print',
                    goodsPrice:''
                },
                {
                    goodsId:'0228c9c62f034c5aab81949d90ddb7e6',
                    goodsImg:'//media.gucci.com/style/DarkGray_South_0_160_316x316/1502385305/498695_AYO10_1000_001_093_0000_Light-Stiefelette-aus-Leder-mit-Stickerei.jpg',
                    goodsName:'Stiefelette aus Leder mit Stickerei',
                    goodsPrice:''
                },
                {
                    goodsId:'02e04daa0d1b4eb1b2cffb7e3975da2b',
                    goodsImg:'//media.gucci.com/style/DarkGray_South_0_160_316x316/1535709605/538108_3G856_9260_001_100_0000_Light-Tuch-aus-Modal-und-Seide-mit-RisingFlower-Print.jpg',
                    goodsName:'Tuch aus Modal und Seide mit Rising Flower-Print',
                    goodsPrice:''
                }
            ],
            form:{
                goodsId:'',
                goodsPrice:'',
            }
        }
    },
    mounted() {
        this.accid = localStorage.getItem("userId") || '';
    },
    created(){
        //this.defaultAddForm = JSON.parse(JSON.stringify(this.addForm));
    },
    methods:{
        searchGood(){
            if (this.goods) {
                this.$router.push({
                    path: "goods",
                    query:{
                        url:this.goods,
                    }
                })
            }else{
                this.$message({
                    message: "请输入商品链接",
                    type: 'warning'
                });
            }
            
        },
        update(row){
            this.form.goodsId = row.goodsId;
            this.form.goodsPrice = row.goodsPrice;
            if (row.goodsPrice) {
                goods.update(this.form).then(response=>{
                    if (response.data.code == 200) {
                        this.addCar()
                    }
                    //console.log(response)
                })
            }else{
                this.$message({
                    message: '请输入商品价格',
                    type: 'warning'
                });
            }
            
        },
        addCar(){
            if (this.accid) {
                my.saveItem({
                    accid:this.accid,
                    goodsId:this.form.goodsId,
                    itemNum:1
                }).then(response=>{
                    if (response.data.code == 200) {
                        this.$message({
                            message: '成功加入购物车',
                            type: 'success'
                        });
                    }
                        
                })
            }else{
                this.$message({
                    message: '请先登陆',
                    type: 'warning'
                });
            }
            

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home{
    width: 100%;
    height: calc(100vh - 60px);
    background: url("../../assets/bg.jpeg") no-repeat;
    background-size: cover;
    /*background: #51ade8;*/
    .searchBox{
        width: 60%;
        padding-top: 200px;
        margin: 0 auto;
        .el-input__inner{
            height: 54px;
            font-size: 16px;
        }
        .el-input-group__append{
            background: #ffcc00;
            color: #fff;
            font-size: 16px;
        }
    }
    .brand{
        margin: 60px auto 0 auto;
        width: 820px;
        img{
            vertical-align: middle;
        }
        .dm{
            width: 116px;
        }
        .gucci{
            width: 60px;
        }
        .dior{
            width: 90px;
        }
        .burberry{
            width: 130px;
        }
        .amazon{
            width: 100px;
        }
    } 
    .goods{
        display: inline-block;
        width: 280px;
        height: 400px;
        .goodsImg{
            width: 240px;
        }
    }
}

</style>
