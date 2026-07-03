import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    // const is_logged = false;
    const token = true
    if (false) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;