import Noticia from "./Noticia";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const noticias = [
    {
      titulo: "Notícia 1",
      conteudo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
    },
    {
      titulo: "Notícia 2",
      conteudo:  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
    },
    {
      titulo: "Notícia 3",
      conteudo:  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
    }
  ];

export default function NoticiaStacker() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % noticias.length);
    };

    return (
        <div className="relative h-[350px] overflow-hidden">
        
        <div className="relative h-full flex items-end">
            {noticias.map((noticia, index) => (
            <div 
                key={index} 
                className={`absolute h-fit w-fit transition-transform duration-300 ease-in-out  ${index === currentIndex ? 'opacity-100 transform scale-[1.0] z-3' : index === (currentIndex + 1) % noticias.length ? 'opacity-60 transform scale-[0.9] z-2' : 'opacity-30 transform scale-[0.8] z-1'}`}
                style={{ bottom: `${(2 - Math.abs(currentIndex - index)) * 10}px` }}
            >
                <Noticia titulo={noticia.titulo} conteudo={noticia.conteudo} />
            </div>
            ))}

            <button
                    className="relative left-1/3 bottom-40 bg-transparent hover:text-dark-secondary z-20" // Adicione z-index para garantir que o botão esteja acima
                    onClick={handleNext}
                    style={{ transform: 'translateY(50%)' }}
                >
                    <FiChevronRight size={30} />
                </button>

            <div className="relative left-2/3 bottom-1/3 w-40 flex items-center">
            <h1 className=" text-6xl text-light text-center ">Últimas atualizações</h1>
            </div>
            

        </div>
        
      </div>
     
    );
}