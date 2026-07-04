import { FaBoxOpen, FaEdit, FaTrash } from "react-icons/fa";
import '../css/product-card.css'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import axios from "axios";
import api from "../services/api";
import Spinner from "./Spinner";
import { useState } from "react";
const ProductCard = ({ product }) => {
    const [loading,setLoad] = useState(false)
    const navigate = useNavigate()
    const UpdatePrd = ()=>{
        const url = `/products/${product.id}`
        navigate(url)
    }
    const {token} = useAuth()
    const deleteProduct = () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) {
            return;
        }
        setTimeout(()=>{
        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        };

        api.delete(
            `/product/products/${product.id}/`,
            config
        )
        .then(() => {
            alert("Product deleted successfully.");
            setLoad(true)
            navigate('/products')
        })
        .catch((err) => {
            console.log(err);
        }).finally(()=>{
            setLoad(false)
        })
    },1000)
    };
    return (
        <>
        {loading&&<Spinner/>}
        <div className="col-lg-4 col-md-6 mb-4">

            <div className="card shadow-sm border-0 rounded-4 h-100">

                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-center">

                        <h5 className="fw-bold text-primary">
                            <FaBoxOpen className="me-2" />
                            {product.name}
                        </h5>

                        {
                            product.quantity <= product.low_stock_threshold ?

                                <span className="badge bg-danger">
                                    Low Stock
                                </span>

                                :

                                <span className="badge bg-success">
                                    In Stock
                                </span>
                        }

                    </div>

                    <hr />

                    <p className="text-muted small mb-3">
                        {product.description}
                    </p>

                    <div className="row g-2">

                        <div className="col-6">
                            <strong>SKU</strong>
                            <br />
                            {product.sku}
                        </div>

                        <div className="col-6">
                            <strong>Quantity</strong>
                            <br />
                            {product.quantity}
                        </div>

                        <div className="col-6">
                            <strong>Cost</strong>
                            <br />
                            ₹ {product.cost_price}
                        </div>

                        <div className="col-6">
                            <strong>Selling</strong>
                            <br />
                            ₹ {product.selling_price}
                        </div>

                    </div>

                </div>

                <div className="card-footer bg-white border-0">

                    <div className="d-flex gap-2">

                        <button className="btn btn-warning w-100" onClick={UpdatePrd}>

                            <FaEdit className="me-2" />

                            Edit

                        </button>

                        <button className="btn btn-danger w-100" onClick={deleteProduct}>

                            <FaTrash className="me-2" />

                            Delete

                        </button>

                    </div>

                </div>

            </div>

        </div>
        </>
    );
};

export default ProductCard;