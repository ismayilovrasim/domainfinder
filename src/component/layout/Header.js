import 'bootstrap/dist/css/bootstrap.css';
import {useLocation} from "react-router-dom";


const Header = () => {

    // let location = useLocation()
    // let {pathname} = location;

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light " >
                <a className="navbar-brand mx-5" href="/">DOMAINFINDER</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a className="nav-link" href="/about">About us</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link" href="#">For Developers</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;