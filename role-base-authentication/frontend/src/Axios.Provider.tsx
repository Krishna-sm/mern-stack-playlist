import axios from "axios";

export const AxiosReq = axios.create({
    baseURL:'http://localhost:4000/api/v1/auth'
})