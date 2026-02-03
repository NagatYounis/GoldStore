
import type { AxiosInstance } from "axios"
export function setInterceptores(api : AxiosInstance){
    api.interceptors.response.use(
(res)=>res,
(error)=>{
        console.log("API error status:", error.response?.status);
    // if(error.respose.status === 403)
    //     console.log("error")
    return Promise.reject("request has faild")
}


    )
}