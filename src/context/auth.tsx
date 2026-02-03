import React, { createContext, useContext, useState } from 'react'

type AuthLogin ={
    token :string | null,
login : (token: string)=> void,
logout: ()=>void

}


  const AuthContext  = createContext<AuthLogin | null>(null)

export function AuthProvider({children} : {children :  React.ReactNode}){

    const [token , setToken] = useState<string | null>(localStorage.getItem("token"))


const login=(token: string)=>{
setToken(token);
localStorage.setItem("token" , token)
}
console.log(token)
const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return   <AuthContext.Provider value={{token , login , logout}}>{children}</AuthContext.Provider>

};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};