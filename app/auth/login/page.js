'use client'
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [password, setPassword] = useState ('')
  const [email, setEmail] = useState ('')

  const router = useRouter()

  const handleSubmit = async(e) => {
    e.preventDefault()

     signIn("credentials", {
      email: email.toLowerCase(),
      password: password,
      redirect: false,
    }).then((res) => {
      if (res && res.ok) {
        router.push("/");
      } else {
      }
    });
  }

  return (
    <div className="flex flex-col flex-1 w-screen mx-auto text-black bg-[#d0f9e9] p-4 justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Log in</h1>
      <form onSubmit={handleSubmit} className="w-1/4 space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></input>
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></input>
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-800">Log in</button>
      </form>
      <Button className="mt-4" onPress={() => router.push('/auth/signup')}> Não tens conta? Cria uma agora </Button>
    </div>    
  );
}
