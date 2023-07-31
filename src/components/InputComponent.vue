<template>
    <div class="input-container">
        <input :type="type" :placeholder="placeholder" :value="value" @input="updateValue">
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";

export default defineComponent({
    props: {
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
    },

    setup(props, { emit }) {
        const { value } = toRefs(props);

        const inputValue = ref<String>(value.value);

        const updateValue = (event: any) => {
            inputValue.value = event.target.value;
            emit('update:value', event.target.value);
        };

        return {
            inputValue,
            updateValue,
        };
    },


})


</script>

  
<style scoped>
.input-container {
    position: relative;
    width: 100%;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
}

input:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>