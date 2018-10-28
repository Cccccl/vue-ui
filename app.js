import Vue from 'vue'
import Button from './package/button/index.js'
import Icon from './package/icon/index.js'
Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
new Vue({
    el: '#root'
});