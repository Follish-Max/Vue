import Vue from 'vue'
//导入vue-router包
import VueRouter from 'vue-router'
//手动安装VueRouter
Vue.use(VueRouter)
//导入app组件
import app from './App.vue'

import router from './router.js'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})
