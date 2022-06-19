import { Link } from 'react-router-dom';
import '../Styles/style.css';

function NavBar() {
    return (
        <header className="just">
            <h1 className="logo"><p>Bank-App</p></h1>
            <ul className="nav-links">
                <Link className="single-Item" to="/"><p>Home</p></Link>

                <Link className="single-Item" to="/register"><p>Register</p></Link>

                <Link className="single-Item" to="/deposit"><p>Deposit</p></Link>

                <Link className="single-Item" to="/withdraw"><p>Withdraw</p></Link>

                <Link className="single-Item" to="/about"><p>About</p></Link>



            </ul>
        </header>
    )
}

export default NavBar;