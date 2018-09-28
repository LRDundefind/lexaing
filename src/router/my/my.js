const Index = resolve => require([ '@/views/my/index'],resolve)

const My = resolve => require([ '@/views/home/my'],resolve)
//乐云仓库
const Warehouse = resolve => require([ '@/views/my/warehouse'],resolve)
//我的订单
const Order = resolve => require([ '@/views/my/order'],resolve)

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
		}
	]
}]