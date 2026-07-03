import { useState,useEffect } from "react"
import axios from "axios"
import { useAuth } from "../context/Authcontext"
import ProductCard from "./ProductCard"
import Navbar from "./Navbar"
import { FaPlus,FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import Spinner from './Spinner'
import api from "../services/api";
const Products = ()=>{
    const [data,setProducts] = useState([])
    const [loading,setLoad] = useState(true)
    const {token} = useAuth()
    let navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            setLoad(true)
        let config = {"headers":{
            "Authorization":"Bearer "+ token
        }}
        api.get('/product/products/').then((res)=>{
            console.log(res)
            setProducts(res.data)
            setLoad(false)
        }).catch((err)=>{
            console.log(err)
        })
        },1000)
        
    },[])
    const getLowStock = ()=>{
        setLoad(true)
        let config = {"headers":{
            "Authorization":"Bearer "+ token
        }}
        axios.get('http://127.0.0.1:8000/api/product/low-stock/',config).then((res)=>{
            console.log(res)
            setProducts(res.data)
            setLoad(false)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const addProduct = ()=>{
        navigate('/addproduct')
    }
    return(
    <>
    {loading && <Spinner/>}
    <Navbar/>
        <div className="container mt-4">
            <div className="d-flex justify-content-between mb-3">
                <h3>List of Products</h3>
                <button
                    className="btn btn-primary"
                    onClick={addProduct}
                >
                   <FaPlus className="me-2" />
                   ADD Product
                </button>
            </div>
            <div className="m-3">
            <button className="btn btn-outline-primary" onClick={getLowStock}>
                <FaFilter className="me-2" />
                Get Low-stock Products
            </button>
            </div>
            
            <div className="row">
                {
                    data.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Products