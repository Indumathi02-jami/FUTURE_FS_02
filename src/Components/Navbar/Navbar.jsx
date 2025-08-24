import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContex';
import nav_drop from '../Assets/dropdown_icon.png';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [search, setSearch] = useState('');
    const { getTotalItems } = useContext(ShopContext);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const query = search.toLowerCase();

        if (query === 'men') navigate('/mens');
        else if (query === 'women') navigate('/womens');
        else if (query === 'kids') navigate('/kids');
        else alert('No category found!');

        setSearch('');
    }

    return (
        <div className="navbar">
            {/* Left: Logo */}
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>SHOPPER</p>
            </div>

            {/* Center: Shop + Search */}
            <div className="nav-center">
                <Link className="shop-link" to="/">Shop</Link>

                <form onSubmit={handleSearch} className="nav-search">
                    <input
                        type="text"
                        placeholder="Search category..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>

            {/* Right: Login + Cart */}
            <div className="nav-login">
                <Link to='/login'><button>Login</button></Link>
                <div className="nav-cart">
                    <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
                    <div className="nav-cart-count">{getTotalItems()}</div>
                </div>

                {/* Mobile dropdown icon */}
                <img
                    className={`nav-dropdown ${menuVisible ? 'open' : ''}`}
                    src={nav_drop}
                    onClick={toggleMenu}
                    alt="Menu"
                />
            </div>

            {/* Optional mobile menu */}
            {menuVisible && (
                <ul className="nav-menu-mobile">
                    <li><Link to='/mens'>Men</Link></li>
                    <li><Link to='/womens'>Women</Link></li>
                    <li><Link to='/kids'>Kids</Link></li>
                </ul>
            )}
        </div>
    );
}

export default Navbar;
