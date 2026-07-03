import Navbar from "./Navbar"

const Dashboard = ()=>{
    return(
        <>
        <Navbar/>
        
        <div className="container mt-4">
            <h1>Dashboard</h1>
            <div className="row">

                <div className="col-md-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5>Total Products</h5>
                            <h2>52</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Dashboard