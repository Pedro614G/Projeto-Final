'use client'

import { useEffect, useState } from "react";
import { Button, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"
import { createGarden, getGardensByUser } from "../actions";
import Link from "next/link";


export default function Hortas() {
    const [user,setUser] = useState();
    const [create,setCreate] = useState(false);
    const [formData, setFormData] = useState({name: "", visibility: false, ownerId: ""});
    const [loading, setLoading] = useState(true);
    const [gardens, setGardens] = useState([]);

    const router = useRouter();

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/auth/login')
        }
    });

    const getGardens = async () => {
        const data = await getGardensByUser(user.id);

        if (data.response == "success") setGardens(data.data);
    }

    useEffect(() => {
            if (session) {
                setUser(session.user);
                setLoading(false);
            };
        }, [session]);

    useEffect(() => {
        setFormData((prevState) => ({ ...prevState, ownerId: user?.id}))
        if(user?.id) getGardens()
    }, [user]);

    const orderedGardens = () => {
        const ordered = gardens.sort((a,b) => {return a._count.plants - b._count.plants})

        return ordered;
    }

    const handleChange = (e) => {
        // console.log(formData);
        const value = e.target.value;
        const name = e.target.name;
        if (name == "visibility"){
            if (value == "true") setFormData((prevState) => ({ ...prevState, [name]: true }));
            else setFormData((prevState) => ({ ...prevState, [name]: false }));
        }
        else setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async(e) => {
        setCreate(false)
        e.preventDefault()

        createGarden(formData)
        console.log(formData)

        setFormData({name: "", visibility: false, ownerId: formData.ownerId})

        getGardens()

        console.log("Garden created")
    }

    return (
        <div className="flex flex-col flex-1 w-screen mx-auto p-4 bg-[#d0f9e9]">
            {user?.name ? (
                <div className={`${create ? "items-center justify-center" : "items-start justify-start"} h-full flex flex-1 flex-col mt-5 text-black`}>
                    <div className={`${create ? "flex flex-col min-w-1/3" : "hidden"} bg-[#9ffadb] px-5 py-7 rounded-md`}>
                        <form onSubmit={handleSubmit} className={`space-y-8`}>
                            <div>
                            <label className="block text-sm font-medium">Nome da horta</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ex: Horta 5" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></input>
                            </div>
                            <div>
                            <label className="block text-sm font-medium">Visibilidade</label>
                            <select type="text" name="visibility" value={formData.visibility} onChange={handleChange} placeholder="Privada" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                                <option value={"true"}>  Pública </option>
                                <option value={"false"}> Privada </option>
                            </select>
                            </div>
                            <div className="flex flex-col gap-4 items-center">
                                <button type="submit" className="w-2/3 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-800">Criar horta</button>
                                <Button onPress={() => setCreate(false)} className="w-2/3 py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-800">Cancelar</Button>
                            </div>
                        </form>
                    </div>
                    <div className={`${!create ? "grid grid-cols-4 justify-evenly w-full grow grid-flow-row gap-y-[90px] justify-items-stretch overflow-y-scroll" : "hidden"}  px-6`}>
                        {gardens && orderedGardens().map((garden,index) => {
                            return (
                                <Link href={`gardens/${garden.id}`} key={index} className="bg-[#d9d9d9] w-2/3 px-6 h-[100px] py-4 justify-between justify-self-center flex flex-col"> 
                                    <p> {garden.name} </p> 
                                    <p> Número de plantas: {garden._count.plants} </p> 
                                </Link>
                            )
                        })}
                        <Button className={`${!create ? "flex bg-[#d9d9d9] w-2/3 h-[100px] justify-self-center" : "hidden"}`} onPress={() => setCreate(true)}> Nova horta </Button>
                    </div>
                </div>
                ) : (
                <Spinner className="w-full" color="black" size="lg" />
                )}
        </div>    
    );
}