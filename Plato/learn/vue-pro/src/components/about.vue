<template>
	<div style="height: 2000px">
		<div class="center">我是关于我</div>
	  	<div class="nav-box">
	  		<ul class="nav">
				<!-- <router-link to='/about' exact tag='li'><a>study</a></router-link>  			
				<router-link to='/about/work' tag='li'><a>work</a></router-link>  			
				<router-link to='/about/hobby' tag='li'><a>hobby</a></router-link> -->

				<router-link :to="{name:'about'}" exact tag='li'><a>study</a></router-link>  			
				<router-link :to="{name:'work'}" tag='li'><a>work</a></router-link>  			
				<router-link :to="{name:'hobby'}" tag='li'><a>hobby</a></router-link>   			
	  		</ul>
	  	</div>
	  	<!-- <div id="abc">锚点</div> -->
	  	<router-view></router-view>
	</div>
</template>

<script>

	export default {}
</script>

