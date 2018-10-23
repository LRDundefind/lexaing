import axios from "../index";

export const my = {
    //测试接口
    check(data) {
        return axios({
            url: 'api/item/findItem',
            method: 'post',
            data: data
        });
    }
}