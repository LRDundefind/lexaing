import axios from "../index";

export const goods = {
    //测试接口
    list(data) {
        return axios({
            url: '/mainframe/goods/getGoodsByUrl',
            method: 'post',
            data: data
        });
    },
    //更新商品信息
    update(data) {
        return axios({
            url: '/mainframe/goods/updateGoodsBygoodsId',
            method: 'post',
            data: data
        });
    },
}