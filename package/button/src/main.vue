<template>
    <button class="ccc1l-button">
        <svg class="icon" v-if="icon">
            <use :xlink:href=`#c-${icon}`></use>
        </svg>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'ccc1l-button',
    props: {
        icon: {
            type: String
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
}
</style>