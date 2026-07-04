import { useEffect, useRef,useState } from "react";
import axios from "axios";
import { useAuth } from "../context/Authcontext";
import Back from "./Back";
import {
    FaUserCircle,
    FaUser,
    FaEnvelope,
    FaBuilding,
    FaSave
} from "react-icons/fa";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
const Profile = () => {

    const { token } = useAuth();
    const [loading,setLoad] = useState(true)
    const username = useRef();
    const email = useRef();
    const first_name = useRef();
    const last_name = useRef();
    const organization = useRef();
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(()=>{
        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        };

        api.get(
            "/profile/",
            config
        )
        .then((res) => {

            const user = res.data;

            username.current.value = user.username;
            email.current.value = user.email;
            first_name.current.value = user.first_name;
            last_name.current.value = user.last_name;
            organization.current.value = user.organization;
            setLoad(false)

        })
        .catch((err) => {
            console.log(err);
        }).finally(()=>{
            setLoad(false)
        })
    },1000)

    }, []);

    const updateProfile = () => {
        setLoad(true)
        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        };

        const data = {

            first_name: first_name.current.value,
            last_name: last_name.current.value,
            email: email.current.value

        };
        setTimeout(()=>{
        api.put(
            "/profile/",
            data,
            config
        )
        .then(() => {
            setLoad(false)
            alert("Profile Updated Successfully");

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
       <Back/>
        <div className="container mt-5">
            <div className="row justify-content-center">

                <div className="col-lg-7">

                    <div className="card shadow border-0 rounded-4">

                        <div className="card-header bg-primary text-white text-center py-4">

                            <FaUserCircle size={70} />

                            <h3 className="mt-3">

                                My Profile

                            </h3>

                        </div>

                        <div className="card-body p-4">

                            <div className="mb-3">

                                <label className="form-label fw-bold">

                                    Username

                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">

                                        <FaUser />

                                    </span>

                                    <input
                                        className="form-control"
                                        ref={username}
                                        readOnly
                                    />

                                </div>

                            </div>

                            <div className="mb-3">

                                <label className="form-label fw-bold">

                                    First Name

                                </label>

                                <input
                                    className="form-control"
                                    ref={first_name}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label fw-bold">

                                    Last Name

                                </label>

                                <input
                                    className="form-control"
                                    ref={last_name}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label fw-bold">

                                    Email

                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">

                                        <FaEnvelope />

                                    </span>

                                    <input
                                        className="form-control"
                                        ref={email}
                                    />

                                </div>

                            </div>

                            <div className="mb-4">

                                <label className="form-label fw-bold">

                                    Organization

                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">

                                        <FaBuilding />

                                    </span>

                                    <input
                                        className="form-control"
                                        ref={organization}
                                        readOnly
                                    />

                                </div>

                            </div>

                            <button
                                className="btn btn-success w-100"
                                onClick={updateProfile}
                            >

                                <FaSave className="me-2" />

                                Update Profile

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </>

    );

};

export default Profile;