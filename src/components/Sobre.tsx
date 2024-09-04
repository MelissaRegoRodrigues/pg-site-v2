import SobreProps from "../interfaces/SobreProps";


export default function Sobre({conteudo}: SobreProps) {

    return (
        <div className="w-11/12 bg-light-blue min-h-80 max-h-auto rounded flex p-4">
            <div className="w-3/6 p-4 bg-blue shadow rounded-lg text-light border-slate-400 box-border">

            </div>

            <div className="relative p-8">
                <h1 className="text-lg sm:text-xl md:text-2xl text-center text-dark-secondary font-bold mb-4">Sobre a mesa</h1>
                <p className="text-sm sm:text-base md:text-lg text-justify text-light text-base leading-relaxed">
                {conteudo}
                </p>
            </div>

        </div>
    );
}