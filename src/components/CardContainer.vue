<template>
    <div :class="cardClasses">
        <h3 v-if="title" class="card-title">{{ title }}</h3>
        <slot></slot>
    </div>
</template>
  
<script setup lang="ts">
import { computed } from 'vue';

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

const cardClasses = computed(() => ({
    card: true,
    'card-borderless': props.borderless,
}));
</script>
  
<style>
/* Estilos CSS para la tarjeta */
.card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

.card-title {
    margin-bottom: 3%;
    font-size: 1.5rem;
    font-weight: bold;
}

/* Estilos para desaparecer los bordes */
.card-borderless {
    border: none;
    box-shadow: none;
}
</style>