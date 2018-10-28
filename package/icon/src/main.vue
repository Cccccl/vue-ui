<template>
    <svg class="ccc1l-icon" v-if="name">
        <use :xlink:href=`#c-${name}`></use>
    </svg>
</template>
<script>
export default {
    name: 'ccc1l-icon',
    props: ['name']
}
</script>
<style lang="scss">
    .ccc1l-icon {
        width: 1em;
        height: 1em;
    }
</style>