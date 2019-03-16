// console.log("111")

//如何在webpack构建的项目中，使用Vue进行开发


import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'

import login from './login.vue'

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    // components: {
    //     login
    // }

    render: c => c(login)


})