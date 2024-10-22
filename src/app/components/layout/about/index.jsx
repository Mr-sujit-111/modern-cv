"use client"

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBriefcase, FaFolderOpen, FaUser } from "react-icons/fa";


export default function AboutMe() {
    const [yearsOfExperience, setYearsOfExperience] = useState(0);

    useEffect(() => {
        const startYear = 2021; // Replace with the year you started your development journey
        const currentYear = new Date().getFullYear();
        setYearsOfExperience(currentYear - startYear);
    }, []);
    const [activeTab, setActiveTab] = useState("intro")

    const tabs = [
        { id: "intro", label: "Introduction", icon: <FaUser className="w-5 h-5" /> },
        { id: "experience", label: "Experience", icon: <FaBriefcase className="w-5 h-5" /> },
        { id: "projects", label: "Projects", icon: <FaFolderOpen className="w-5 h-5" /> },
    ];

    const content = {
        intro: (
            <>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12"
                >
                    {/* Left Side: Text */}
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-primary to-secondary text-white">
                            {"Hello, I'm Sujit Bhanderi"}
                        </h2>
                        <p className="text-lg leading-relaxed">
                            {`I'm a passionate Next.js developer with ${yearsOfExperience}+ years of experience in building modern web applications. I love creating efficient, scalable, and user-friendly solutions to complex problems.`}
                        </p>
                        <p className="text-lg leading-relaxed">
                            {"My goal is to create fully responsive, pixel-perfect designs with a focus on tiny detailing. I enjoy working on the logical aspects, including debugging and troubleshooting to deliver robust applications."}
                        </p>
                        <p className="text-lg leading-relaxed">
                            {"When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while reading tech blogs."}
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <Image
                            src="/images/sujitpic.jpg"
                            alt="John Doe"
                            width={320}  // The width should match 'w-80' (80 * 4 = 320px)
                            height={320} // The height should match 'h-80' (80 * 4 = 320px)
                            className="object-cover rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.3)]"
                        />
                    </div>
                </motion.div>

                {/* Centered Counters */}
                <motion.div
                    className="flex justify-center items-center space-x-8 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <div className="text-center">
                        <span className="text-7xl font-bold text-primary">{yearsOfExperience}+</span>
                        <p className="text-sm text-muted-foreground">Years Experience</p>
                    </div>
                    <div className="text-center">
                        <span className="text-7xl font-bold text-primary">15+</span>
                        <p className="text-sm text-muted-foreground">Projects Completed</p>
                    </div>
                    <div className="text-center">
                        <span className="text-7xl font-bold text-primary">8+</span>
                        <p className="text-sm text-muted-foreground">Happy Clients</p>
                    </div>
                </motion.div>
            </>

        ),
        experience: (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <h2 className="text-3xl font-bold bg-clip-text text-white">
                    Work Experience
                </h2>
                <ul className="space-y-6">
                    {[
                        {
                            title: "Senior Frontend Developer",
                            company: "Upwork",
                            period: "2023 - Present",
                            description:
                                "Full time freelancer",
                        },
                        {
                            title: "Frontend Developer",
                            company: "SoftX Solution",
                            period: "2022 - 2023",
                            description:
                                "Developed and maintained various web applications using React and NextJs.",
                        },
                        {
                            title: "Junior Developer",
                            company: "SoftX Solution",
                            period: "2021 - 2022",
                            description:
                                "Assisted in the development of responsive websites and web applications.",
                        },
                    ].map((job, index) => (
                        <motion.li
                            key={index}
                            className="bg-muted p-6 rounded-lg shadow-[0_4px_15px_rgba(255,255,255,0.3)] hover:shadow-[0_4px_15px_rgba(255,255,255,0.3)] transition-shadow duration-300"

                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="font-bold text-xl text-primary">{job.title}</h3>
                            <p className="text-sm text-muted-foreground">{job.company}</p>
                            <p className="text-sm text-muted-foreground">{job.period}</p>
                            <p className="mt-2">{job.description}</p>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        ),
        projects: (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    My Projects
                </h2>
                <p className="text-lg leading-relaxed">
                    {"I've worked on a diverse range of projects, from small business websites to large-scale enterprise applications. Here's a breakdown of my project experience:"}
                </p>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {[
                        { category: "Fulltime Projects", count: 2 },
                        { category: "Part time projects", count: 6 },
                        { category: "Design related Projects", count: 3 },
                        { category: "API Integrations", count: 2 },
                    ].map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-muted p-6 rounded-lg  transition-shadow duration-300 shadow-[0_4px_15px_rgba(255,255,255,0.3)] "
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <h3 className="text-xl font-semibold text-primary">{project.category}</h3>
                            <p className="text-3xl font-bold mt-2">{project.count}</p>
                            <p className="text-sm text-muted-foreground">Projects Completed</p>
                        </motion.div>
                    ))}
                </motion.div>
                <p className="text-center text-lg font-semibold mt-6">
                    Total Projects Completed: <span className="text-primary">14+</span>
                </p>
            </motion.div>
        ),
    }

    return (
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="container max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-6xl font-extrabold text-center mb-12  text-white ">
                    About Me
                </h1>

                <div className="mb-12">
                    <nav className="flex justify-center space-x-4">
                        {tabs.map((tab) => (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${activeTab === tab.id
                                    ? "bg-white text-black font-semibold shadow-lg"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tab.icon}
                                <span>{tab.label}</span>
                            </motion.button>
                        ))}
                    </nav>
                </div>
                <motion.div
                    className=" p-8 overflow-hidden"
                    layout
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {content[activeTab]}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </div>
    )
}