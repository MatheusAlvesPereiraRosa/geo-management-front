import { useState } from "react"
import { UserForm } from "../../interfaces"
import { Navbar } from "../../components/Navbar"

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

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <Navbar />
            <main className="w-full m-auto">
                <div className="mx-auto flex justify-center align-middle h-full">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="name">Name</label>
                            <input name="name" type="text" value={form.name} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input name="email" type="text" value={form.email} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phoneNumber">phoneNumber</label>
                            <input name="phoneNumber" type="text" value={form.phoneNumber} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Coordenadas</label>
                            <input type="text" />
                            <input type="text" />
                        </div>

                        <button type="submit" className="w-full bg-cyan-900 text-white mt-6 p-3 rounded-md">
                            Enviar
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}