import { useState } from "react"
import { UserForm } from "../../interfaces"
import { Navbar } from "../../components/Navbar"

import { FaUserLarge, FaSquarePhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GrWaypoint } from "react-icons/gr";

import { motion } from 'framer-motion'

import axios from "axios";

export const Form = () => {
    const [form, setForm] = useState<UserForm>({
        name: "",
        email: "",
        phoneNumber: "",
        coordinates: {
            x: "",
            y: ""
        }
    })
    const [message, setMessage] = useState({})

    const createUser = async () => {
        await axios
            .post("http://localhost:3000/users/create", form)
            .then((res) => {
                setMessage(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let { name, value } = e.target
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleCoordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            coordinates: {
                ...prevForm.coordinates,
                [name]: value
            }
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(form)
        createUser()
    }

    return (
        <>
            <Navbar />
            <div className="flex justify-center my-12">
                <motion.form
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.3}}
                    onSubmit={handleSubmit} className="bg-cyan-900 shadow-md rounded-lg px-8 pt-6 pb-8"
                >
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                        <div className="">
                            <div className="flex items-center mb-2">
                                <span className="me-2"><FaUserLarge className="icon text-white" size={16} /></span>
                                <label htmlFor="name" className="text-md block text-white font-bold">Nome</label>
                            </div>
                            <input
                                name="name"
                                type="text"
                                placeholder="Someone"
                                value={form.name}
                                onChange={handleChange}
                                className="bg-cyan-950 border-cyan-800 shadow appearance-none border rounded w-full py-2 px-3 text-white placeholder:text-slate-400 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="">
                            <div className="flex items-center mb-2">
                                <span className="me-2"><MdEmail className="icon text-white" size={18} /></span>
                                <label htmlFor="email" className="text-md block text-white font-bold ">Email</label>
                            </div>
                            <input
                                name="email"
                                type="text"
                                placeholder="Someone@gmail.com"
                                value={form.email}
                                onChange={handleChange}
                                className="bg-cyan-950 border-cyan-800 shadow appearance-none border rounded w-full py-2 px-3 text-white placeholder:text-slate-400 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="">
                            <div className="flex items-center mb-2">
                                <span className="me-2"><FaSquarePhoneFlip className="icon text-white" size={18} /></span>
                                <label htmlFor="phoneNumber" className="text-md block text-white font-bold ">Telefone</label>
                            </div>
                            <input
                                name="phoneNumber"
                                type="text"
                                placeholder="(XX) XXXXX XXXX"
                                value={form.phoneNumber}
                                onChange={handleChange}
                                className="bg-cyan-950 border-cyan-800 shadow appearance-none border rounded w-full py-2 px-3 text-white placeholder:text-slate-400 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>

                    <div className="border-t-4 mt-6 pt-4 border-cyan-950 grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                        <div className="">
                            <div className="flex items-center mb-2">
                                <span className="me-2"><GrWaypoint className="icon text-white" size={18} /></span>
                                <label htmlFor="x" className="text-md block text-white font-bold ">Coordenadas - X</label>
                            </div>
                            <input
                                name="x"
                                type="text"
                                placeholder="XXX.XXX"
                                value={form.coordinates.x}
                                onChange={handleCoordChange}
                                className="bg-cyan-950 border-cyan-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight placeholder:text-slate-400 focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="">
                            <div className="flex items-center mb-2">
                                <span className="me-2"><GrWaypoint className="icon text-white" size={18} /></span>
                                <label htmlFor="y" className="text-md block text-white font-bold ">Coordenadas - Y</label>
                            </div>
                            <input
                                name="y"
                                type="text"
                                placeholder="XXX.XXX"
                                value={form.coordinates.y}
                                onChange={handleCoordChange}
                                className="bg-cyan-950 border-cyan-800 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight placeholder:text-slate-400 focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>

                    <button type="submit" className="w-full grid grid-cols-subgrid bg-amber-600 text-white mt-6 hover:bg-white hover:text-amber-600 transition p-3 rounded-md">
                        Enviar
                    </button>
                </motion.form>
            </div>
        </>
    )
}