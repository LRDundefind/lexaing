import axios from "../index";

export const goods = {
    //测试接口
    list(data) {
        return axios({
            url: '/mainframe/usergoods/getusergoods.json',
            method: 'post',
            data: data
        });
    }
}