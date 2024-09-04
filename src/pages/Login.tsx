
import { useState } from 'react';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        navigate('/home'); 
    };

    const handleRegisterClick = () => {
        navigate('/register'); 
    };

    return (
        <div className="login-container h-screen bg-primary-color flex flex-col justify-center items-center text-text">
            <img src={logo} alt="Logo" className="logo w-32 mb-16" />

            <form onSubmit={handleLoginSubmit} className="login-form flex flex-col w-full max-w-xs">
            <input type="email" placeholder="Email" className="input-field p-2.5 mb-2.5 border border-light rounded font-medium text-base" />
            <input type="password" placeholder="Senha" className="input-field p-2.5 mb-2.5 border border-light rounded font-medium text-base" />
            <button type="submit" className="submit-button p-2.5 bg-blue text-light rounded font-medium text-base cursor-pointer hover:bg-dark-blue">
                Login
            </button>
            </form>

            <div className='flex items-center mt-2'>
            <p className="text-light mb-0">Não tem conta ainda? 
                <button className="register-button text-light border-none cursor-pointer mx-2 hover:text-secondary hover:bg-primary-color"
                onClick={handleRegisterClick}>
                Registre
                </button>
            </p>
        </div>

            
        </div>
    );
}
