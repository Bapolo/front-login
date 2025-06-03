

function CriarEvento() {

    return (
        <div className="p-4">

            <form className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-2 md:flex-wrap border border-gray-300 rounded-md m-auto w-89 p-4">

                <div className="w-full flex justify-between items-center">
                    <p className="text-center my-4">"autor"</p>
                    <button className="px-2 text-white bg-blue-700 rounded-sm cursor-pointer hover:bg-blue-900 transition-all">publicar</button>
                </div>

                <select className="bg-blue-700 text-white p-2 outline-none transition-all cursor-pointer rounded-sm hover:bg-blue-900">
                    <option className="bg-white text-blue-700" selected>Público</option>
                    <option className="bg-white text-blue-700">Privado</option>
                </select>

                <label>
                    <input type="number" placeholder="valor desejado" className="border border-gray-500 p-2 outline-none focus:border-blue-700 transition-all rounded-md" maxLength={100000000} />
                </label>

                <label className="flex flex-col items-center justify-center bg-white text-blue-700 cursor-pointer">
                    Data final:
                    <input type="date" />
                </label>

                <textarea maxLength={10} minLength={1} placeholder="descrição da doação" className="border border-gray-500 p-2 outline-none focus:border-blue-700 transition-all rounded-md" />

                <input type="file"  className="bg-white text-blue-700" />
            </form>
        </div>
    )
}

export default CriarEvento