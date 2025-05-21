"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Spinner, Button } from "@nextui-org/react"
import Image from "next/image";
import { useSession, signOut } from "next-auth/react"

const Nav = () => {
    const [user, setUser] = useState();

    const router = useRouter();

    const { data: session, status } = useSession({
        required: false,
    });

    useEffect(() => {
        if (session) setUser(session.user);
    }, [session]);

    return(
        <nav className="relative z-50 h-[92px] flex text-black bg-[#9ffadb]">
      {/* Desktop Navigation */}

            <div className="md:flex hidden lg:gap-9 gap-5 items-center w-4/5 ml-16">
                <div className="flex items-center mr-4">
                    <Link
                        href="/"
                        className="w-[70px] flex justify-end items-center hover:w-[75px] transition-all"
                    >
                        <Image src="/images/plant.png" alt="Banner" width={75} height={75} />
                    </Link>
                </div>
                <Button className="bg-[#d9d9d9] h-[40px] hover:h-[45px] hover:w-[85px] transition-all" onPress={() => router.push('/')} > 
                    Home 
                </Button>
                <Button className="bg-[#d9d9d9] h-[40px] hover:h-[45px] hover:w-[90px] transition-all" onPress={() => {router.push('/gardens')}} > 
                    Hortas 
                </Button>
                {status == "loading" && (
                <div className="flex items-center lg:gap-5 gap-3 ">
                    <Spinner color="white" size="sm" />
                    <span className="text-white font-poppins text-sm">Loading</span>
                </div>
                )}

                {status != "loading" && !user?.name && (
                <Button className="flex font-comfortaa bg-[#d9d9d9] h-[40px] hover:h-[45px] hover:w-[95px] transition-all" onPress={() => router.push("/auth/login")}>
                    Sign In
                </Button>
                )}

                {user?.name && (
                <>
                    <div className="flex justify-end items-center lg:gap-3 gap-2">
                    <Button
                        className="flex font-comfortaa bg-[#d9d9d9] h-[40px]"
                        size="md"
                        onClick={() => {
                            signOut();
                        }}
                    >
                        Sign Out
                    </Button>
                    </div>
                </>
                )}
            </div>
        </nav>
    )
};

export default Nav;