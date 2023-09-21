import { Link, NavLink } from 'react-router-dom';
import './Nav.css'

const Navbar = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <span>My website </span>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                
            </nav>
            
        </div>
    );
};

export default Navbar;