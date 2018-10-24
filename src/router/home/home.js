const Home = resolve => require([ '@/views/home/home'],resolve)
const My = resolve => require([ '@/views/home/my'],resolve)
const Goods = resolve => require([ '@/views/home/goods'],resolve)
export default [{
	path: 'home',
	name: 'home',
	component: Home
},{
	path: 'my',
	name: 'my',
	component: My
},{
	path: 'goods',
	name: 'goods',
	component: Goods
}]