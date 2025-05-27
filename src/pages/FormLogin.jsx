import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../services/api"

function FormLogin() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navegar = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const response = await api.post("/login", {
                email: emailRef.current.value,
                password: passwordRef.current.value
            })

            const token = response.data

            localStorage.setItem("token", token)

            navegar("/listar-usuarios")
        } catch (erro) {
            console.log(erro)
            console.log("Erro ao fazer login")
        }

        // emailRef.current.value = ""
        // passwordRef.current.value = ""
    }

    return (
        <div className="w-full mx-auto px-4 py-9 bg-white text-xl flex flex-col gap-1.5 justify-center items-center h-full">

            <form onSubmit={handleSubmit} className="w-md flex flex-col gap-3 justify-center items-center border border-gray-300 shadow-2xl rounded-2xl p-5">
                <h2 className="text-3xl text-center mb-4">Fazer login</h2>

                <input ref={emailRef} className="border border-gray-200 my-1.5 p-2 outline-none focus:border-blue-700 transition-all rounded-md" type="email" placeholder="Email" required />

                <input ref={passwordRef} className="border border-gray-200 my-1.5 p-2 outline-none focus:border-blue-700 transition-all rounded-md" type="password" placeholder="Senha" required />

                <button className="bg-blue-600 text-white py-2 px-8 text-center my-3 font-medium rounded-md hover:bg-blue-800 cursor-pointer">Login </button>

                <Link className="text-sm text-blue-700 underline" to="/">cadastrar?</Link>
            </form>
        </div>
    )
}

export default FormLogin