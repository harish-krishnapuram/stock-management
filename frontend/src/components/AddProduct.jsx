import { FaBoxOpen, FaHashtag, FaMoneyBillWave, FaWarehouse, FaClipboardList } from "react-icons/fa";
import { useAuth } from "../context/Authcontext";
import { useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../services/api";
const AddProduct = () => {
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
            navigate('/products')
        })
        .catch((err) => {
            console.log(err);
            console.log('error occured----------')
        });
    };
    return (
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
    );

}

export default AddProduct;