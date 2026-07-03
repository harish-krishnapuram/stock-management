import { useState,useEffect } from "react"
import axios from "axios"
import { useAuth } from "../context/Authcontext"
import ProductCard from "./ProductCard"
import Navbar from "./Navbar"
const Products = ()=>{
    const [data,setProducts] = useState([])
    const {token} = useAuth()
    useEffect(()=>{
        let config = {"headers":{
            "Authorization":"Bearer "+ token
        }}
        axios.get('http://127.0.0.1:8000/api/product/products/',config).then((res)=>{
            console.log(res)
            setProducts(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    },[data])
    return(
    <>
    <Navbar/>
        <div className="container mt-4">
            <h3>List of Products</h3>
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