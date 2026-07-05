import { FaBoxOpen, FaHashtag, FaMoneyBillWave, FaWarehouse, FaClipboardList } from "react-icons/fa";
import { useAuth } from "../context/Authcontext";
import { useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../services/api";
import Back from "./Back";
import { useState } from "react";
import Spinner from "./Spinner";
const AddProduct = () => {
    const [error,setError] = useState('')
    const [loading,setLoad] = useState(false)
    const {token} = useAuth()
    const name = useRef();
    const sku = useRef();
    const description = useRef();
    const cost_price = useRef();
    const selling_price = useRef();
    const quantity = useRef();
    const low_stock_threshold = useRef();
    const navigate = useNavigate()
    const addPrd = () => {
        if (!name.current.value.trim()) {
            setError("Product name is required.");
            return;
        }
        if (!sku.current.value.trim()) {
            setError("SKU is required.");
            return;
        }
        if (!description.current.value.trim()) {
            setError("description is required.");
            return;
        }
        if (!cost_price.current.value.trim()) {
            setError("cost price is required.");
            return;
        }
        if (!selling_price.current.value.trim()) {
            setError("selling Price is required.");
            return;
        }
    
        if (!quantity.current.value.trim()) {
            setError("Quantity is required.");
            return;
        }
        if (!low_stock_threshold.current.value.trim()) {
            setError("low-stock is required.");
            return;
        }
        
        setLoad(true)
        setTimeout(()=>{
        const data = {
            name: name.current.value,
            sku: sku.current.value,
            description: description.current.value,
            cost_price: cost_price.current.value,
            selling_price: selling_price.current.value,
            quantity: quantity.current.value,
            low_stock_threshold: low_stock_threshold.current.value
        };
    
        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        };
    
        api.post(
            `/product/products/`,
            data,
        )
        .then((res) => {
            // alert("Product updated successfully");
            console.log(res.data);
            setLoad(false)
            navigate('/products')
        })
        .catch((err) => {
            // console.log(err.response)
            if (err.response) {
                const errors = err.response.data;

                const message = Object.entries(errors)
                .map(([field, msgs]) => `${field}: ${msgs.join(", ")}`)
                .join("\n");
                setError(message)
                // console.log(message)
            } else {
                setError("Server is not responding.");
            }
        }).finally(()=>{
            setLoad(false)
        })
    },300)
    };
    return (
        <>
        {loading&&<Spinner/>}
       <Back/>
        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-header bg-primary text-white py-3 rounded-top-4">

                            <h3 className="mb-0">
                                <FaBoxOpen className="me-2" />
                                Add Product
                            </h3>

                        </div>

                        <div className="card-body p-4">

                            <form onSubmit={(e) => {
                                    e.preventDefault();
                                }}>

                                <div className="row">

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">
                                            Product Name
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter product name"
                                            ref={name}
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">
                                            SKU
                                        </label>

                                        <div className="input-group">

                                            <span className="input-group-text">
                                                <FaHashtag />
                                            </span>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="SKU"
                                                ref={sku}
                                                required
                                            />

                                        </div>

                                    </div>

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Description
                                    </label>

                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        placeholder="Product description"
                                        ref={description}
                                        required
                                    ></textarea>

                                </div>

                                <div className="row">

                                    <div className="col-md-4 mb-3">

                                        <label className="form-label">
                                            Cost Price
                                        </label>

                                        <div className="input-group">

                                            <span className="input-group-text">
                                                ₹
                                            </span>

                                            <input
                                                type="number"
                                                className="form-control"
                                                ref={cost_price}
                                                required
                                            />

                                        </div>

                                    </div>

                                    <div className="col-md-4 mb-3">

                                        <label className="form-label">
                                            Selling Price
                                        </label>

                                        <div className="input-group">

                                            <span className="input-group-text">
                                                ₹
                                            </span>

                                            <input
                                                type="number"
                                                className="form-control"
                                                ref={selling_price}
                                                required
                                            />

                                        </div>

                                    </div>

                                    <div className="col-md-4 mb-3">

                                        <label className="form-label">
                                            Quantity
                                        </label>

                                        <div className="input-group">

                                            <span className="input-group-text">
                                                <FaWarehouse />
                                            </span>

                                            <input
                                                type="number"
                                                className="form-control"
                                                ref={quantity}
                                                required
                                            />

                                        </div>

                                    </div>

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">
                                        Low Stock Threshold
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FaClipboardList />
                                        </span>

                                        <input
                                            type="number"
                                            className="form-control"
                                            ref={low_stock_threshold}
                                        />

                                    </div>

                                </div>
                                {error && <p style={{ color: "red" }}>{error}</p>}
                                <div className="d-flex gap-3">
                                
                                    <button
                                        className="btn btn-success flex-fill"
                                        onClick={addPrd}
                                    >
                                        Add Product
                                    </button>

                                    <button
                                        type="reset"
                                        className="btn btn-outline-secondary flex-fill"
                                    >
                                        Clear
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </>
    );

}

export default AddProduct;