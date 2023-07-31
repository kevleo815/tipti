import type { DateHotel, Hotel, ResultHotel } from '@/interfaces'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { parseISO, format } from 'date-fns'
import { enUS } from 'date-fns/locale'

export const hotelStore = defineStore('hotelStore', () => {
  /* ----state------- */

  const hotelCurrent = ref<Hotel | null>(null)
  const hotels = ref<Hotel[]>([
    {
      name: 'Lakewood',
      star: 3,
      prices: [
        {
          type_client: 'Regular',
          type_day: 'Weekday',
          price: 110
        },
        {
          type_client: 'Reward',
          type_day: 'Weekday',
          price: 80
        },
        {
          type_client: 'Regular',
          type_day: 'Weekend',
          price: 90
        },
        {
          type_client: 'Reward',
          type_day: 'Weekend',
          price: 80
        }
      ]
    },

    {
      name: 'Bridgewood',
      star: 4,
      prices: [
        {
          type_client: 'Regular',
          type_day: 'Weekday',
          price: 160
        },
        {
          type_client: 'Reward',
          type_day: 'Weekday',
          price: 110
        },
        {
          type_client: 'Regular',
          type_day: 'Weekend',
          price: 60
        },
        {
          type_client: 'Reward',
          type_day: 'Weekend',
          price: 50
        }
      ]
    },

    {
      name: 'Ridgewood',
      star: 5,
      prices: [
        {
          type_client: 'Regular',
          type_day: 'Weekday',
          price: 220
        },
        {
          type_client: 'Reward',
          type_day: 'Weekday',
          price: 100
        },
        {
          type_client: 'Regular',
          type_day: 'Weekend',
          price: 150
        },
        {
          type_client: 'Reward',
          type_day: 'Weekend',
          price: 40
        }
      ]
    }
  ])

  /* -----getters------- */
  const getCheapestHotel = (typeClient: string, arrayDates: string[]): ResultHotel => {
    /* ------vamos recopilar si losdias son ewntre semana o fin de semana  */
    const daysOfWeek = ref<DateHotel[]>([])

    arrayDates.forEach((date) => {
      console.log(date)

      // Parseamos la fecha en formato ISO para asegurar la interpretación correcta sin ajustes por la zona horaria local
      const parsedDate = parseISO(date)

      // Obtenemos el día de la semana en el formato deseado (por ejemplo, 'Domingo', 'Lunes', etc.)
      const dayOfWeek = format(parsedDate, 'eeee', { locale: enUS })

      // Verificamos si es fin de semana (sábado o domingo)
      const isWeekend = parsedDate.getDay() === 6 || parsedDate.getDay() === 0

      daysOfWeek.value.push({ date, isWeekend: isWeekend, nameDay: dayOfWeek })
    })

    /* ----vamos a filtrar el hotel mas baratos segun el dia si es fin de semana o no y segun el tipo de cliente y vamos a sumar los valores del hotel segun cada fecha y ordenar por el mas barato al mas caro */

    const cheapestHotels = hotels.value
      .map((hotel) => {
        const total = daysOfWeek.value.reduce((total, day) => {
          const price = hotel.prices.find(
            (price) =>
              price.type_client === typeClient &&
              price.type_day === (day.isWeekend ? 'Weekend' : 'Weekday')
          )
          return total + (price ? price.price : 0)
        }, 0)

        return { ...hotel, total }
      })
      .sort((a, b) => a.total - b.total)

    /* -------- filtrar todos los hoteles que tengan el mismo total    ------ */

    const cheapestHotels2 = cheapestHotels.filter(
      (hotel) => hotel.total === cheapestHotels[0].total
    )

    /* obtener el hotel que mas estrellas tenga de  cheapestHotels2 */

    const result = cheapestHotels2.sort((a, b) => b.star - a.star)

    /* ------ ahora devolvemos el primerhotal de  cheapestHotels2 y las fechas de daysOfWeek y el total del costo */

    return {
      hotel: result[0],
      dates: daysOfWeek.value,
      total: cheapestHotels2[0].total
    }
  }

  /* -------mutations----------- */

  const addHotel = (hotel: Hotel) => {
    hotels.value.push(hotel)
  }

  const setHotel = (hotel: Hotel) => {
    hotelCurrent.value = hotel
  }

  return {
    hotelCurrent,
    hotels,

    /* ------getters------ */
    getCheapestHotel,

    /* mutations */
    setHotel,
    addHotel
  }
})
