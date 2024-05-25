import { useContext } from "react"
import {AuthContext} from "../Context/AuthContext.jsx"
import {Navigate} from "react-router-dom"
export function PrivateRoute({children}){
    let {isAuth}=useContext(AuthContext)
    if(!isAuth){
        return <Navigate to="/login"/>
    }
    return children;
}