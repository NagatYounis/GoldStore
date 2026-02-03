 import api from ".";

export  type LoginData ={
    username: string,
    //email: string
    password:string
 }
 export default{
 lgoin : async (data: LoginData) =>{
    const res = await api.post("/auth/login" , data)
    return res.data
 }

 }