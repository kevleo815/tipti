export interface PriceHotel {
  type_client: string
  type_day: string
  price: number
}

export interface Hotel {
  name: string
  star: number
  prices: PriceHotel[]
}

export interface SelectOption {
  label: string
  value: string
}

export interface DateHotel {
  date: string
  isWeekend: boolean
  nameDay: string
}

export interface ResultHotel {
  hotel: Hotel
  dates: DateHotel[]
  total: number
}
