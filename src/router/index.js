import Vue from 'vue'

import Router from 'vue-router'
import vuex from 'vuex'
import store from '@/vuex/store'

//import HelloWorld from '@/components/HelloWorld'
//登录,注册,找回密码路由
const Login = resolve => require([ '@/views/login/login'],resolve)
const Sign = resolve => require([ '@/views/login/sign'],resolve)
const FindPass = resolve => require([ '@/views/login/findPass'],resolve)
const Index = resolve => require([ '@/views/index'],resolve)
//首页路由
//import Home from './home/home'
//const Home = resolve => require([ '@/views/index'],resolve)
import Home from "./home/home"
//我的乐享
import My from "./my/my"
//购物袋
import ShoppingCar from "./shoppingCar/shoppingCar"

Vue.use(Router)
const router = new Router({
	routes: [
		{
			path: '/login',
			name: 'login',
			component: Login,
		},{
			path: '/sign',
			name: 'sign',
			component: Sign,
		},{
			path: '/findPass',
			name: 'findPass',
			component: FindPass,
		},{
			path: '/',
			name: 'Index',
			component: Index,
			redirect: '/home',
			children: [
				...Home,
				...My,
				...ShoppingCar,
			],
		}
	]
})
/**
 * 路由拦截
 * @param  {[type]} (to, from, next [即将要进入的目标 路由对象，当前导航正要离开的路由，]
 * @return {[type]}      [description]
 */
router.beforeEach((to, from, next) => {
	const token = store.state.isLogin?store.state.isLogin:localStorage.getItem('isLogin');
    if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
        if (token != "false" && token) {  // 判断token是否存在
          next();
        }
        else {
          next({
            path: '/login',
            query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
          //console.log(to.fullPath);
        }
    }
    else {
        next();
    }
});
export default router;