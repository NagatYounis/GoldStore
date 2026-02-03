import axios from "axios"
import { setInterceptores } from "./interceptor";

const api = axios.create({
 baseURL :"https://dummyjson.com",
})
setInterceptores(api)
export default api