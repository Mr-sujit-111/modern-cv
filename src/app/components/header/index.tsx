'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconType } from 'react-icons'
import { HiEnvelope, HiHome } from 'react-icons/hi2'
import { MdWork } from 'react-icons/md'
import { useState, useEffect } from 'react'
import { GiTechnoHeart } from 'react-icons/gi'
import { FaUser } from 'react-icons/fa'

interface NavItem {
    name: string
    path: string
    icon: IconType
}

const navData: NavItem[] = [
    { name: 'home', path: '#home', icon: HiHome },
    { name: 'About', path: '#about', icon: FaUser },
    { name: 'Technologies', path: '#tech', icon: GiTechnoHeart },
    { name: 'projects', path: '#portfolio', icon: MdWork },
    { name: 'contact', path: '#contact', icon: HiEnvelope },
]



export default function Navigation() {
    const pathname = usePathname()
    const [isMobile, setIsMobile] = useState(false)

    // Check for screen size changes to determine if mobile view
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const navVariants = {
        hidden: { opacity: 0, },
        visible: {
            opacity: 1,
            x: isMobile ? 0 : 14,
            y: isMobile ? -10 : 0,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    }

    return (
        <motion.nav
            className={`${isMobile ? 'fixed bottom-0 px-5 w-full' : 'fixed left-0   h-screen'} 
            flex items-center justify-center gap-y-4 z-50`}
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className={`flex ${isMobile ? 'flex-row w-full justify-around py-3' : 'flex-col items-center justify-center gap-y-10 h-max px-5 py-8'} 
            bg-white/10 backdrop-blur-sm text-xl rounded-full`}>
                {navData.map((item) => (
                    <motion.div key={item.path} variants={itemVariants}>
                        <Link
                            href={item.path}
                            className={`${pathname === item.path ? 'text-accent' : ''} relative flex items-center group hover:text-accent transition-all duration-300`}
                        >
                            <div className={`${isMobile ? 'hidden' : 'absolute pl-10 -left-2 hidden group-hover:flex'}`}>
                                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                                    <div className="text-[12px] text-background leading-none font-semibold capitalize">{item.name}</div>
                                    <div className="border-solid border-r-white border-r-8 border-y-transparent border-y-[6px] border-l-0 absolute -left-2"></div>
                                </div>
                            </div>
                            <div>
                                <item.icon className={`text-white  ${isMobile ? 'text-3xl' : ''}`} />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.nav>
    )
}
