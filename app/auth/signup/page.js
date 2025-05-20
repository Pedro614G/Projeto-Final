'use client'
import { createUser } from "../../actions";
import { Button } from "@nextui-org/react"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [password, setPassword] = useState ('')
  const [name, setName] = useState ('')
  const [email, setEmail] = useState ('')

  const router = useRouter()

  const handleSubmit = async(e) => {
    e.preventDefault()

    await createUser({email, name, password})

    setEmail('')
    setName('')
    setPassword('')

    console.log("User created")
    router.push("/auth/login")
  }

  return (
    <div className="flex flex-col flex-1 w-screen mx-auto text-black bg-[#d0f9e9] p-4 justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Sign up</h1>
      <form onSubmit={handleSubmit} className="w-1/4 space-y-4">
        <div>
          <label className="block text-sm font-medium">Nome</label>
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Nome" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></input>
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></input>
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></input>
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-800">Sign up</button>
      </form>
      <Button className="mt-4" onPress={() => router.push('/auth/login')}> Já tens conta? Entra agora </Button>
    </div>    
  );
}
