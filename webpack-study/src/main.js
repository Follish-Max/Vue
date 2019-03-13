//项目的js入口文件

//1.导入jquery
// import *** from *** 是ES6中导入模块的方式
//ES6语法目前浏览器解析不了，所以会报错
//解决方法： webpack-cli ./src/main.js --output ./dist/bundle.js --mode development
import $ from 'jquery'
// const $ = require('jquery')

import './css/index.css'

import './css/index.less'

import './css/index.scss'

$(function () {
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor',function () {
        return '#' + 'D98387'
    })
})