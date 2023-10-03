import { FilterProps } from '@/types'

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, fuel, limit } = filters

    const url = `${process.env.NEXT_PUBLIC_API_URL}/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY ?? '',
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST ?? '',
        },
    }

    try {
        const response = await fetch(url, options)
        return response.json()
    } catch (error) {
        console.error(error)
        return null
    }
}

export function calculateCarRent(city_mpg: number, year: number) {
    const basePricePerDay = 50 // Base rental price per day in dollars
    const mileageFactor = 0.1 // Additional rate per mile driven
    const ageFactor = 0.05 // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor
    const ageRate = (new Date().getFullYear() - year) * ageFactor

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

    return rentalRatePerDay.toFixed(0)
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(type, value)

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    return newPathName
}
