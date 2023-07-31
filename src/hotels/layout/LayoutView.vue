<template>
    <div class="container">

        <CardContainer class="card" title="Hotels in Miami" :borderless="true">
            <RouterView />
        </CardContainer>
    </div>
</template>

<script setup lang="ts">
import CardContainer from '@/components/CardContainer.vue';
import { RouterView } from "vue-router";
</script>

<style scope>
/* Estilos CSS para la tarjeta */

.container {
    padding: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* Utilizamos la función linear-gradient() para crear un degradado lineal */
    background-image: linear-gradient(to top left, #0068a8, #00b6a5);

}


.card {
    width: auto;
    height: auto;
    box-shadow: 0 5px 20px rgba(0, 0, 100, 0.2);

}
</style>