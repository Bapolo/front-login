import { Link } from "react-router-dom"

function FormCadastro() {
    return (
        <div className="h-full mx-auto py-9 px-4 bg-white text-xl flex flex-col gap-1.5 justify-center items-center">
            <form className="w-full flex flex-col gap-3 justify-center items-center border border-gray-300 shadow-2xl rounded-2xl p-5">

                <h2 className="text-3xl text-center mb-4">Fazer cadastro</h2>

                <input className="border border-gray-200 my-1.5 p-2 outline-none focus:border-blue-700 transition-all rounded-md" type="text" placeholder="Nome" required/>
                <input className="border border-gray-200 my-1.5 p-2 outline-none focus:border-blue-700 transition-all rounded-md" type="email" placeholder="Email" required/>
                <input className="border border-gray-200 my-1.5 p-2 outline-none focus:border-blue-700 transition-all rounded-md" type="password" placeholder="Senha" required/>

                <button className="bg-blue-600 text-white py-2 px-8 text-center my-3 font-medium rounded-md hover:bg-blue-800 cursor-pointer">Cadastrar</button>

                <Link to="/login" className="text-sm text-blue-700 underline">fazer login? </Link>
            </form>

            
        </div>
    )
}

export default FormCadastro