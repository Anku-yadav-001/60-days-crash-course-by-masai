import { createContext, useState } from "react"

export let AuthContext=createContext()
function AuthContextProvider({children}){
      let [token,setToken]=useState(null)
      let [isAuth,setIsauth]=useState(false)
    return <>
       <AuthContext.Provider value={{setToken,isAuth,setIsauth}}>
          {children}
       </AuthContext.Provider>
    </>
}
export default AuthContextProvider