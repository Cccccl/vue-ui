<template>
    <button class="ccc1l-button" :class="iconPositionClass" @click="toggle">
        <ccc1l-icon :name="icon" v-if="!loading"></ccc1l-icon>
        <ccc1l-icon name="loading" v-if="loading"></ccc1l-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from '../../icon'
export default {
    name: 'ccc1l-button',
    components: {'ccc1l-icon': Icon},
    props: {
        icon: {
            type: String
        },
        loading: {
           type: Boolean,
           default: false
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator (value){
                return !(value !== 'left' && value !== 'right')
            }
        }
    },
    computed: {
        iconPositionClass: function () {
            if (this.icon) {
                return `icon-${this.iconPosition}`
            } else {
                return ''
            }
        }
    },
    methods: {
        toggle: function () {
            this.$emit('wait')
        }
    }
}
</script>
<style lang="scss">
.ccc1l-button{
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    color: var(--color);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;

    &:hover{
        background-color: var(--button-hover-bg);
    }
    &:active{
        background-color: var(--button-active-bg);
    }
    &:focus{
        outline: none;
    }
    .ccc1l-icon{
        order: 1;
        margin: 0 0.3em 0 0;
    }
    .content{
        order: 2;
    }
    &.icon-right{
        >.ccc1l-icon{
            order: 2;
            margin: 0 0 0 0.3em;
        }
        >.content{
            order: 1;
        }
    }
}
</style>