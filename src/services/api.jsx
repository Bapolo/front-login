import axios from "axios"

const api = axios.create({
    // baseURL: "https://myfriends-production-e888.up.railway.app"
    baseURL: "http://localhost:3000"
})

export default api