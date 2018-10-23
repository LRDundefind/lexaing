const Index = resolve => require([ '@/views/my/index'],resolve)

const My = resolve => require([ '@/views/home/my'],resolve)
//购物车
const ShoppingCar = resolve => require([ '@/views/my/shoppingCar'],resolve)
//乐云仓库
const Warehouse = resolve => require([ '@/views/my/warehouse'],resolve)
//我的订单
const Order = resolve => require([ '@/views/my/order'],resolve)
//历史订单
const Orderhistory = resolve => require([ '@/views/my/orderHistory'],resolve)
//我的运单
const Transport = resolve => require([ '@/views/my/transport'],resolve)

export default [{
	path: 'my',
	name: 'my',
	component: My,
	redirect: '/my/index',
	children:[
		{
			path: 'index',
			name: 'index',
			components:{
				myView:Index
			} 
		},{
			path: 'shoppingCar',
			name: 'shoppingCar',
			components:{
				myView:ShoppingCar
			} 
		},{
			path: 'warehouse',
			name: 'warehouse',
			components:{
				myView:Warehouse
			} 
		},{
			path: 'order',
			name: 'order',
			components:{
				myView:Order
			} 
		},{
			path: 'orderHistory',
			name: 'orderHistory',
			components:{
				myView:Orderhistory
			} 
		},{
			path: 'transport',
			name: 'transport',
			components:{
				myView:Transport
			} 
		}
	],
	meta:{
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
}]