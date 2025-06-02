import { Link, useNavigate } from "react-router-dom"
import { use, useRef, useState } from "react"
import api from "../services/api"

function FormCadastro() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [carregando, setCarregando] = useState(false)
    const navegar  = useNavigate()
    const [erroMessage, setErroMessage] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            setCarregando(true)
            setErroMessage("")

            await api.post("/cadastrar", {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            })

            setCarregando(false)

            navegar("/login")
        } catch (erro) {
            setCarregando(false)
            setErroMessage(erro.response.data)
            navegar("/")
        }
    }

    return (
        <div onSubmit={handleSubmit} className="h-full mx-auto py-9 px-4 bg-white flex flex-col gap-1.5 justify-center items-center md:text-sm md:py-2">

            {carregando ? <p>Carregando...</p> : (
                <form className="w-full mx-auto flex flex-col gap-3 justify-center items-center border border-gray-300 shadow-2xl rounded-2xl p-5 md:w-sm">

                    <h2 className="text-3xl text-center mb-4">Fazer cadastro</h2>

                    {erroMessage && <p className="text-red-500 text-sm">{erroMessage}</p>}
                    <input ref={nameRef} className="border border-gray-200 my-1.5 p-2 outline-none focus:border-blue-700 transition-all rounded-md" type="text" placeholder="Nome" required/>
                    <input ref={emailRef} className="border border-gray-200 my-1.5 p-2 outline-none focus:border-blue-700 transition-all rounded-md" type="email" placeholder="Email" required/>
                    <input ref={passwordRef} className="border border-gray-200 my-1.5 p-2 outline-none focus:border-blue-700 transition-all rounded-md" type="password" placeholder="Senha"  required/>

                    <button className="bg-blue-600 text-white py-2 px-8 text-center my-3 font-medium rounded-md hover:bg-blue-800 cursor-pointer">Cadastrar</button>

                    <Link to="/login" className="text-sm text-blue-700 underline">fazer login? </Link>
                </form>
            )}

        </div>
    )
}

export default FormCadastro