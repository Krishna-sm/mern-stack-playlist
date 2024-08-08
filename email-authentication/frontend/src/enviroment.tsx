import axios from "axios";

export const AxiosClient = axios.create({
    baseURL:'http://localhost:4000/api/v1/auth'
})