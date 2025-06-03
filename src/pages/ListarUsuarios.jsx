import { use, useEffect, useState } from "react"
import api from "../services/api"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"

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
            <h1 className="text-2xl text-center mt-4">Lista dos meus friends 😊</h1>
            <ul className="p-2 text-center flex flex-col gap-2">
                {users.map((user) =>
                    <li className="flex flex-col items-start mb-3 border border-gray-300 rounded-md p-2" key={user._id}>

                        <p>Nome: {user.name}</p>
                        <p>Email: {user.email}</p>

                    </li>
                )}
            </ul>

            <Footer />
        </div>
    )
}

export default ListarUsuarios