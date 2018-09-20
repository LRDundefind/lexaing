<template>
    <div class="sign">
        <el-steps :active="active" finish-status="success" align-center>
            <el-step title="填写注册信息"></el-step>
            <el-step title="邮箱验证"></el-step>
            <el-step title="注册完成"></el-step>
        </el-steps>
        <el-card class="box-card pos-a">
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
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sign{
    .font-size-14{
        font-size: 14px;
    }
    height: 100vh;
    .box-card {
        width: 380px;
        top: 80px;
        .signBtn{
          width: 100%;
        }

    }
}

</style>
