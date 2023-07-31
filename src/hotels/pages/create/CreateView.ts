import { useHotelsStore } from '@/hotels/composable/useHotelsStore'
import { defineComponent, ref } from 'vue'

import TableComponent from '@/components/TableComponent.vue'
import RowComponent from '@/components/RowComponent.vue'
import ColumnComponent from '@/components/ColumnComponent.vue'
import type { Hotel } from '@/interfaces/index'

export default defineComponent({
  name: 'CreateView',
  components: {
    TableComponent,
    RowComponent,
    ColumnComponent
  },
  setup() {
    const { changeRoute, hotels, addHotel } = useHotelsStore()

    const tableData = hotels.value

    const formHotel = ref<Hotel>({
      name: '',
      star: 0,
      prices: [
        {
          type_client: 'Regular',
          type_day: 'Weekday',
          price: 0
        },
        {
          type_client: 'Reward',
          type_day: 'Weekday',
          price: 0
        },
        {
          type_client: 'Regular',
          type_day: 'Weekend',
          price: 0
        },
        {
          type_client: 'Reward',
          type_day: 'Weekend',
          price: 0
        }
      ]
    })

    const add = () => {
      addHotel(formHotel.value)
    }

    return {
      formHotel,
      add,
      changeRoute,
      hotels,
      tableColumns: [
        { key: 'name', label: 'Nombre' },
        { key: 'star', label: 'Estrellas' }
        // Agrega más columnas si es necesario
      ],
      tableData
    }
  }
})
