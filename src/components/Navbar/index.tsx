import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.png'

import './index.css'

export const Navbar = () => (
    <nav className="bg-cyan-900">
        <ul className="flex items-center">
            <li className="p-3 text-xl text-white">
                <NavLink to="/">
                    <img className="logo aspect-auto" src={logo}></img>
                </NavLink>
            </li>
            <li className="p-3 text-xl text-white">
                <NavLink to="/create">
                    Create
                </NavLink>
            </li>
        </ul>
    </nav>
)