'use client'
import axios from "axios";
import { createUser } from "./actions";
import { useState } from "react";
import { useSession } from "next-auth/react"

export default function Home() {
  const [name, setName] = useState ('')
  const [email, setEmail] = useState ('')

  const { data: session } = useSession({
    required: false,
  });

  const handleSubmit = async(e) => {
    e.preventDefault()

    await createUser({email, name})

    setEmail('')
    setName('')

    console.log("User registered")
  }

  return (
    <div className="flex flex-col flex-1 w-screen mx-auto p-4 bg-white">
      
    </div>    
  );
}
