import Vue from 'vue'
import Button from './package/button/index.js'
import Icon from './package/icon/index.js'
import ButtonGroup from './package/button-group/index.js'

Vue.use(Button);
Vue.use(Icon);
Vue.use(ButtonGroup);

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
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies);
const expect = chai.expect;

try{
    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'upload'
            }
        });
        vm.$mount();
        let useElement = vm.$el.querySelector('use');
        let href = useElement.getAttribute('xlink:href');
        expect(href).to.eq('#c-upload');
        vm.$el.remove();
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'upload',
                loading: true
            }
        });
        vm.$mount();
        let useElement = vm.$el.querySelector('use');
        let href = useElement.getAttribute('xlink:href');
        expect(href).to.eq('#c-loading');
        vm.$el.remove();
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'upload'
            }
        });
        vm.$mount();
        document.getElementById('root').appendChild(vm.$el);
        let svgElement = vm.$el.querySelector('svg');
        let {order} = window.getComputedStyle(svgElement);
        expect(order).to.eq('1');
        vm.$el.remove();
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'upload',
                iconPosition: 'right'
            }
        });
        vm.$mount();
        document.getElementById('root').appendChild(vm.$el);
        let svgElement = vm.$el.querySelector('svg');
        let {order} = window.getComputedStyle(svgElement);
        expect(order).to.eq('2');
        vm.$el.remove();
        vm.$destroy()
    }
    {
        // 希望这个函数被执行，需要使用到mock
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'upload'
            }
        });
        vm.$mount();
        let spy = chai.spy(function (){});
        vm.$on('wait', spy);
        vm.$el.click();
        expect(spy).to.have.been.called();
        vm.$el.remove();
        vm.$destroy()
    }
}catch (error) {
    window.errors = [error]
} finally {
    window.errors && window.errors.forEach((error) => {
        console.error(error.message)
    })
}