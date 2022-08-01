import $ from 'jquery'

// 导入样式 (webpack中一切皆模块)
import './index.css'
import './index.less'

// 导入图片
import logo from './images/logo.png'

$(function () {
    $('li:odd').css('background-color', 'white')
    $('li:even').css('background-color', 'pink ')
    $('.box').attr('src', logo)
})