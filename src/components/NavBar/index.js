import './css/index.css'
import LOGO from '../../assets/images/logo.png';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsHeartHalf } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    let location = useLocation()
    let pathname = location.pathname
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img width="150" src={LOGO} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className={pathname === "/" ? "nav-item active_link" : "nav-item"}>
                            <Link className="nav-link active" to="/">
                                Home</Link>
                        </li>
                        <li className={pathname === "/shop" ? "nav-item active_link" : "nav-item"}>
                            <Link className="nav-link active" to="/shop">Shop</Link>
                        </li>
                        <li className={pathname === "/cart" ? "nav-item active_link" : "nav-item"}>
                            <Link className="nav-link active" to="/cart">Cart</Link>
                        </li>
                    </ul>
                    <div className="icons_box d-flex justify-content-between">
                        <div>
                            <BsHeartHalf size={26} color="#be1e2d" />
                        </div>
                        <div>
                            <AiOutlineShoppingCart size={32} color="#be1e2d" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;