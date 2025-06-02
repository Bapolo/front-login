import axios from "axios"

const api = axios.create({
    baseURL: "https://myfriends-production-e888.up.railway.app"
})

export default api