"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { RiScrollToBottomFill } from "react-icons/ri";
import TypewriterComponent from "typewriter-effect";



export const Hero = () => {
    const sliderVariants = {
        initial: {
            x: 0,

        },
        animate: {
            x: -220,
            transition: {
                repeat: Infinity,
                duration: 10,
            },
        },
    };
    return (
        <div className="h-[calc(100vh-40px)] text-white  overflow-hidden relative">
            <motion.article

                className="container max-w-7xl mx-auto h-full xl:h-3/4 flex flex-col gap-4 md:gap-8 items-center justify-center text-center"
            >
                <motion.h2

                    className="text-xl md:text-4xl flex gap-1 uppercase"
                >
                    {"Sujit Bhanderi"?.split("")?.map((item, index) => {
                        console.log("🚀 bgf", item?.length);
                        return <motion.span
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            transition={{ duration: 0.3, delay: index * 0.2 }}

                            key={index}>{item?.trim()?.length > 0 ? item : "\u00A0"}</motion.span>;
                    })}

                </motion.h2>
                <motion.h1
                    className="text-4xl md:text-6xl 2xl:text-7xl capitalize"
                >

                    <TypewriterComponent
                        options={{
                            strings: ['Frontend Developer', 'ReactJs Developer', "NextJs Developer"],
                            autoStart: true,
                            loop: true,
                        }}
                    />

                </motion.h1>
                <motion.div
                    className="flex flex-col md:flex-row gap-4 z-10"
                >
                    <Link href={"#portfolio"}>
                        <motion.button
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            transition={{ duration: 1, }}
                            type="button"
                            className="p-2 md:p-4 transition-all duration-500 border border-white rounded-lg bg-transparent text-white font-light text-base cursor-pointer "
                        >
                            Projects
                        </motion.button>
                    </Link>
                    <Link href={"#contact"}>
                        <motion.button
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            transition={{ duration: 1, }}
                            className="p-2 md:p-4 border transition-all duration-500 border-white rounded-lg bg-white text-black font-light text-base "
                        >
                            Contact Me
                        </motion.button>
                    </Link>
                </motion.div>

                <Link href={"#second"}>
                    <motion.button
                        className="w-12 h-12 animate-pulse"
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <RiScrollToBottomFill className="h-full w-full" />
                    </motion.button>
                </Link>

            </motion.article>
            <motion.div
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={{ duration: 1, }}
            >
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={sliderVariants}
                    className="absolute select-none text-opacity-45 text-[30vh] -bottom-28 whitespace-nowrap text-hero-bottom w-1/2 font-bold text-[#ffffff09]"
                >
                    Problem Solver, Developer
                </motion.div>
            </motion.div>

        </div >
    );
};
