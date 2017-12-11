
//.vue文件和react的设计思想相似：它采用集中式存储管理应用的所有组件，并保证组件的状态以一种可预测的方式发生变化。所以该文件其实和react的jsx语法的设计思想相似。
//在.vue后缀的文件中可以编写跟该组件相关的css、js、html等代码。
//css代码用style标签标记;
//组件用script;
//组件模板用template

//如果使用 "scoped" 属性，那么所规定的样式只能应用到 style 元素的父元素及其子元素。
<style scoped>
	h1{
		color: red;
	}
</style>

<template>
	<h1>{{count}}</h1>
</template>

<script>

	import '../css/style.css'

	export default {
		
		computed: {

        count() {

            return this.$store.state.count
        }
    }
    }
</script>