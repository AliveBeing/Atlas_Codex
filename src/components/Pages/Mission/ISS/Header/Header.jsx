import { Link, NavLink } from 'react-router-dom';
import HeaderStyle from './Header.module.css';

function Header() {
    return (
        <>
        <div>
            Navbar
        </div>
        <header className={HeaderStyle.header}>
            
            <Link className={HeaderStyle.header_link} to="/Home/Mission/ISS">
                <h1 className={HeaderStyle.header_title}>INTERNATIONAL SPACE STATION</h1>
            </Link>
            
        </header>
        </>
    );
}

export default Header;