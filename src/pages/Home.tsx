import CarouselCustom from "../components/CarouselCustom";
import Header from "../components/Header";
import Noticia from "../components/Noticia";
import NoticiaStacker from "../components/NoticiaStacker";
import Sobre from "../components/Sobre";

const baseURL = 'http://localhost:8080/pdfs/';

function Home() {

    return (
        <>
        <Header sessao1="Biblioteca da árvore sagrada"
         sessao2="Lojinha" sessao3="Minhas Fichas" fotoPerfil={baseURL + "perfil.png"}/> 

        <div className="mb-24 relative">
          <CarouselCustom imagem1={baseURL+"imagem-site.jpg"} descImagem1="lugar1" 
          imagem2={baseURL+"northwide.jpg"} descImagem2="north" 
          imagem3={baseURL+"imagem-site.jpg"} descImagem3="lugar3"/>
        </div>

        <div className="mx-8 mb-8 relative">
          <NoticiaStacker />
        </div>

        <Sobre conteudo="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        


        <div className="p-1"></div>
        </>
      );

}

{/*
        <div className="noticia-container grid gap-6 grid-cols-1 grid-rows-3 mx-56 mb-10">
         <Noticia titulo="Notícia 1" conteudo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>

           <Noticia titulo="Notícia 1" conteudo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
        </div>
        */}

export default Home;