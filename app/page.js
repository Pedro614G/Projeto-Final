'use client'
import axios from "axios";
import { createUser } from "./actions";
import { useState } from "react";
import { useSession } from "next-auth/react"
import Autoplayer from "@/components/autoplayer";
import Link from "next/link";
import Image from "next/image";

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
    <div className="text-center w-full">
      <div className="bg-[#92f5d4] mx-auto w-60 p-4  mt-20">
        <p className="text-xl">Uma Horta<br/>Para Todos</p>
      </div>
      <Autoplayer/>
      <div className="grid grid-cols-2 gap-30 mx-auto mt-10 mb-10">
        <Link className="h-50 text-xl p-20" href="/">
          <Image src="/images/Farmer.jpg" alt="Farmer" width={500} height={500}></Image>
        </Link>
        <Link className="h-50 text-xl p-20" href="/">
          <Image src="/images/Produce.jpg" alt="Produce" width={800} height={800}></Image>
        </Link>
      </div>
    </div>
  );
}
