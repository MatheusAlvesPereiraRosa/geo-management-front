import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.png'

import brasil from "../../assets/brasil.png";
import usa from "../../assets/estados-unidos.png";
import Select from "react-select";

import { motion } from 'framer-motion'
interface Props {
    lang: string;
    setLang: React.Dispatch<string>;
}

export const Navbar = ({ lang, setLang }: Props) => {
    const LANGUAGE_OPTIONS = [
        {
            value: "pt-br",
            label: (
                <span className="flex justify-center">
                    <img className="w-6 aspect-auto" src={brasil} alt="PT-BR" />
                </span>
            ),
        },
        {
            value: "en",
            label: (
                <span className="flex justify-center">
                    <img className="w-6 aspect-auto" src={usa} alt="PT-BR" />
                </span>
            ),
        },
    ];

    return (
        <nav className="flex justify-between items-center bg-cyan-900">
            <ul className="flex items-center">
                <motion.li
                    whileTap={{ scale: 0.9 }}
                    className="p-3 text-xl text-white"
                >
                    <NavLink to="/">
                        <img className="logo aspect-auto" src={logo} alt="Logo" />
                    </NavLink>
                </motion.li>
                <motion.li
                    whileTap={{ scale: 0.9 }}
                    className="p-3 text-xl text-white "
                >
                    <NavLink
                        to="/create"
                        className={({
                            isActive,
                            isPending,
                        }: {
                            isActive: boolean;
                            isPending: boolean;
                        }) => {
                            return isActive ? "active-link" : isPending ? "pending" : "";
                        }}
                    >
                        <a className="hover:text-amber-500 link">Create</a>
                    </NavLink>
                </motion.li>
            </ul>

            <div className="me-4">
                <Select
                    className="bg-cyan-950 border-cyan-800 shadow appearance-none border rounded"
                    options={LANGUAGE_OPTIONS}
                    defaultValue={LANGUAGE_OPTIONS.find(
                        (option) => option.value === lang
                    )}
                    isSearchable={false}
                    onChange={(lang) => {
                        setLang(lang.value);
                        console.log("Selected language:", lang);
                    }}
                />
            </div>
        </nav>
    );
};
