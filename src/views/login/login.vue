<template>
    <div class="login">
        <img src="../../assets/logo.png">
        <el-card class="box-card pos-a">
            <div slot="header" class="clearfix">
                <span>乐享登陆网</span>
            </div>
            <div class="text item">
                <p class="font-size-14">Email或用户名</p>
                <el-input
                  placeholder="请输入Email或用户名"
                  v-model="form.account"
                  clearable>
                </el-input>
                <p class="font-size-14 m-t-20 clearfix">密码 <a class="floatRight" @click="findPass">忘记密码？</a></p>
                <el-input
                  placeholder="请输入密码"
                  v-model="form.password"
                  clearable>
                </el-input>
                <div class="clearfix m-t-20">
                    <p class="font-size-14">输入验证码</p>
                    <el-input
                      class="floatLeft"
                      style="width: 100px"
                      placeholder="验证码"
                      v-model="form.code"
                      clearable>
                    </el-input>
                    <canvas id="canvas" class="floatLeft m-l-20" width="100" height="40" @click="reDrawCode"></canvas>
                </div>
                <el-button type="primary" class="loginBtn m-t-20" @click="login">登 陆</el-button>
                
            </div>
            <el-button type="info" class="signBtn pos-a" @click="sign">立即注册</el-button>
        </el-card>

    </div>
</template>

<script>
import vuex from 'vuex'
import store from '@/vuex/store'
import { login } from '@/services/apis/login';
var show_num = [];
export default {
    name: 'HelloWorld',
    data () {
        
        return {
            form:{
                account:'',
                password:'',
                code:''
            }
        }
    },
    mounted() {
       this.drawCode(show_num);
    },
    created(){

    },
    methods:{
        login(){
            if(this.form.account==''){
                this.$message({
                    message: '请输入账号',
                    type: 'warning'
                });
            }else if(this.form.password==''){
                this.$message({
                    message: '请输入密码',
                    type: 'warning'
                });
            }else if(this.form.code != show_num.join("")){
                this.$message({
                    message: '请输入正确的验证码',
                    type: 'warning'
                });
            }else{
                //login.login(this.form).then(response=>{
                    store.commit('isLogin',true);
                    let redirect = this.$route.query.redirect || '/home';
                    this.$router.push({path: redirect})
                //})
                
            }
        },
        sign(){
            this.$router.push({path:'/sign'})
        },
        findPass(){
            this.$router.push({path:'/findPass'})
        },
        //重新绘制验证码
        reDrawCode(){
            this.drawCode(show_num);
        },
        //产生随机验证码
        drawCode(show_num){
            var canvas_width=document.getElementById("canvas").offsetWidth;
            var canvas_height=document.getElementById("canvas").offsetHeight;
            var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
            var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
            canvas.width = canvas_width;
            canvas.height = canvas_height;
            var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
            var aCode = sCode.split(",");
            var aLength = aCode.length;//获取到数组的长度
            
            for (var i = 0; i <= 3; i++) {
                var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
                var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
                var txt = aCode[j];//得到随机的一个内容
                show_num[i] = txt.toLowerCase();
                var x = 10 + i * 20;//文字在canvas上的x坐标
                var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
                context.font = "bold 23px 微软雅黑";

                context.translate(x, y);
                context.rotate(deg);

                context.fillStyle = this.randomColor();
                context.fillText(txt, 0, 0);

                context.rotate(-deg);
                context.translate(-x, -y);
            }
            for (var i = 0; i <= 5; i++) { //验证码上显示线条
                context.strokeStyle = this.randomColor();
                context.beginPath();
                context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
                context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
                context.stroke();
            }
            for (var i = 0; i <= 30; i++) { //验证码上显示小点
                context.strokeStyle = this.randomColor();
                context.beginPath();
                var x = Math.random() * canvas_width;
                var y = Math.random() * canvas_height;
                context.moveTo(x, y);
                context.lineTo(x + 1, y + 1);
                context.stroke();
            }
        },
        //得到随机的颜色值
        randomColor() {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            return "rgb(" + r + "," + g + "," + b + ")";
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login{
    .font-size-14{
        font-size: 14px;
    }
    height: 100vh;
    background: #ccc;
    .box-card {
        width: 380px;
        height: 440px;
        top: 80px;
        right: 40px;
        font-size: 20px;
        .loginBtn,.signBtn{
          width: 100%;
        }
        .signBtn{
            bottom: 0;
            left: 0;
            font-size: 20px;
            line-height: 20px;
        }
    }
}

</style>
