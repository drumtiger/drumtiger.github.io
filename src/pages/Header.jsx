import {Link, Outlet} from 'react-router-dom';
import '../css/main.css';

function Header() {

    return (
        <div className='header-container'>
            <nav>
                <ul className='header-nav'>
                    <li><Link to="/">HyunE</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">Project</Link></li>
                    <li><Link to="/">menu1</Link></li>
                    <li><Link to="/">menu2</Link></li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default Header;