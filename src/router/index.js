import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//登录路由
const Login = resolve => require([ '@/views/login/login'],resolve)
//首页路由
//import Home from './home/home'
const Home = resolve => require([ '@/views/home/index'],resolve)




Vue.use(Router)

export default new Router({
	routes: [
	  	{
			path: '/login',
			name: 'login',
			component: Login,
		},{
			path: '/home',
			name: 'home',
			component: Home,
		}
	]
})
