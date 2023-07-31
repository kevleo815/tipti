<template>
    <div class="select-container">
        <select :placeholder="placeholder" :value="selectedOption" @input="updateValue">
            <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>
    </div>
</template>
  
<script  lang="ts">
import { defineComponent, ref, toRefs } from "vue";


export default defineComponent({
    name: 'SelectComponent',
    props: {
        selected: {
            type: String,
            default: '',
        },
        options: {
            type: Array as () => Array<{ label: string; value: string }>,
            default: () => [],
        },
        placeholder: {
            type: String,
            default: '',
        },
    },

    setup(props, { emit }) {
        const { selected } = toRefs(props);

        const selectedOption = ref<string>(selected.value);

        const updateValue = (event: any) => {
            selectedOption.value = event.target.value;
            emit('update:selected', selectedOption);
        };


        return {
            selectedOption,
            updateValue

        };
    },
});

/* 
import { defineProps, ref } from 'vue';

const { selected, options } = defineProps(['selected', 'options']);
const selectedOption = ref(selected); */
</script>
  
<style scoped>
.select-container {
    display: inline-block;
    position: relative;
}

select {
    appearance: none;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    width: 25vw;

}

select:focus {
    border-color: #007bff;
}
</style>