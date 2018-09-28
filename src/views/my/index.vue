<template>
    <div class="myHome">
        <div class="header clearfix">
            <div class="headImg floatLeft"></div>
            <div class="floatLeft m-l-20">
                <p class="name">迷人的小样，欢迎回来</p>
                <p>账户余额：0.00 <a>充值</a></p>
                <p>积分：0 <a>规则</a></p>
            </div>
        </div>
        <div class="info m-t-20">
            <p>乐云仓库地址</p>
            <table class="m-t-20">
                <tr>
                    <td>*联系人（Name）</td>
                    <td>迷人的小样</td>
                </tr>
                <tr>
                    <td>所在地区（Region）</td>
                    <td></td>
                </tr>
                <tr>
                    <td>*街道地址(Street)</td>
                    <td>龙华街道龙观大道12号桦浩泰工业区D栋2楼P1JE7号</td>
                </tr>
                <tr>
                    <td>邮政编码(Zip Code)</td>
                    <td>518108</td>
                </tr>
                <tr>
                    <td>收货电话(Tel)</td>
                    <td>0755 - 86713361</td>
                </tr>
                <tr>
                    <td>手机号码(Phone)</td>
                    <td>13243877686</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>

export default {
    name: 'myHome',
    data () {
      return {
        goods: ''
      }
    },
    mounted() {

    },
    created(){
        //this.defaultAddForm = JSON.parse(JSON.stringify(this.addForm));
    },
    methods:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.myHome{
    .header{
        .name{
            font-size: 16px;
        }
        .headImg{
            width: 60px;
            height: 60px;
            border:1px #ccc solid;
        }
    }
    .info{
        width: 100%;
        > p{
            font-size: 20px;
            border-bottom: 1px #e6e6e6 solid;
        }
        table td{
            border:1px #e6e6e6 solid;
            padding: 10px 15px;
        }
    }
    
}

</style>
