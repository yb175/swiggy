import Header from "./header.jsx"
import { Outlet } from "react-router" ; 
export default function SecondaryHome(){
    return(
        <div>
            <Header/>
            <div className="mt-20">
                <Outlet />
            </div>
        </div>
    )
}