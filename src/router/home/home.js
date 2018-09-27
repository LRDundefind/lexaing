const Home = resolve => require([ '@/views/home/home'],resolve)
const My = resolve => require([ '@/views/home/my'],resolve)
export default [{
	path: 'home',
	name: 'home',
	component: Home
},{
	path: 'my',
	name: 'my',
	component: My
}]