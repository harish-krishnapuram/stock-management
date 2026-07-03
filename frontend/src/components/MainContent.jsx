import { Outlet } from "react-router-dom"

const MainContent = ()=>{
    return(
        <div className="main">
           <Outlet/>
        </div>
    )
}

export default MainContent