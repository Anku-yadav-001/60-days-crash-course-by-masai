import { createContext, useState } from "react"
export const AuthContext=createContext()
export function AuthContextProvider({children}){
    let [isAuth,setIsauth]=useState(false)
    let [token,setToken]=useState(null)

    function logout(){
        setIsauth(false)
        setToken(null)
    }
    return <>
      <AuthContext.Provider value={{isAuth,setIsauth,token,setToken,logout}}>
         {children}
      </AuthContext.Provider>
    </>
}