import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import MainContent from "./components/MainContent";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <Routes>

            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
                <Route element={<MainContent/>}>
                    <Route path="/dashboard" element={<Dashboard />}/>
                </Route>
                
            </Route>

        </Routes>
    );
}

export default App;