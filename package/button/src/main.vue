<template>
    <button class="ccc1l-button">行动按钮</button>
</template>
<script>
export default {
    name: 'ccc1l-button'
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