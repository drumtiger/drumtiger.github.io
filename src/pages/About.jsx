import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mainImage from '../img/main.PNG';
import logoImage from '../img/logo.png';
import '../css/main.css';

function Lobby() {
const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                // navigate('/lobby');
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [navigate]);

    return (
        <div className="main-container">
            <img src={mainImage} alt="Main" className="main-image" />
            <img src={logoImage} alt="Logo" className="logo-image"/>
            <span className="enter-text">Press [Enter] to Continue</span>
        </div>
    )
}

export default Lobby;