import Vue from 'vue'
import Button from './package/button/index.js'
import Icon from './package/icon/index.js'
import ButtonGroup from './package/button-group/index.js'

Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
Vue.component(ButtonGroup.name, ButtonGroup);

new Vue({
    el: '#root',
    data: function () {
        return {
            loading: {
                a: true,
                b: true,
                c: false
            }
        }
    },
    methods: {
        waitHandle: function () {
            this.loading.b = !this.loading.b
        }
    }
});

// 单元测试
