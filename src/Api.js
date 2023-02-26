import axios from "axios"
const URL = "https://api.openweathermap.org/data/2.5/weather?"
const URL3 = "https://api.openweathermap.org/data/3.0/onecall?"
const geoURL = "https://api.openweathermap.org/geo/1.0/direct?q="
const API = "c490ee1413f2c9b4d997e52964d8bb8d"

export const fetchWeather = async (city) => {
   try {
      const { data } = await axios.get(`${URL}lat=${city.lat}&lon=${city.lon}&units=metric&appid=${API}`)
      return { data }
   } catch (error) {
      alert("Something Went Wrong")
   }
}
export const geoLocation = async (query) => {
   try {
      const { data } = await axios.get(`${geoURL}${query}&limit=5&appid=${API}`)
      console.log(`data:`, data)
      return { data }
   } catch (error) {
      console.log(error)
      alert("Something Went Wrong")
   }
}