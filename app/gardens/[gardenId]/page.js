'use client'
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation";

export default function Garden() {
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
      <h1 className="text-2xl font-bold mb-4">Nome da horta</h1>
      
      <Button className="mt-4" > Em desenvolvimento </Button>
    </div>    
  );
}