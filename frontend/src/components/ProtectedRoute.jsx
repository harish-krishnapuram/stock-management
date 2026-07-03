import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
const ProtectedRoute = () => {
    // const is_logged = false;
    const {token} = useAuth()
    if (!token) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;