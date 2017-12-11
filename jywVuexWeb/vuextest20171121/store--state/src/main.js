import Vue from 'vue'
import store from  './store/store'
import counter1 from './components/counter1.vue'


new Vue({
	el:'#app',
	store,
	components:{
        counter1
	},
    template:
	  `<div class="app">
      <button @click="increment">button</button>
      <counter1></counter1>
    </div>`,
	methods:{
		increment(){
			//store.commit('increment',{data:1})
            store.dispatch("increment");
		}
	}

})