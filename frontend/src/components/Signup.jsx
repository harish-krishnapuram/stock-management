import { FaUserAlt, FaLock, FaWarehouse } from "react-icons/fa";
import { useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Spinner from "./Spinner";
import Back from "./Back";
const Signup = () => {
    let [loading,setLoad]=useState(false)
    const [error, setError] = useState("");
    let organization = useRef()
    let uname = useRef()
    let password = useRef()
    let cnf_pwd = useRef()
    let email  = useRef()
    let navigate = useNavigate()
    let userRegister = ()=>{
        setLoad(true)
        setTimeout(()=>{
        let login_url='/signup/'
        let login_data = {
            "username":uname.current.value,
            "password":password.current.value,
            "confirm_password":cnf_pwd.current.value,
            "organization_name":organization.current.value,
            "email":email.current.value
        }
        api.post(login_url,login_data).then((res)=>{
            setLoad(false)
            console.log(res)
            navigate('/')
        }).catch((err)=>{
            // console.log('failure')
            if (err.response) {
                setError(JSON.stringify(err.response.data));
            } else {
                setError("Server is not responding.");
            }
            console.log(err)
        }).finally(()=>{
            setLoad(false)
        })
    },1000)
    }
    return (
        <>
        {loading && <Spinner/>}
        <div
            className="container-fluid bg-light"
            style={{ minHeight: "100vh" }}
        >
            <Back/>
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
                                    Signup Into App
                                </p>

                            </div>

                            <form onSubmit={(e) => {
                                    e.preventDefault();
                                }}>
                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Organization Name
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FaUserAlt />
                                        </span>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter username"
                                            ref={organization}
                                        />

                                    </div>

                                </div>

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Email address
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FaUserAlt />
                                        </span>

                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                            ref={email}
                                        />

                                    </div>

                                </div>

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
                                            ref={uname}
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

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Confirm Password
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FaLock />
                                        </span>

                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter password"
                                            ref={cnf_pwd}
                                        />

                                    </div>

                                </div>
                                {error && <p style={{ color: "red" }}>{error}</p>}
                                <button
                                    className="btn btn-primary w-100 py-2 fw-bold"
                                    onClick={userRegister}
                                >
                                    SIGN UP
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

export default Signup;