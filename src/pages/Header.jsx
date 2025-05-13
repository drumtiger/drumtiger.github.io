import {NavLink, Outlet} from 'react-router-dom';
import '../css/main.css';

function Header() {

    return (
        <div className='header-container'>
            <nav>
                <ul className='header-nav'>
                    <li>
                        <NavLink to="/" end
                            className={({ isActive }) => isActive ? 'active' : undefined}>
                            HyunE
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"
                            className={({ isActive }) => isActive ? 'active' : undefined}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/project"
                            className={({ isActive }) => isActive ? 'active' : undefined}>
                            Project
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/guestbook"
                            className={({ isActive }) => isActive ? 'active' : undefined}>
                            Guest Book
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/example"
                            className={({ isActive }) => isActive ? 'active' : undefined}>
                            example
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default Header;