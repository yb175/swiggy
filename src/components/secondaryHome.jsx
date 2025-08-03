import Header from "./header.jsx"
import { Outlet } from "react-router" ; 
export default function SecondaryHome(){
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}