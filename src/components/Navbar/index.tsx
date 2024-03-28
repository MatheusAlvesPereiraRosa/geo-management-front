import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.png'

import { motion } from 'framer-motion'

export const Navbar = () => (
    <nav className="bg-cyan-900">
        <ul className="flex items-center">
            <motion.li
                whileTap={{ scale: 0.9 }}
                className="p-3 text-xl text-white"
            >
                <NavLink to="/">
                    <img className="logo aspect-auto" src={logo}></img>
                </NavLink>
            </motion.li>
            <motion.li
                whileTap={{ scale: 0.9 }}
                className="p-3 text-xl text-white "
            >
                <NavLink to="/create" className={({ isActive, isPending }: {isActive: boolean, isPending: boolean}) => {
                    return isActive ? "active-link" : isPending ? "pending" : "";
                }}>
                    <a className="hover:text-amber-500 link">Create</a>
                </NavLink>
            </motion.li>
        </ul>
    </nav>
)