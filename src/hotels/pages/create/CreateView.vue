<script src="./CreateView.ts" lang="ts"/>

<template>
    <div>

        <RowComponent>
            <ColumnComponent size="lg">
                <button @click="changeRoute('home')" class="styled-button" style="width: 100%;" type="button">Menu</button>
            </ColumnComponent>
            <ColumnComponent size="lg">
            </ColumnComponent>
            <ColumnComponent size="lg">
                <button @click="changeRoute('reservation')" class="styled-button" style="width: 100%;"
                    type="button">Reservation</button>
            </ColumnComponent>

        </RowComponent>



        <h2>New Hotel</h2>

        <!-- ---formulario para agregar un nuevo hotel  -->

        <RowComponent>
            <ColumnComponent size="lg">
                <label>Name</label>
                <input v-model="formHotel.name" placeholder="Name" />
            </ColumnComponent>
            <ColumnComponent size="lg">
                <label>Star</label>
                <input type="number" v-model="formHotel.star" placeholder="Stars" />
            </ColumnComponent>

        </RowComponent>

        <RowComponent>
            <ColumnComponent size="sm">
                <div v-for="(price, index) in formHotel.prices" :key="index" style="margin-top:2% ;">
                    <label> Client {{ price.type_client }} on {{ price.type_day }}</label>
                    <input type="number" step="0.01" style="margin-left: 3%;" v-model="formHotel.prices[index].price"
                        placeholder="Price" />
                </div>
            </ColumnComponent>
        </RowComponent>

        <RowComponent>
            <ColumnComponent size="sm">
                <button @click="add" class="styled-button" style="width: 100%;" type="button">Add Hotel</button>
            </ColumnComponent>

        </RowComponent>


        <TableComponent style="margin-top: 3%;" :columns="tableColumns" :data="tableData" />



    </div>
</template>
<style scoped>
input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease;
}

/* Efecto al enfocar el input */
input:focus {
    border-color: #80bdff;
    outline: none;
    /* Deshabilitar el borde al enfocar (opcional) */
}

.styled-button {
    /* Estilo del botón */
    width: 100%;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    /* Cambiar el color del botón */
    background-color: #0aaea9;
    color: #FFFFFF;
}

/* Cambiar el color del botón al pasar el mouse sobre él */
.styled-button:hover {
    background-color: #0056b3;
}
</style> 
