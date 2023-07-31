

<template>
  <main class="fondo">
    <div class="container">

      <CardContainer class="card space-center" title="Menu" :borderless="false">

        <RowComponent>
          <ColumnComponent size="sm">
            <button @click="cambiarRuta('create-hotel')" type="button" class="styled-button"> Add Hotels </button>
          </ColumnComponent>
          <ColumnComponent size="sm">
            <button @click="cambiarRuta('reservation')" type="button" class="styled-button"> Reservations </button>
          </ColumnComponent>
        </RowComponent>

      </CardContainer>
    </div>
  </main>
</template>

<script lang="ts">
import CardContainer from '@/components/CardContainer.vue';
import RowComponent from '@/components/RowComponent.vue';
import ColumnComponent from '@/components/ColumnComponent.vue'
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    CardContainer,
    RowComponent,
    ColumnComponent
  },
  setup() {
    const router = useRouter();
    const cambiarRuta = (name: string) => {
      // Cambia la ruta a '/about' usando el nombre de la ruta
      router.push({ name: name });
    };
    return {
      cambiarRuta
    };
  },
});




</script>




<style scoped>
.fondo {

  height: 100vh;
  width: 100%;

  /* Utilizamos la función linear-gradient() para crear un degradado lineal */
  background-image: linear-gradient(to top left, #0068a8, #00b6a5);
  /* El primer color (#00FF00) representa el verde y el segundo color (#0000FF) representa el azul.
  Puedes cambiar estos valores por cualquier otro color en formato hexadecimal o con nombres de colores en inglés. */
  padding: 20px;
  /* Solo para darle un poco de espacio al contenido del div */
  color: rgb(186, 186, 186);
  /* Ajustamos el color del texto para que sea legible sobre el degradado */

  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

}

.space-center {

  /* Tamaño y estilo del div */
  width: 300px;
  height: 200px;
  background-color: white;

  /* Centrar el contenido horizontalmente */

  /* Centrar el contenido verticalmente */
  align-items: center;

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

