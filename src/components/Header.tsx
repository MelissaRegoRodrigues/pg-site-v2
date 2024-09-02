import HeaderProps from '../interfaces/HeaderProps';
import logo from '../assets/logo.svg'
export default function Header({sessao1, sessao2, sessao3, fotoPerfil}: HeaderProps) {

    return (
        <div className="header-container sticky top-0 w-full h-24 bg-primary-color text-light-color flex items-center pt-0 pb-4 mb-24">
            <img src={logo} alt="Logo" className="logo w-20 h-20 mt-2 ml-4" />
            <nav className='ml-auto'>
                <ul className='mt-3 p-0'>
                    <li className='inline mr-10 text-light-color text-base hover:underline'>
                        <a href='/biblioteca'>{sessao1}</a>
                    </li>
                    <li className='inline mr-10 text-light-color text-base hover:underline'>
                        <a href='/lojinha'>{sessao2}</a>
                    </li>
                    <li className='inline mr-10 text-light-color text-base hover:underline'>
                        <a href='/fichas'>{sessao3}</a>
                    </li>
                    <li className='inline mr-4'>
                        {fotoPerfil ? (
                            <a href='/perfil'>
                            <img 
                                src={fotoPerfil} 
                                alt='Foto de perfil' 
                                className="inline w-20 h-20 rounded-full object-cover"
                            />
                            </a>
                        ) : (
                            <a href='/login' className='inline mr-4 text-light-color text-base hover:underline'>
                            Entrar
                            </a>
                        )}
                        </li> 
                </ul>
            </nav>
        </div>
    );
}
