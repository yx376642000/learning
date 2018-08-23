import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import doc from '@/components/doc'
import about from '@/components/about'
import user from '@/components/user'
import noFound from '@/components/404'
import study from '@/components/view/study'
import work from '@/components/view/work'
import hobby from '@/components/view/hobby'
import slider from '@/components/view/slider'

Vue.use(Router)

export default new Router({
	mode:"history",//路由模式
	//linkActiveClass:"is-active",
	scrollBehavior(to,from,savePosition){//点击浏览器前进，后退触发
		//console.log(to);//要进入的路由对象
		//console.log(from);//离开的路由对象
		//console.log(savePosition);//记录滚动跳的坐标
		if( to.hash ){
			return {
				selector: to.hash
			}
		}
		if(savePosition){
			return savePosition
		}else{
			return {x:0,y:0}
		}
	},
  	routes: [
	    {
	      	path: '/',
	      	components: {
	      		default:home,
	      	},
	    },
	    {
	      	path: '/home',
	      	name: 'home',
	      	component: home,
	      	alias:'/index'
	    },
	    {
	      	path: '/doc',
	      	name: 'doc',
	      	components: {
	      		default:home,
	      		slider:slider
	      	}
	    },
	    {
	      	path: '/user/:userId?',
	      	component: user
	    },
	    {
	      	path: '/about',
	     	component: about,
	      	children:[
		      	{
		      		path:"",//默认子路由
		      		name: 'about',
		      		component:study
		      	},
		      	{
		      		path:"work",
		      		name:"work",
		      		component:work
		      	},
		      	{
		      		path:"hobby",
		      		name:"hobby",
		      		component:hobby
		      	}
	      ]
	    }

  	]
})
