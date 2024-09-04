import NoticiaProps from "../interfaces/NoticiaProps";

export default function Noticia({titulo, conteudo}: NoticiaProps) {

    return (
        <div className="relative sm:w-3/4 md:w-1/2 lg:w-1/4 p-4 bg-blue shadow rounded-lg text-light border-slate-400 box-border">
        <h1 className="text-lg sm:text-xl md:text-2xl text-center text-dark-secondary font-bold mb-4">{titulo}</h1>
        <p className="text-sm sm:text-base md:text-lg text-justify text-light text-base leading-relaxed">
          {conteudo.length > 240? conteudo.substring(0, 240)+"..." : conteudo}
        </p>
      </div>
    );
}