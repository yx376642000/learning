<template>
    <div id="app">
		<div class="nav-box">
			<ul class="nav clearFix">
				
				<router-link to="/" exact tag='li' event='mouseover'>首页</router-link>
				<router-link to="/doc" tag='li' active-class="navAct" event='mouseover'>文档</router-link>
				<router-link to="/about" tag='li' event='mouseover'>关于我</router-link>
				<router-link to="/user" tag='li' event='mouseover'>用户</router-link>
			</ul>
		</div>
		<transition mode='out-in'>
			<router-view></router-view>		
		</transition>
      	<router-view name='slider'></router-view>
      	
    </div>
</template>
<style type="text/css">
	.v-enter{
		opacity: 0
	}
	.v-enter-to{
		opacity: 1
	}
	.v-enter-active{
		transition: 1s
	}
	.v-leave{
		opacity: 1
	}
	.v-leave-to{
		opacity: 0
	}
	.v-leave-active{
		transition: 0.5s
	}
</style>

<script>
    export default {
        name: 'App',
        data(){
        	return{
        		
        	}
        }
    }
</script>

