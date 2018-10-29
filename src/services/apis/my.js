import axios from "../index";

export const my = {
    //查看购物车
    check(data) {
        return axios({
            url: '/mainframe/item/findItem',
            method: 'post',
            data: data
        });
    },
    //新增购物车
    saveItem(data) {
        return axios({
            url: '/mainframe/item/saveItem',
            method: 'post',
            data: data
        });
    },
    //修改购物车
    updateItem(data) {
        return axios({
            url: '/mainframe/item/updateItem',
            method: 'post',
            data: data
        });
    },
    //删除购物车
    deleteItem(data) {
        return axios({
            url: '/mainframe/item/deleteItem',
            method: 'post',
            data: data
        });
    },
}