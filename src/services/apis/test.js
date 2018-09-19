import axios from "../index";

export const test = {
    //测试接口
    api(data) {
        return axios({
            url: '/api/CalculateInfos/getStatisticInfo.json',
            method: 'post',
            data: data
        });
    }
}