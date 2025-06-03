import { Link } from "react-router-dom"

function Nav() {

    return (
        <nav className="p-4 bg-blue-700 text-white w-full">
            <ul className="flex gap-4 text-md justify-end items-center px-4">
                <li><Link to="/">home</Link></li>
                <li><Link to="/cadastrar">cadastrar</Link></li>
                <li><Link to="/login">login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav