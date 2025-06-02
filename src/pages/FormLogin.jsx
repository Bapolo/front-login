import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../services/api"

function FormLogin() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navegar = useNavigate()
    const [carregando, setCarregando] = useState(false)

    const [erroMessage, setErroMessage] = useState("")

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            setErroMessage("")
            setCarregando(true)
            const response = await api.post("/login", {
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            setCarregando(false)

            const token = response.data

            localStorage.setItem("token", token)

            navegar("/listar-usuarios")
        } catch (erro) {
            setCarregando(false)
            setErroMessage(erro.response.data)
        }

    }

    return (
        <div className="w-full mx-auto px-4 py-9 bg-white flex flex-col gap-1.5 justify-center items-center h-full">

            {carregando ? <p>Carregando...</p> : (
                <form onSubmit={handleSubmit} className="w-full mx-auto flex flex-col gap-3 justify-center items-center border border-gray-300 shadow-2xl rounded-2xl p-5 md:text-sm md:py-2 md:w-sm">
                    <h2 className="text-3xl text-center mb-4">Fazer login</h2>

                    {erroMessage && <p className="text-red-500 text-sm">{erroMessage}</p>}
                    <input ref={emailRef} className="border border-gray-200 my-1.5 p-2 outline-none focus:border-blue-700 transition-all rounded-md" type="email" placeholder="Email"  />

                    <input ref={passwordRef} className="border border-gray-200 my-1.5 p-2 outline-none focus:border-blue-700 transition-all rounded-md" type="password" placeholder="Senha"  />

                    <button className="bg-blue-600 text-white py-2 px-8 text-center my-3 font-medium rounded-md hover:bg-blue-800 cursor-pointer">Login </button>

                    <Link className="text-sm text-blue-700 underline" to="/">cadastrar?</Link>
                </form>
            )}
        </div>
    )
}

export default FormLogin