<template>
  	<div>
  		<div>
  			<router-link 
  				v-for="item,index in userList"
  				:key="index"
  				:to="{path:'/user/'+ item.id,query:{info:'follow'}}"
  				style="padding: 20px;margin: 0 10px;"
  			>{{item.userName}}</router-link>
  		</div>
  		<div class="userInfo" v-if="userInfo.userName" style="text-align: center;">
	  		<p>姓名：{{userInfo.userName}}</p>
	  		<p>年龄：{{userInfo.age}}</p>
	  		<p>性别：{{userInfo.gender}}</p>
	  		<p>爱好：{{userInfo.hobby}}</p>
	  	</div>
	  	<hr>
	  	<div v-if="userInfo.userName" style="text-align: center;">
	  		<router-link exact to="?info=follow">关注</router-link>
	  		<router-link exact :to="{path:'',query:{info:'share'}}">分享</router-link>
	  	</div>
  	</div>
</template>

<script>
	let data = [
		{
			id:1,
			userName:"plato",
			age:23,
			gender:"male",
			hobby:"sing"
		},
		{
			id:2,
			userName:"cherry",
			age:23,
			gender:"female",
			hobby:"dance"
		},
		{
			id:3,
			userName:"valdimr",
			age:23,
			gender:"male",
			hobby:"play"
		}
	]	
	export default {
	  	data() {
	    	return {
	      		userList:data,
	      		userInfo:{}
	    	}
	  	},
	  	watch:{
	  		$route(){
	  			this.getData();
	  		}
	  	},
	  	created(){
  			this.getData();
	  		
	  	},
	  	methods:{
	  		getData(){
	  			var userId = this.$route.params.userId;
	  			if(userId){
		  			this.userInfo = this.userList.filter(item => {
			  			return item.id == userId
			  		})[0];
		  		}else{
		  			this.userInfo = {};
		  		}
	  		}
	  	}

	}
</script>

