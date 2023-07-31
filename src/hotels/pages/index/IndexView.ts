import { defineComponent, ref, onMounted } from 'vue'

import { useHotelsStore } from '@/hotels/composable/useHotelsStore'

import CardHotel from '@/hotels/components/CardHotel.vue'
import RowComponent from '@/components/RowComponent.vue'
import ColumnComponent from '@/components/ColumnComponent.vue'
import IconStar from '@/components/icons/IconStar.vue'
import TagComponent from '@/components/TagComponent.vue'
import SelectComponent from '@/components/SelectComponent.vue'
import DateComponent from '@/components/DateComponent.vue'
import IconClose from '@/components/icons/IconClose.vue'

import type { ResultHotel, SelectOption } from '@/interfaces'

export default defineComponent({
  name: 'IndexView',
  components: {
    RowComponent,
    ColumnComponent,
    CardHotel,
    IconStar,
    TagComponent,
    SelectComponent,
    DateComponent,
    IconClose
  },
  setup() {
    /* -----utilizamoslasfunciones delstore---- */
    const { hotels, getCheapestHotel, changeRoute } = useHotelsStore()

    /* ----declaramos elreceptop de la fecha y el array donde se alamacenan  */
    const dateSelected = ref<string>('2009-02-01')
    const arrayDates = ref<string[]>([])

    /* ----declaramos las opciones del select---- */
    const clientSelected = ref<string>('Regular')
    const optionClient = ref<SelectOption[]>([
      { label: 'Regular', value: 'Regular' },
      { label: 'Reward', value: 'Reward' }
    ])

    /* ------declaramos la constante del hotel mas barato ----- */
    const resultHotel = ref<ResultHotel | null>(null)

    const handleSelected = (date: string) => {
      dateSelected.value = date
    }

    const handleSelectClient = (event: any) => {
      clientSelected.value = event.target.value
      /* -----cada vez q cambie elcliente se debe reiniciar el array de las fechas  */

      arrayDates.value = []
      resultHotel.value = null
    }

    const addDate = () => {
      /* -------buscar ;lafecha actual en el array si no existe ene l array lo agregamos perosi alfecha ya existeno lodejamos agregar  */

      const findDate = arrayDates.value.find((date) => date === dateSelected.value)

      if (findDate) {
        alert('La fecha ya esta agregada')
      } else {
        resultHotel.value = null
        arrayDates.value.push(dateSelected.value)

        /* -----cada vez q se agregar una fecha se debe calcula el hotel mas barato  */
        resultHotel.value = getCheapestHotel(clientSelected.value, arrayDates.value)
      }
    }

    const removeDate = (index: number) => {
      arrayDates.value.splice(index, 1)

      if (arrayDates.value.length === 0) {
        resultHotel.value = null
      } else {
        /* -----cada vez q se elimina una fecha se debe calcula el hotel mas barato  */

        resultHotel.value = getCheapestHotel(clientSelected.value, arrayDates.value)
      }
    }

    /* --------eventos------- */

    onMounted(() => {
      /* ------cada vez q se carga la pagina se elimina el resultado anterior----- */
      resultHotel.value = null
    })

    return {
      clientSelected,
      dateSelected,
      arrayDates,
      hotels,
      optionClient,
      resultHotel,
      addDate,
      handleSelectClient,
      handleSelected,
      removeDate,
      changeRoute
    }
  }
})
