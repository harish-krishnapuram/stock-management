import { useEffect,useState } from "react"
import Navbar from "./Navbar"
import { useAuth } from "../context/Authcontext"
import axios from 'axios'
import Spinner from "./Spinner"
import api from "../services/api";
import Back from "./Back"
const Dashboard = ()=>{
    const [data,setData] = useState([])
    const [loading,setLoad] = useState(true)
    const {token} = useAuth()
    useEffect(()=>{
        setTimeout(()=>{
            setLoad(true)
            let config = {"headers":{
                "Authorization":"Bearer "+ token
            }}
            api.get('/product/dashboard/').then((res)=>{
                console.log(res)
                setData(res.data)
            }).then((err)=>{
                console.log(err)
            }).finally(()=>{
                setLoad(false)
            })
        },1000)
        
    },[])
    return(
        <>
        {loading && <Spinner/>}
        <Navbar/>
        <Back/>
        <div className="container mt-4">
            <h1>Dashboard</h1>
            <div className="row">
            {data&&
            <>
                <div className="col-md-3 mb-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5>Total Products</h5>
                            <h2>{data.total_products}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5>Total Stock</h5>
                            <h2>{data.total_stock}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5>Low stock products</h5>
                            <h2>{data.low_stock_products}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5>Total inventory cost</h5>
                            <h2>{data.total_inventory_cost}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5>Total Inventory selling</h5>
                            <h2>{data.total_inventory_selling_value}</h2>
                        </div>
                    </div>
                </div>
            </>
            }
            </div>
        </div>
        </>
    )
}

export default Dashboard