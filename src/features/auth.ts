import { useAuth } from "../context/auth";
import { useMutation } from "@tanstack/react-query";
import api from "../api";
import AuthServices from "../api/auth"
export function useLoginMutation(){
    const mutation = useMutation({
        mutationFn:  AuthServices.lgoin
    })
    return mutation
}

export function useInterceptorToken(){
const context = useAuth();
api.interceptors.request.use((config) =>{
    const token = context?.token
    if(token){
        config.headers.Authorization =`Bearer ${token}`

    }
    return config

})

}