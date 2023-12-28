import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
const Header = () => {
    return (
        <div className='custom__navbar'>
            <div className="container d-flex justify-content-between">
                <div className="custom__navbar__left">
                    <img src="https://preview.colorlib.com/theme/blogger/img/logo.png.webp" alt="" />
                </div>
                <div className="custom__navbar__right">
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link>News</Link>
                        </li>
                        <li>
                            <Link>Travel</Link>
                        </li>
                        <li>
                            <Link to='/wishlist'>Wishlist</Link>
                        </li>
                        <li>
                            <Link to='/add'>Add</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header