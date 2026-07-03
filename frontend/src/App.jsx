import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import MainContent from "./components/MainContent";
import ProtectedRoute from "./components/ProtectedRoute";
import Products from "./components/Products";
import UpdateProduct from "./components/UpdateProduct";
import AddProduct from "./components/AddProduct";
import Profile from './components/Profile'
function App() {
    return (
        <Routes>

            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/products" element={<Products />}/>
                <Route path='/products/:id' element={<UpdateProduct/>}/>
                <Route path='/addproduct' element={<AddProduct/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Route>

        </Routes>
    );
}

export default App;