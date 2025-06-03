import { useState } from "react"


function Evento({ autor, titulo, descricao, valorMeta, valorRecolhido }) {
    const [evento, setEvento] = useState({
        autor,
        titulo: "Vax pra beber",
        descricao: "Hoje vamos sair e beber pra esquecer",
        valorMeta: "2 000 000 kz",
        valorRecolhido: "500 000 kz"
    })

    return (
        <div className="my-2  flex flex-col items-center gap-2 border border-gray-300  rounded-xl w-full font-light md:w-auto">
            <h2 className="text-xl font-medium border-b-1 border-gray-300 w-full text-center py-2 px-4">
                {evento.titulo}
                <p className="font-light text-sm">Jesus Pedro Bapolo</p>
            </h2>


            <div className="px-4 text-sm">
                <p>Meta: {evento.valorMeta} - Recolhido: {evento.valorRecolhido}</p>
            </div>

            <p className="px-4">{evento.descricao}</p>

            <div className="px-4 text-sm text-center border-t-1 border-gray-300 py-2 w-full">
                <p>Referência: 152426278 - Express: 941553686</p>
            </div>
        </div>
    )
}

export default Evento