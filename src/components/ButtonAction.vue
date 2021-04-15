<template>
  <button :class="'form-button '+background" @click="clicked($event)"><i :class="'fa fa-'+icon"></i> {{name}}</button>
</template>

<script>
export default {
    name: 'ButtonAction',
    props: {
        name: {
            type: String,
            required: true,
            default: 'Button'
        },
        icon: {
            type: String
        },
        background: {
            type: String
        }
    },
    methods: {
        clicked(event) {
            this.$emit('clicked',event);
        }
    }
}
</script>

<style>

</style>