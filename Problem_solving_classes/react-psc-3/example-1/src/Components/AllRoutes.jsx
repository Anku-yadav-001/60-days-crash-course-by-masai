import {Link, Route, Routes} from "react-router-dom"
import Home from "../Pages/Home.jsx"
import About from "../Pages/About.jsx"
import Contact from "../Pages/Contact.jsx"
import Fee from "../Pages/Fee.jsx"
import Learn from "../Pages/Learn.jsx"
import Users from "../Pages/Users.jsx"
import Courses from "../Pages/Courses.jsx"
import Login from "../Pages/Login.jsx"
import SignleUser from "../Pages/SigngleUser.jsx"
function AllRoutes(){

    let links=[
        {
            to:"/",
            label:"Home"
        },
        {
            to:"/about",
            label:"About"
        },
        {
            to:"/contact",
            label:"Contact"
        },
        {
            to:"/courses",
            label:"Courses"
        },
        {
            to:"/fees",
            label:"Fees"
        },
        {
            to:"/learn",
            label:"Learn"
        },
        {
            to:"/users",
            label:"Users"
        },
        {
            to:"/login",
            label:"Login"
        }
    ]

    return <>
        <div className="navbar">
            {
                links.map((ele)=>(
                    <Link to={ele.to} key={ele.to}>{ele.label}</Link>
                ))
            }
        </div>
        <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/courses" element={<Courses/>}/>
                    <Route path="/fees" element={<Fee/>}/>
                    <Route path="/learn" element={<Learn/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/users/:id" element={<SignleUser/>}/>
                </Routes>
        </div>
    </>
}
export default AllRoutes