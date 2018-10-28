<template>
    <button class="ccc1l-button" :class="{[`icon-${iconPosition}`]: true}">
        <svg class="icon" v-if="icon">
            <use :xlink:href=`#c-${icon}`></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
export default {
    name: 'ccc1l-button',
    props: {
        icon: {
            type: String
        },
        iconPosition: {
            type: String,
            default: 'left'
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
    .icon {
        width: 1em;
        height: 1em;
    }
    &:hover{
        background-color: var(--button-hover-bg);
    }
    &:active{
        background-color: var(--button-active-bg);
    }
    &:focus{
        outline: none;
    }
    >.icon{
        order: 1;
        margin: 0 0.3em 0 0;
    }
    >.content{
        order: 2;
    }
    &.icon-right{
        >.icon{
            order: 2;
            margin: 0 0 0 0.3em;
        }
        >.content{
            order: 1;
        }
    }
}
</style>