import Vue from 'vue'
import Vuex from 'vuex'

//创建store实例之前，假如使用的是模块化导入，则需要加上改代码。script引入的vue和vuex不需要。
Vue.use(Vuex)

export default new Vuex.Store({
	//定义状态
	state: {
		count: 0
	},

	mutations: {
		increment(state) {
			//修改state
			state.count++
		},
		release(state) {
			state.count--
		}
	}
})