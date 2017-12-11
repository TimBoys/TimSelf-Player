import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		count:1111111,
		todo:[{
            id:123,name:"Tim",judge:true
        },{
            id:1234,name:"Tim2",judge:true
        },{
            id:12345,name:"Tim3",judge:false
        }]
	},
	mutations:{
		increment(state,data){
                state.count--
                state.todo.forEach(function (value,index) {
                    value.name = "TimBoys";
                })

		}
	},
	actions:{
		increment({commit}){
                setTimeout(function () {
                    commit("increment");
                },1000)

		}
	},
	getters:{
		tudoDone:(state,getter) => {
            return state.todo.filter((todo) => {return todo.judge})
		},
		count:(state,getter) => {
			return state.count
		}
	}


})