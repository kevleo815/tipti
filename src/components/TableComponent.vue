<template>
    <table class="custom-table">
        <!-- Cabecera de la tabla -->
        <thead>
            <tr>
                <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
            </tr>
        </thead>

        <!-- Cuerpo de la tabla -->
        <tbody>
            <tr v-for="item in data" :key="item.id">
                <td v-for="column in columns" :key="column.key">{{ item[column.key] }}</td>
            </tr>
        </tbody>
    </table>
</template>
  
<script lang="ts">
export default {
    props: {
        columns: {
            type: Array as () => Array<{ key: string; label: string }>,
            required: true,
        },
        data: {
            type: Array as () => Array<{ [key: string]: string | number }>,
            required: true,
        },
    },
};
</script>
  
<style>
/* Estilos para la tabla */
.custom-table {
    width: 100%;
    border-collapse: collapse;
}

.custom-table th,
.custom-table td {
    padding: 10px;
    border: 1px solid #ccc;
}

.custom-table th {
    background-color: #f2f2f2;
    font-weight: bold;
    text-align: left;
}
</style>