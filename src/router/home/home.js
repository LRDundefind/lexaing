const Home = resolve => require([ '@/views/home/index'],resolve)

export default [{
	path: 'home',
	name: 'home',
	component: Home
}]