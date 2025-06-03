import { Link } from "react-router-dom"
import { BsPlusCircleFill } from "react-icons/bs";


function CriadorDeEvento() {

    return (
        <div className="border border-gray-300">
            <Link to="#" className="flex gap-4 justify-center items-center hover:bg-gray-200 active:bg-gray-200 active:scale-105 transition-all py-4 px-4">
                criar evento de doação
                <p>
                    <BsPlusCircleFill className="text-blue-700 text-2xl" />
                </p>
            </Link>
        </div>
    )
}

export default CriadorDeEvento