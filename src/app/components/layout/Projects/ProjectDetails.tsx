'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'

interface ProjectDetailsProps {
    id: number
    title: string
    image: string
    description: string
    link: string
    technologies: string[]
}

export const ProjectDetails = ({
    title,
    image,
    description,
    link,
    technologies,
}: ProjectDetailsProps) => {
    const ref = useRef(null)

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    }

    const getTechIcon = (tech: string) => {
        switch (tech.toLowerCase()) {
            case 'react':
                return <FaReact />
            case 'node':
                return <FaNodeJs />
            case 'database':
                return <FaDatabase />
            default:
                return null
        }
    }

    return (
        <div className="relative w-full h-screen snap-center flex items-center justify-center overflow-hidden">
            <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="absolute z-0"
            />
            <motion.div
                className={`absolute transition-all duration-500 inset-0  z-10
                ${isHovering ? "bg-black bg-opacity-50 " : "bg-black bg-opacity-20 "}`}
                animate={{
                    backdropFilter: isHovering ? "blur(5px)" : "blur(1px)",
                    WebkitBackdropFilter: isHovering ? "blur(5px)" : "blur(1px)",
                }}
                transition={{ duration: 0.3 }}
            />
            <motion.article
                ref={ref}
                className="relative group z-20 max-w-7xl w-full flex flex-col items-center justify-center gap-8 h-full p-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h3
                    className="text-4xl cursor-pointer md:text-5xl lg:text-6xl text-white font-bold text-center"
                    variants={itemVariants}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {title}
                </motion.h3>
                <motion.p
                    className="text-gray-200 cursor-pointer text-base md:text-lg lg:text-xl max-w-2xl text-center"
                    variants={itemVariants}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {description}
                </motion.p>
                <motion.div className="flex flex-wrap justify-center gap-4" variants={itemVariants}>
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={`${tech}-${index}`} // Use both tech and index to create a unique key
                            className="flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-4 py-2"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={itemVariants} // Ensure each item gets its own animation
                        >
                            {getTechIcon(tech)}
                            <span className="text-white">{tech}</span>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    variants={itemVariants}>
                    <Link href={link} target="_blank">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black font-semibold rounded-full px-8 py-3 text-lg transition-all duration-300 hover:bg-opacity-90"
                        >
                            See Demo
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.article>
            <motion.div
                className="pointer-events-none absolute inset-0 z-30"
                animate={{
                    background: isHovering
                        ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29,78,216,0.15), transparent 80%)`
                        : "none",
                }}
            />
        </div>
    )
}
