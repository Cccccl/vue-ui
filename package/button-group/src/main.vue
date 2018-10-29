<template>
    <div class="ccc1l-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'ccc1lButtonGroup',
    mounted (){
        for (let node of this.$el.children) {
            if (node.nodeName.toLowerCase() !== 'button') {
                console.warn(`ccc1l-button-group的子元素应该是ccc1l-button,但是你写的是${node.nodeName.toLowerCase()}`)
            }
        }
    }
}
</script>
<style lang="scss">
    .ccc1l-button-group{
        display: inline-flex;
        vertical-align: top;
        >.ccc1l-button{
            border-radius: 0;
            &:not(:first-child){
                border-left: none;
            }
            &:not(:last-child){
                border-right: none;
            }
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
        }
    }
</style>