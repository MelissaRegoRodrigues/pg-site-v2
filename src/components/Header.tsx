import HeaderProps from '../interfaces/HeaderProps';
import logo from '../assets/pg-logo.jpeg'
export default function Header({sessao1, sessao2, sessao3, fotoPerfil}: HeaderProps) {

    return (
        <div className="header-container w-full h-16 bg-primary-color text-light-color flex items-center pt-0 pb-4 mb-24">
            <img src={logo} alt="Logo" className="logo w-10 mt-2 ml-2" />
            <nav className='ml-auto'>
                <ul className='mt-3 p-0'>
                    <li className='inline mr-4 text-light-color text-sm hover:underline'>
                        <a href='/biblioteca'>{sessao1}</a>
                    </li>
                    <li className='inline mr-4 text-light-color text-sm hover:underline'>
                        <a href='/lojinha'>{sessao2}</a>
                    </li>
                    <li className='inline mr-4'>
                        <a href='/fichas' className='inline mr-4 text-light-color text-sm hover:underline'>{sessao3}</a>
                    </li>
                    <li className='inline mr-4'>
                        <a href='/perfil'><img src={fotoPerfil} alt='' className="inline w-16 h-16 rounded-full object-cover"></img></a>
                    </li>    
                </ul>
            </nav>
        </div>
    );
}
