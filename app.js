import Vue from 'vue'
import Button from './package/button/index.js'

Vue.component(Button.name, Button);

new Vue({
    el: '#root'
});