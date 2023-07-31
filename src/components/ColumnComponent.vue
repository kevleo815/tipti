<template>
    <div :class="`column col-${size}`">
        <slot></slot>
    </div>
</template>
  
<script setup lang="ts">

const props = defineProps({
    size: {
        type: String,
        default: 'md',
    },

});


</script>
  
<style>
/* Define los tamaños de las columnas aquí según tus necesidades */
.column {
    padding: 10px;
    /* Puedes ajustar el relleno según tus necesidades */
}

.col-sm {
    flex-basis: 100%;
}

.col-md {
    flex-basis: 50%;
}

.col-lg {
    flex-basis: 33.33%;
}
</style>