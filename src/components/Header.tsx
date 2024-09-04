import HeaderProps from '../interfaces/HeaderProps';
import logo from '../assets/logo.svg'
export default function Header({sessao1, sessao2, sessao3, fotoPerfil}: HeaderProps) {

    return (
        <div className="header-container z-50 sticky top-0 w-full h-24 bg-primary-color text-light flex items-center pt-0 pb-4">
        <img src={logo} alt="Logo" className="logo w-14 h-14 mt-4 ml-4" />
        <nav className='ml-auto'>
          <ul className='mt-8 p-0 flex items-center'>
            <li className='inline mr-10 text-base'>
              <a className="text-light no-underline hover:underline" href='/biblioteca'>{sessao1}</a>
            </li>
            <li className='inline mr-10 text-base hover:underline'>
              <a className="text-light no-underline hover:underline" href='/lojinha'>{sessao2}</a>
            </li>
            <li className='inline mr-10 text-light text-base hover:underline'>
              <a className="text-light no-underline hover:underline" href='/fichas'>{sessao3}</a>
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
                <a href='/login' className='inline mr-4 text-base hover:underline'>
                  Entrar
                </a>
              )}
            </li> 
          </ul>
        </nav>
      </div>
    );
}
