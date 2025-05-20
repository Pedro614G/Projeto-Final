'use client'

import { useEffect, useState } from "react";
import { Button, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"
import { createGarden } from "../actions";

export default function Hortas() {
    const [user,setUser] = useState();
    const [create,setCreate] = useState(false);
    const [formData, setFormData] = useState({name: "", visibility: false, ownerId: ""});
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/auth/login')
        }
    });

    useEffect(() => {
            if (session) {
                setUser(session.user);
                setLoading(false);
            };
        }, [session]);

    useEffect(() => {
        console.log(session,user);
        setFormData((prevState) => ({ ...prevState, ownerId: user?.id}))
    }, [user]);

    const handleChange = (e) => {
        // console.log(formData);
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async(e) => {
        setCreate(false)
        e.preventDefault()

        createGarden(formData)
        console.log(formData)

        //setFormData({name: "", visibility: false, ownerId: ""})

        console.log("Garden created")
    }

    return (
        <div className="flex flex-col flex-1 w-screen mx-auto p-4 bg-[#d0f9e9]">
            {!loading ? (
                <div className="flex flex-col md:flex-row mt-5 text-black">
                    <Button className={`${!create ? "flex" : "hidden"}`} onPress={() => setCreate(true)}> Nova horta </Button>
                    <form onSubmit={handleSubmit} className={`${create ? "" : "hidden"} w-1/4 space-y-4`}>
                            <div>
                            <label className="block text-sm font-medium">Nome da horta</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ex: Horta 5" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></input>
                            </div>
                            <div>
                            <label className="block text-sm font-medium">Visibilidade</label>
                            <select type="text" name="visibility" value={formData.visibility} onChange={handleChange} placeholder="Privada" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                                <option value={true}>  Pública </option>
                                <option value={false}> Privada </option>
                            </select>
                            </div>
                            <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-800">Criar horta</button>
                            <Button onPress={() => setCreate(false)} className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-800">Cancelar</Button>
                        </form>
                </div>
                ) : (
                <Spinner className="w-full" color="black" size="lg" />
                )}
        </div>    
    );
}