import axios from "../index";

export const login = {
    //登陆
    login(data) {
        return axios({
            url: '/mainframe/login/login',
            method: 'post',
            data: data
        });
    },
    //注册
    register(data){
    	return axios({
            url: '/mainframe/login/register',
            method: 'post',
            data: data
        });
    },
    //修改账号密码
    updatePass(data){
    	return axios({
            url: '/mainframe/login/updatePass',
            method: 'post',
            data: data
        });
    },
    //发送注册账号验证码
    sendVerificationCode1(data){
    	return axios({
            url: '/mainframe/login/sendVerificationCode1',
            method: 'post',
            data: data
        });
    },
    //发送重置密码验证码
    sendVerificationCode2(data){
    	return axios({
            url: '/mainframe/login/sendVerificationCode2',
            method: 'post',
            data: data
        });
    },

}