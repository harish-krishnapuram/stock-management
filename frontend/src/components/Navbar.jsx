import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = ()=>{
  const navigate = useNavigate()
    const {logout,token} = useAuth()
    const handleLogOut = ()=>{
        logout()
        navigate('/')
    }
    const goToProfile = ()=>{
      navigate('/profile')
    }
    return(
        <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
  <div className="container-fluid">
   <Link className="navbar-brand" to='/dashboard'>Stock-Management</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to='/dashboard'>Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/products'>Products</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul className="dropdown-menu">
            <li><span className="dropdown-item" onClick={goToProfile}>Profile</span></li>
            <li><span className="dropdown-item" onClick={handleLogOut}>Logout</span></li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar