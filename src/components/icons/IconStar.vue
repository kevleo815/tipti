<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="star-icon" :class="{ 'active': isActive }"
        @click="toggleStar">
        <path d="M12 2L9 8H3l5 4.5L5 19l7-5 7 5-2.5-6.5L21 8h-6l-3-6z" />
    </svg>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref(true);

const toggleStar = () => {
    isActive.value = !isActive.value;
};
</script>
  
<style scoped>
.star-icon {
    width: 24px;
    height: 24px;
    fill: #ccc;
    /* Color de estrella no activa, puedes cambiarlo según tus necesidades */
    cursor: pointer;
}

.active {
    fill: #ffc107;
    /* Color de estrella activa, puedes cambiarlo según tus necesidades */
}
</style>