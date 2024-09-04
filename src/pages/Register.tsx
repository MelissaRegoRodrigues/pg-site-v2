import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        navigate('/home'); 
    };

    const handleLoginClick = () => {
        navigate('/'); 
    };

    return (

        <div className="login-container h-screen bg-primary-color flex flex-col justify-center items-center text-text">
            <img src={logo} alt="Logo" className="logo w-32 mb-16" />

            <form onSubmit={handleRegisterSubmit} className="login-form flex flex-col w-full max-w-xs">
                <input type="text" placeholder="Nome de usuário" className="input-field p-2.5 mb-2.5 border border-light rounded font-medium text-base" />
                <input type="email" placeholder="Email" className="input-field p-2.5 mb-2.5 border border-light rounded font-medium text-base" />
                <input type="password" placeholder="Senha" className="input-field p-2.5 mb-2.5 border border-light rounded font-medium text-base" />
                <input type="password" placeholder="Confirmar senha" className="input-field p-2.5 mb-2.5 border border-light rounded font-medium text-base" />
                <button type="submit" className="submit-button p-2.5 bg-blue text-light rounded font-medium text-base cursor-pointer hover:bg-dark-blue">
                    Registrar
                </button>
            </form>

            <div className='flex items-center mt-2'>
    <p className="text-light mb-0">Já tem login? 
        <button className="register-button text-light bg- border-none cursor-pointer mx-2 hover:text-secondary hover:bg-primary-color"
        onClick={handleLoginClick}>
        Login
        </button>
    </p>
</div>
            
        </div>
    );

}