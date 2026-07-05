import { FaUserAlt, FaLock, FaWarehouse } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState,useRef, useEffect } from "react";
import { useAuth } from "../context/Authcontext";
import axios from 'axios'
import Spinner from "./Spinner";
import api from "../services/api";
const Login = () => {
    let [loading,setLoad]=useState(false)
    const [error,setError] = useState('')
    let username = useRef()
    let password = useRef()
    let navigate = useNavigate()
    const {login,token} = useAuth()
    useEffect(()=>{
        if(token){
            navigate('/dashboard')
        }
    },[token])
    
    let userLogin = ()=>{
        // e.preventDefault();
        setLoad(true)
        let login_url='/login/'
        let login_data = {
            "username":username.current.value,
            "password":password.current.value
        }
        api.post(login_url,login_data).then((res)=>{
            setLoad(false)
            login(res.data.access)
            console.log(res)
            navigate('/dashboard')
        }).catch((err)=>{
            console.log(err)
            if (err.response?.status === 401) {
                setError("Invalid username or password.");
            } else {
                setError("Something went wrong.");
            }
        }).finally(()=>{
            setLoad(false)
        })
    }
    return (
        <>
        {loading && <Spinner/>}
        <div
            className="container-fluid bg-light"
            style={{ minHeight: "100vh" }}
        >
            <div className="row justify-content-center align-items-center vh-100">

                <div className="col-lg-4 col-md-6 col-sm-10">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body p-5">

                            <div className="text-center mb-4">

                                <div
                                    className="bg-primary rounded-circle d-inline-flex justify-content-center align-items-center mb-3"
                                    style={{
                                        width: "80px",
                                        height: "80px"
                                    }}
                                >
                                    <FaWarehouse
                                        size={35}
                                        className="text-white"
                                    />
                                </div>

                                <h2 className="fw-bold">
                                    Inventory Management
                                </h2>

                                <p className="text-muted">
                                    Sign in to continue
                                </p>

                            </div>

                            <form onSubmit={(e) => {
                                    e.preventDefault();
                                }}>

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Username
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FaUserAlt />
                                        </span>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter username"
                                            ref={username}
                                        />

                                    </div>

                                </div>

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Password
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FaLock />
                                        </span>

                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter password"
                                            ref={password}
                                        />

                                    </div>

                                </div>
                                {error && <p style={{ color: "red" }}>{error}</p>}
                                <button
                                    className="btn btn-primary w-100 py-2 fw-bold"
                                    type="button"
                                    onClick={userLogin}
                                >
                                    Login
                                </button>

                                <button
                                    className="btn btn-primary w-100 py-2 fw-bold text-white mt-3"
                                >
                                    <Link to='/signup' className="text-white">Sign Up</Link>
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </div>
        </>
    );
};

export default Login;