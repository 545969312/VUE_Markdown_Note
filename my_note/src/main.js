// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Note from './components/Note'
import store from './store'
import axios from 'axios'
import "jquery"

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  //vue与上面定义的大仓库建立联系
  components: { App },
  template: '<App/>',
  beforeMount:function(){
	axios
	.get('http://127.0.0.1:8000/api/notes/')
	.then((res)=>{
		this.$store.commit('INITNOTELIST',res.data.data)
	})
  }
})
