<script src="./IndexView.ts" lang="ts"/>
<template>
    <RowComponent>
        <ColumnComponent size="lg">
            <button @click="changeRoute('home')" class="styled-button" type="button">Menu</button>
        </ColumnComponent>
        <ColumnComponent size="lg"></ColumnComponent>
        <ColumnComponent size="lg">
            <button @click="changeRoute('create-hotel');" class="styled-button" type="button">New +</button>
        </ColumnComponent>
    </RowComponent>
    <!-- -------seccion de entrada paralos datos ------ -->
    <RowComponent style="margin-top: 5%;">
        <ColumnComponent size="lg">
            <label>Select Client</label><br>
            <SelectComponent :selected="clientSelected" :options="optionClient" @input="handleSelectClient" />
        </ColumnComponent>
        <ColumnComponent size="lg">
            <label> Select Dates</label>
            <DateComponent @date-selected="handleSelected" />
            <button style="margin-left: 40%; margin-top: 5%;" class="styled-button" type="button" @click="addDate">
                Add</button>

        </ColumnComponent>
        <ColumnComponent size="lg">
            <label>Dates</label>
            <h3 v-if="arrayDates.length === 0">Empty Dates</h3>
            <RowComponent>
                <div v-for="(date, index) in arrayDates" :key="index">
                    <ColumnComponent size="lg">
                        <TagComponent class="tag" color="#00931F">
                            {{ date }}
                            <IconClose style="color: white; width: 15px ;" @click="removeDate(index)" />
                        </TagComponent>
                    </ColumnComponent>
                </div>
            </RowComponent>
        </ColumnComponent>
    </RowComponent>

    <!-- -----seccion donde se presenta el resultado del hotel mas barato  -->



    <RowComponent v-if="resultHotel">
        <ColumnComponent style="display: flex; justify-content: center;" size="sm">
            <CardHotel class="winner" :title="resultHotel.hotel.name">
                <IconStar v-for="index in resultHotel.hotel.star" :key="index" />
                <RowComponent>
                    <ColumnComponent size="lg">
                        <h1>{{ clientSelected }} Client </h1>
                        <h1>Total $ {{ resultHotel.total }}</h1>
                    </ColumnComponent>
                </RowComponent>

                <h2 style="margin-top: 3%;">Dates</h2>
                <RowComponent style="margin-top: 1%;">
                    <ColumnComponent v-for="(date, index) in resultHotel.dates" :key="index" size="lg">
                        <TagComponent color="#00931F">
                            {{ date.nameDay }} - {{ date.date }}
                        </TagComponent>
                    </ColumnComponent>
                </RowComponent>

            </CardHotel>

        </ColumnComponent>
    </RowComponent>



    <!-- ---------Lista de todos los hoteles --------  -->
    <h2 style="margin-top: 5%;">List Hotels</h2>
    <RowComponent style="margin-top: 2%;">
        <ColumnComponent v-for="(hotel, index) in hotels" :key="index" size="lg">
            <CardHotel :title="hotel.name">
                <IconStar v-for="index in hotel.star" :key="index" />
                <RowComponent>
                    <div v-for="(price, index) in hotel.prices" :key="index">
                        <ColumnComponent>
                            <TagComponent v-if="price.type_client === 'Regular'" color="#0467A4">
                                Client {{ price.type_client }} : {{ `${price.type_day} $ ${price.price} ` }}
                            </TagComponent>
                            <TagComponent v-if="price.type_client === 'Reward'" color="#D07E00">
                                Client {{ price.type_client }} : {{ price.type_day }} $ {{ price.price }}
                            </TagComponent>
                        </ColumnComponent>
                    </div>
                </RowComponent>
            </CardHotel>
        </ColumnComponent>

    </RowComponent>
</template>
<style scope>
.winner {
    margin-top: 5%;
    box-shadow: 0 0 20px rgb(252, 211, 73);
    padding: 0.5%;
    width: 60%;

}

.styled-button {
    /* Estilo del botón */
    width: 25%;
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

.tag {
    /* Estilos visuales del componente tag */
    padding: 10px;
    border: 1px solid #ccc;
    display: inline-block;
}

.tag:hover {
    /* Cambiar el cursor a una mano cuando el mouse pase por encima */
    cursor: pointer;
}
</style>




