import NoticiaProps from "../interfaces/NoticiaProps";

export default function Noticia({titulo, conteudo}: NoticiaProps) {

    return (
        <div className="max-w-full p-4 bg-white shadow-lg rounded-lg border-slate-400 box-border">
        <h1 className="text-2xl text-center font-bold mb-4">{titulo}</h1>
        <p className="text-gray-700  text-justify text-base leading-relaxed">
          {conteudo.length > 500? conteudo.substring(0, 500)+"..." : conteudo}
        </p>
      </div>
    );
}