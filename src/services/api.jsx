import axios from "axios"

const api = axios.create({
    baseURL: "https://myfriends.railway.internal"
})

export default api
