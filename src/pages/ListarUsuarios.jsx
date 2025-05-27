import { use, useEffect, useState } from "react"
import api from "../services/api"
import { useNavigate } from "react-router-dom"

function ListarUsuarios() {
    const [users, setUsers] = useState([])
    const navegar = useNavigate()

    useEffect(() => {
        async function buscarUsuarios() {
            try {
                const response = await api.get("/listar-usuarios", {
                    headers: { Authorization: localStorage.getItem("token") }
                })

                setUsers(response.data)

            } catch (erro) {
                navegar("/login")
            }
        }

        buscarUsuarios()
    }, [])

    return (
        <div className="text-xl flex flex-col gap-2 justify-center items-center">
            <h1 className="text-2xl text-center mt-4">Lista de usuários</h1>
            <ul className="p-2 text-center flex flex-col gap-2">
                {users.map((user) =>
                    <li className="flex flex-col items-start mb-3 border border-gray-300 rounded-md p-2" key={user._id}>

                        <p>Nome: {user.name}</p>
                        <p>Email: {user.email}</p>

                    </li>
                )}
            </ul>

            <div className="p-6 bg-blue-700 text-white w-full">
                <p className="text-center">Feito por Viris | &copy; 2025</p>
            </div>
        </div>
    )
}

export default ListarUsuarios