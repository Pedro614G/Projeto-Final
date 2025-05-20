'use client'
import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";

import { useRouter, useParams } from "next/navigation";
import { getGardenById, deleteGarden } from "../../actions"
import { 
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@nextui-org/react";

export default function Garden() {
    const params = useParams();
    const { isOpen, onOpenChange, onOpen } = useDisclosure();
    const [garden, setGarden] = useState();

    const id = params.gardenId;

    const getGarden = async () => {
        const data = await getGardenById(id)
        if (data.response == "success") setGarden(data.data)
    }

    useEffect(() => {
        getGarden()
    }, [])

    const [email, setEmail] = useState ('')

    const router = useRouter()

    const handleYes = async(e) => {
        e.preventDefault()

        deleteGarden(id)
        router.push("/gardens")
    }

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
        <>
            <div className="flex flex-col flex-1 w-screen mx-auto text-black bg-[#d0f9e9] p-8 justify-center items-center">
                <div className="flex-1 flex flex-col p-4 bg-[#9ffadb] w-full">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-2xl font-bold mb-4">{garden ? garden.name : "Nome da horta"}</h1>
                        <Button className="bg-[#f61060] text-white rounded-xl" onPress={() => {
                            onOpen();
                        }}> 
                            Apagar horta 
                        </Button>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">
                        Apagar Horta
                    </ModalHeader>
                    <ModalBody>
                        <p>
                        Tens a certeza que queres apagar esta horta?
                        </p>
                    </ModalBody>
                    <ModalFooter className="flex justify-center">
                        <Button color="danger" variant="solid" onPress={() => onClose()}>
                        Close
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>    
    );
}