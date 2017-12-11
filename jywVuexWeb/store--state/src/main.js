//假如报如下错误：vuex requires a Promise polyfill in this browser.
//因为 Vuex 的源码是依赖 Promise 的。Promise 是 es6 提供新的 API，由于现在的浏览器并不是都支持 es6 语法的，所以通常我们会用 babel 编译我们的代码，如果想使用 Promise 这个 特性，我们需要在 package.json 中添加对 babel-polyfill 的依赖并在代码的入口加上 import 'babel-polyfill'

import 'babel-polyfill'
import Vue from 'vue'
import store from './store/store.js'
import Counter from './components/Counter.vue'
import Counter2 from './components/Counter2.vue'


//引入css模块
//import './css/style.css'

 new Vue({
			el:'#app',
  			store,
  			components:{
  			
  				Counter,
  				Counter2
  			},
  			template:`<div class="app">
  			<counter></counter>
  			<button @click="add">+</button>
			<button @click="release">-</button>
			<counter2></counter2>
  			</div>`,
  			
  			methods:{
  				add(){
  				
  					store.commit('increment')
  				},
  				release(){
  				
  					store.commit('release')
  				}
  			}
		})
