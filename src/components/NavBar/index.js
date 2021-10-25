import './css/index.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsHeartHalf } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';

function NavBar() {
    let location = useLocation();
    let pathname = location.pathname;
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <h4>React Native</h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className={pathname === "/" ? "nav-item active_link" : "nav-item"}>
                            <Link className="nav-link active" to="/">
                                Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;