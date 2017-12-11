export  default {
	template:`<h2>{{count}}</h2>`,
	computed:{
		count(){
			return this.$store.state.count
		}
	}
}