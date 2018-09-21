<template>
    <div class="sign p-t-20">
        <el-steps :active="active" finish-status="success" align-center>
            <el-step title="填写注册信息"></el-step>
            <el-step title="邮箱验证"></el-step>
            <el-step title="注册完成"></el-step>
        </el-steps>
        <div class="box">
            <!-- 第一步 -->
            <el-card class="box-card pos-a" v-if="active == 0">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Email" prop="Email">
                        <el-input v-model="ruleForm.Email" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <el-button type="info" class="signBtn" @click="submitForm('ruleForm')">立即注册</el-button>
            </el-card>
            <!-- 第二步 -->
            <div class="step2" v-else-if="active == 1">
                <h1 class="font-size-20">还差一步即可完成注册</h1>
                <p>我们已经向您的邮箱发送了一封激活邮件，请点击邮件中的链接完成注册！</p>
                <el-button class="m-t-10" type="info" @click="enterEmail">进入邮箱验证</el-button>
                <p class="m-t-10">没有收到邮件? <a href="#">重发一封</a> 或 <a href="#">重新注册</a></p>
            </div>
            <!-- 第三步 -->
            <div class="step3" v-else>
                <h1 class="font-size-20">恭喜您注册成功</h1>
                <p>{{count}}秒后自动跳转到我的乐享，<a href="#">立即前往</a></p>
            </div>
        </div>
    </div>
</template>

<script>
import { test } from '@/services/apis/test';
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
                username:'',
                Email:'',
                pass: '',
                checkPass: '',
            },
            rules: {
                username:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                Email:[
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ],
                pass: [
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
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                this.active = 1;
              } else {
                console.log('error submit!!');
                return false;
              }
            });
        },
        enterEmail(){
            this.active = 3;
            this.countDown();
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
                }
            }, 1000)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sign{
    .box{
        width: 380px;
        margin: 0 auto;
    }
    .font-size-14{
        font-size: 14px;
    }
    .font-size-20{
        font-size: 20px;
    }
    height: 100vh;
    .box-card {
        width: 380px;
        margin: 0 auto;
        top: 80px;
        .signBtn{
          width: 100%;
        }

    }
}
.step2,.step3{
    width: 600px;
    margin: 100px auto;
}
</style>
