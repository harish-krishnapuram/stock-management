import { useState,useEffect } from "react"
import axios from "axios"
import { useAuth } from "../context/Authcontext"
import ProductCard from "./ProductCard"
import Navbar from "./Navbar"
import { FaPlus,FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import Spinner from './Spinner'
import api from "../services/api";
import Back from "./Back"
const Products = ()=>{
    const [data,setProducts] = useState([])
    const [loading,setLoad] = useState(true)
    const [btnvalue,setValue] = useState('Get Low-stock Products')
    const [curUrl,setUrl] = useState('/product/low-stock/')
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
        }).finally(()=>{
            setLoad(false)
        })
        },300)
        
    },[])
    const getLowStock = ()=>{
        setLoad(true)
        api.get(curUrl).then((res)=>{
            console.log(res)
            setProducts(res.data)
            setLoad(false)
            if (curUrl=='/product/products/'){
                setUrl('/product/low-stock/')
                setValue('Get Low-stock Products')
            }else{
                setUrl('/product/products/')
                setValue('Get All Products')
            }
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            setLoad(false)
        })
    }
    const addProduct = ()=>{
        navigate('/addproduct')
    }
    return(
    <>
    {loading && <Spinner/>}
    <Navbar/>
        <Back/>
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
                {btnvalue}
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