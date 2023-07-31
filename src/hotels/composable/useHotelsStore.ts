import { computed } from 'vue'
import { hotelStore } from '../store/hotelStore'
import type { Hotel, ResultHotel } from '@/interfaces'
import { useRouter } from 'vue-router'

export const useHotelsStore = () => {
  const hotel_store = hotelStore()

  const router = useRouter()
  const changeRoute = (name: string) => {
    // Cambia la ruta a '/about' usando el nombre de la ruta
    router.push({ name: name })
  }

  return {
    /* -----compposable ----*/
    changeRoute,

    /* ----state----- */
    hotelCurrent: computed(() => hotel_store.hotelCurrent),
    hotels: computed(() => hotel_store.hotels),

    /* ------getters*------ */
    getCheapestHotel: (clientSelected: string, arrayDates: string[]): ResultHotel => {
      return hotel_store.getCheapestHotel(clientSelected, arrayDates)
    },

    /* -----mutations---- */
    setHotel: (hotel: Hotel) => {
      hotel_store.setHotel(hotel)
    },

    addHotel: (hotel: Hotel) => {
      hotel_store.addHotel(hotel)
    }
  }
}
