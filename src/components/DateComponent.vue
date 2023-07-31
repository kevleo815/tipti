<template>
    <div class="date-picker">
        <!-- Select para los días del mes -->
        <select v-model="selectedDay" @change="emitDateSelected">
            <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
        </select>

        <!-- Select para los meses del año -->
        <select v-model="selectedMonth" @change="emitDateSelected">
            <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
        </select>

        <!-- Select para los años del 2009 hasta 2023 -->
        <select v-model="selectedYear" @change="emitDateSelected">
            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>
    </div>
</template>
  
<script  lang="ts">
import { computed, defineComponent, ref, toRefs } from "vue";


export default defineComponent({

    props: {
        initialValue: {
            type: Date,
            default: null
        }
    },


    name: 'DateComponent',
    setup(props, { emit }) {

        const { initialValue } = toRefs(props);

        /* -------valores pordefectode los dias meses y a;os  */
        const selectedDay = ref(initialValue?.value ? initialValue.value.getDate() : 1);
        const selectedMonth = ref(initialValue?.value ? initialValue.value.getMonth() + 1 : 1);
        const selectedYear = ref(initialValue?.value ? initialValue.value.getFullYear() : 2009);



        // Generar días del mes
        const days = computed(() => {
            const daysInMonth = new Date(selectedYear.value, selectedMonth.value, 0).getDate();
            return Array.from({ length: daysInMonth }, (_, i) => i + 1);
        });

        // Meses del año
        const months = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];

        // Años del 2009 hasta 2023
        const years = Array.from({ length: 15 }, (_, i) => 2009 + i);

        const emitDateSelected = () => {
            const date = new Date(selectedYear.value, selectedMonth.value - 1, selectedDay.value);
            emit('date-selected', date.toISOString().slice(0, 10)); // Emite la fecha en formato YYYY-MM-DD
        };

        return {
            selectedDay,
            selectedMonth,
            selectedYear,
            days,
            months,
            years,
            emitDateSelected
        }
    }

});


/* import { ref, computed, toRefs } from 'vue';

// Props para recibir la fecha inicial (si es necesario)
const { initialValue } = toRefs(defineProps(['initialValue']));


// Generar días del mes
const days = computed(() => {
    const daysInMonth = new Date(selectedYear.value, selectedMonth.value, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
});

// Meses del año
const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

// Años del 2009 hasta 2023
const years = Array.from({ length: 15 }, (_, i) => 2009 + i);

const selectedDay = ref(initialValue?.value ? initialValue.value.getDate() : 1);
const selectedMonth = ref(initialValue?.value ? initialValue.value.getMonth() + 1 : 1);
const selectedYear = ref(initialValue?.value ? initialValue.value.getFullYear() : 2009);

// Declarar los eventos personalizados
const emitDate = defineEmits(['date-selected']);

// Emitir el evento con la fecha seleccionada
const emitDateSelected = () => {
    const date = new Date(selectedYear.value, selectedMonth.value - 1, selectedDay.value);
    emitDate('date-selected', date.toISOString().slice(0, 10)); // Emite la fecha en formato YYYY-MM-DD
};
 */
</script>
  
<style>
/* Estilos CSS para el componente DatePicker */
.date-picker {
    display: flex;
    gap: 8px;
}

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
    width: 100%;

}

select:focus {
    border-color: #007bff;
}



/* Estilos específicos para los selects si es necesario */
</style>