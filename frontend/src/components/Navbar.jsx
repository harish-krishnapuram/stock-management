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
    return(
        <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Stock-Management</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to='/dashboard'>Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Profile</a></li>
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