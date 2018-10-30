<template>
    <svg class="ccc1l-icon" v-if="name" :class="loadingClass">
        <use :xlink:href=`#c-${name}`></use>
    </svg>
</template>
<script>
export default {
    name: 'ccc1l-icon',
    props: ['name'],
    computed: {
        loadingClass: function () {
            return this.name === 'loading' ? 'loading' : ''
        }
    }
}
</script>
<style lang="scss">
    .ccc1l-icon {
        width: 1em;
        height: 1em;
        fill: white;
    }
    .loading{
        animation: spin 2s infinite linear;
    }
    @keyframes spin {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
</style>