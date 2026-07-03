import {Link} from 'react-router-dom'

const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/view'>View</Link></li>
                <li><Link to='/create'>Create</Link></li>
                <li><Link to='/update/:id'>Update</Link></li>
                <li>Delete</li>
                <li onClick={handleLogOut}><button className="btn btn-primary">LogOut</button></li>
            </ul>
        </div>
    )
}

export default Sidebar