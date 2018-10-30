import ButtonGroup from './src/main.vue'

/* istanbul ignore next */
ButtonGroup.install = function(Vue) {
    Vue.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup