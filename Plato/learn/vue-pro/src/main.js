import Vue from 'vue';
import router from './router';

Vue.use(router);

import App from './App';

import '@/assets/css/index.css'

Vue.config.productionTip = false;

new Vue({
	el:"#app",
	router,
	components:{ App },
	template:'<App />',
})