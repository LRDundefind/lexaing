import Vue from 'vue'
import Router from 'vue-router'
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



Vue.use(Router)

export default new Router({
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
			redirect: '/Index',
			children: [
				...Home,
			],
		}
	]
})
