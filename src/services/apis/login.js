import axios from "../index";

export const login = {
    //测试接口
    login(data) {
        return axios({
            url: '/api/mainframe/login/login',
            method: 'post',
            data: data
        });
    }
}