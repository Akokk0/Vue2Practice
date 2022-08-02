import $ from 'jquery'

// 导入样式 (webpack中一切皆模块)
import './index.css'
import './index.less'

// 导入图片
import logo from './images/logo.png'

//导入 src/js/test/info.js
import abc from './js/test/info'

$(function () {
    $('li:odd').css('background-color', 'white')
    $('li:even').css('background-color', 'pink ')
    $('.box').attr('src', logo)
})

//定义一个装饰器函数
function info(target) {
    target.info = 'Person info'
}

//定义一个普通的类
@info
class Person {}

console.log(Person.info)