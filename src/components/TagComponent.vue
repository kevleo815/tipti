<template>
    <span class="tag" :style="{ backgroundColor: color }">
        <slot></slot>
    </span>
</template>
  
<script  lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        color: {
            type: String,
            default: "#000000",
        },
    },
});


</script>
  
<style scoped>
.tag {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    color: white;
}
</style>