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
                  v-model="form.username"
                  clearable>
                </el-input>
                <p class="font-size-14 m-t-20 clearfix">密码 <a class="floatRight" @click="findPass">忘记密码？</a></p>
                <el-input
                  placeholder="请输入密码"
                  v-model="form.password"
                  clearable>
                </el-input>
                <el-button type="primary" class="loginBtn m-t-20" @click="login">登 陆</el-button>
            </div>
            <el-button type="info" class="signBtn pos-a" @click="sign">立即注册</el-button>
        </el-card>

    </div>
</template>

<script>
import vuex from 'vuex'
import store from '@/vuex/store'
import { test } from '@/services/apis/test';
export default {
    name: 'HelloWorld',
    data () {
      return {
          form:{
              username:'',
              password:''
          }
      }
    },
    mounted() {
       
    },
    created(){

    },
    methods:{
        login(){
            if(this.form.username==''){
                this.$message({
                    message: '请输入账号',
                    type: 'warning'
                });
            }else if(this.form.password==''){
                this.$message({
                    message: '请输入密码',
                    type: 'warning'
                });
            }else{
                store.commit('isLogin',true);
                let redirect = this.$route.query.redirect || '/home';
                this.$router.push({path: redirect})
            }
        },
        sign(){
            this.$router.push({path:'/sign'})
        },
        findPass(){
            this.$router.push({path:'/findPass'})
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
        height: 400px;
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
