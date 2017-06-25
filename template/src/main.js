import Vue from 'vue'
import App from './App.vue'
import rawVm from '../data/vm'
import CircularJson from 'circular-json'
import {install} from './install'

const vm = CircularJson.parse(rawVm);

install(Vue)
new Vue({
	components:{
		App
	},
  el: '#main',
  data: vm
})
