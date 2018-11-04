<template>
    <div class="findPass p-t-20">
        
        <el-steps :active="active" finish-status="success" align-center>
            <el-step title="填写Email"></el-step>
            <el-step title="邮箱验证"></el-step>
            <el-step title="邮箱验证"></el-step>
            <el-step title="注册完成"></el-step>
        </el-steps>
        <!-- 第一步 -->
        <el-card class="box-card" v-if="active == 0">
            <p class="font-size-14">Email或用户名</p>
            <el-input
              placeholder="请输入您注册的Email"
              v-model="ruleForm.email"
              type="email"
              clearable>
            </el-input>
            <!-- <p class="font-size-14 m-t-20 clearfix">验证码 </p>
            <el-input
              placeholder="请输入验证码"
              v-model="ruleForm.code"
              clearable>
            </el-input> -->
            <el-button type="info" class="signBtn m-t-20" @click="submitUser()">下一步</el-button>
        </el-card>
        <!-- 第二步 -->
        <div class="step2" v-else-if="active == 1">
            <h1 class="font-size-20">已向您的Email发送验证邮件</h1>
            <p>我们已经向您的邮箱发送了一封验证邮件，请点击邮件中的链接即可重置密码</p>
            <el-button class="m-t-10" type="info" @click="enterEmail">进入邮箱验证</el-button>
            <p class="m-t-10">没有收到邮件? <a href="#">重发一封</a> 或 <a href="#">重新注册</a></p>
        </div>
        <!-- 第三步 -->
        <div class="step3" v-else-if="active == 2">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="accId">
                    <el-input type="password" v-model="ruleForm.accId" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="verificationCode">
                    <el-input type="password" v-model="ruleForm.verificationCode" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="accPassword">
                    <el-input type="password" v-model="ruleForm.accPassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="info" class="signBtn m-t-20" @click="finish('ruleForm')">完成</el-button>
        </div>
        <!-- 第四步 -->
        <div class="step4" v-else>
            <h1 class="font-size-20">恭喜您,密码重置成功并登陆</h1>
            <p>{{count}}秒后自动跳转到我的乐享，<router-link to="/home">立即前往</router-link></p>
        </div>
    </div>
</template>

<script>
import { login } from '@/services/apis/login';
export default {
    data () {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
              }
              callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
        };
        return {
            count:'',  //倒计时
            timer:null,
            active:0,  //进度条，表明步骤从0开始
            ruleForm: {
                accId:'',
                email:'',
                accPassword: '',
                checkPass: '',
                verificationCode:''
            },
            rules: {
                email:[
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ],
                verificationCode:[
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ],
                accPassword: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { required: true, message: '请确认密码', trigger: 'blur' },
                    { validator: validatePass2, trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {
       
    },
    created(){

    },
    methods:{
        submitUser() {
            if (this.ruleForm.email == "") {
                this.$message({
                    message: '请输入正确的邮箱地址',
                    type: 'warning'
                });
            }else{
                login.sendVerificationCode2({email:this.ruleForm.email}).then(response=>{
                    if (response.data.code == 200) {
                        this.active = 1;
                    }
                })
            }
        },
        enterEmail(){
            this.active = 2;
        },
        countDown(){
            const TIME_COUNT = 5;
            this.count = TIME_COUNT;
            this.timer = setInterval(() => {
               if (this.count > 0 && this.count <= TIME_COUNT) {
                 this.count--;
                } else {
                 clearInterval(this.timer);
                 this.timer = null;
                 this.$router.push({path:'/my/index'})
                }
            }, 1000)
        },
        finish(formName){
            this.$refs[formName].validate((valid) => {
              if (valid) {
                login.updatePass({
                    accId:this.ruleForm.accId,
                    accPassword:this.ruleForm.accPassword,
                    verificationCode:this.ruleForm.verificationCode,
                }).then(response=>{
                    if (response.data.code == 200) {
                        this.active = 4;
                        this.countDown();
                        store.commit('isLogin',true);
                        localStorage.setItem("userId",response.data.data.accId)
                    }
                })
                
              } else {
                console.log('error submit!!');
                return false;
              }
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.findPass{
    .font-size-14{
        font-size: 14px;
    }
    .font-size-20{
        font-size: 20px;
    }
    height: 100vh;
    .box-card {
        margin: 20px auto;
        width: 380px;
        top: 80px;
        .signBtn{
          width: 100%;
        }

    }
}
.step2,.step3,.step4{
    width: 600px;
    margin: 100px auto;
}
</style>
