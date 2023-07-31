
<template>
    <CardContainer :title="title" :borderless="borderless" class="hotel">
        <slot></slot>
    </CardContainer>
</template>
<script setup lang="ts">
import CardContainer from '@/components/CardContainer.vue';
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    borderless: {
        type: Boolean,
        default: false,
    },
});


</script>
<style scope>
.hotel {

    width: 100%;
    height: 100%;

}
</style>