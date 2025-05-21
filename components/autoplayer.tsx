"use client"
import { url } from 'inspector';
import { useState, useEffect } from 'react'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"

function Autoplayer() {
    const [currentIndex, setCurrentindex] = useState(0);
    const slides = [
        {
            url: "https://images.unsplash.com/photo-1631981798865-e0216d05b443?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            url: "https://images.unsplash.com/photo-1615992955236-ec38cbfc6fe2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            url: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            url: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            url: "https://images.unsplash.com/photo-1584479898061-15742e14f50d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        }
    ]

    useEffect(() => {
        const autoplay = setInterval(() => {
            nextSlide()
        }, 3000)

        return () => clearInterval(autoplay)
    }, [currentIndex])

    const prevSlide = () => {
        setCurrentindex((prevIndex) => (prevIndex === 0 ? slides.length -1 : prevIndex - 1))
    }

    const nextSlide = () => {
        setCurrentindex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
    }

    const Arrow = ({direction, onClick}) => (
      <div className='hidden group-hover:block absolute top-[45%] translate-x-0 translate-y-[50%] text-2xl rounded-full p-2 text-white cursor-pointer'
      style={{[direction]: "20px"}}>
        {
          direction === "left" ? (
            <BsFillArrowLeftCircleFill onClick={onClick} size={25}/>
          ):(
            <BsFillArrowRightCircleFill onClick={onClick} size={25}/>
          )
        }
      </div>
    )

    return (
    <div className='max-w-[800px] h-[500px] w-full m-auto py-16 px-4 relative group'>
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
        className='w-full h-full rounded-2xl bg-center bg-cover duration-100'></div>
        <Arrow direction="left" onClick={prevSlide}/>
        <Arrow direction="right" onClick={nextSlide}/>
    </div>
  )
}


export default Autoplayer