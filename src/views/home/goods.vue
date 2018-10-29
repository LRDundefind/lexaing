<template>
    <div class="goods clearfix">
        <h1 style="font-size: 24px" class="m-l-20">商品列表</h1>
        <div class="m-l-10 m-r-10">
        
                <el-card v-for="(o, index) in goodsList" :key="o.id" class="m-l-10 m-r-10 textCenter">
                    <img :src="o.img" class="image">
                    <div class="bottom clearfix textLeft">
                        <p class="goodsName textLeft line-ellipsis-1">{{o.name}}</p>
                      
                        <el-button type="text" class="button floatRight">加入购物车</el-button>
                       
                    </div>
                </el-card>
            
        </div>
        <el-pagination
            class="m-t-20 m-b-20 m-l-10"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :page-size="100"
            :total="1000">
        </el-pagination>
        <Footer-bar/>
    </div>
</template>

<script>
import { goods } from '@/services/apis/goodsList';
export default {
    name: 'goods',
    data () {
        return {
            goodsList:[
                {
                    id:'1',
                    img:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2443133221,2322523741&fm=173&app=49&f=JPEG?w=218&h=146&s=2566F0046C2E27178F0719950300C088',
                    name:'好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡'
                },{
                    id:'2',
                    img:'http://element.eleme.io/static/hamburger.50e4091.png',
                    name:'好吃的汉堡'
                },{
                    id:'3',
                    img:'http://element.eleme.io/static/hamburger.50e4091.png',
                    name:'好吃的汉堡'
                },{
                    id:'4',
                    img:'http://element.eleme.io/static/hamburger.50e4091.png',
                    name:'好吃的汉堡'
                },{
                    id:'5',
                    img:'http://element.eleme.io/static/hamburger.50e4091.png',
                    name:'好吃的汉堡'
                },{
                    id:'6',
                    img:'http://element.eleme.io/static/hamburger.50e4091.png',
                    name:'好吃的汉堡'
                }
                
            ]
        }
    },
    mounted() {
        goods.list().then(response=>{
            console.log(response)
        })
    },
    created(){
        
    },
    methods:{
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.goods{
    .el-card{
        width: 300px;
        height: 300px;
        display: inline-block;
        .goodsName{
            font-size: 16px;
        }
        img{
            max-width: 260px;
            max-height: 200px;
        }
    }
}

</style>
