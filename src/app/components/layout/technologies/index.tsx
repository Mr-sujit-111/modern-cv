"use client";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const technologies = [
    { name: 'ReactJs', icon: 'logos:react' },
    { name: 'NextJS', icon: 'logos:nextjs-icon' },
    { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
    { name: 'Framer Motion', icon: 'logos:framer' },
    { name: 'TypeScript', icon: 'logos:typescript-icon' },
    { name: 'JavaScript', icon: 'logos:javascript' },
    { name: 'MUI', icon: 'logos:material-ui' },
    { name: 'CSS', icon: 'logos:css-3' },
    { name: 'SCSS', icon: 'logos:sass' },
    { name: 'HTML', icon: 'logos:html-5' },
    { name: 'GitHub', icon: 'logos:github-icon' },
    { name: 'GitLab', icon: 'logos:gitlab' },
    { name: 'Jira', icon: 'logos:jira' },
    { name: 'Firebase', icon: 'logos:firebase' },
    { name: 'TokenAuth', icon: 'logos:auth0-icon' },
    { name: 'Captcha', icon: 'logos:recaptcha' },
    { name: 'Stripe Payment', icon: 'logos:stripe' },
    { name: 'PayPal', icon: 'logos:paypal' }
];

const hoverEffect = {
    scale: 1.2,
    opacity: 1,
    rotate: 10,
    boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.8)',
};

const tooltipVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const TechnologyStackPage = () => {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    return (
        <div className="relative flex flex-col items-center h-screen bg-gray-900 overflow-hidden">
            {/* Full Responsive Header */}
            <header className="w-full text-center py-8 bg-gray-800">
                <h2 className="text-center text-white text-2xl md:text-7xl">
                    Technology Stack
                </h2>
            </header>

            {/* Background Blur Effect */}
            <motion.div
                className="absolute inset-0 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
            />

            {/* Technology Group */}
            <div className=" h-full w-full max-w-7xl items-center justify-center flex">
                <div className="grid grid-cols-3 items-center ustify-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-24">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="relative w-[90px] h-[90px] flex-shrink-0  md:w-32 md:h-32 rounded-full flex items-center justify-center bg-gray-800 cursor-pointer group"
                            whileHover={{ ...hoverEffect }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            onMouseEnter={() => setHoveredTech(tech.name)}
                            onMouseLeave={() => setHoveredTech(null)}
                        >
                            {/* Iconify Icon */}
                            <Icon
                                icon={tech.icon}
                                className="w-8 h-9 md:w-16 md:h-16 text-white"
                            />

                            {/* Tooltip with Notch */}
                            {hoveredTech === tech.name && (
                                <motion.div
                                    className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-800 text-white text-sm rounded-md shadow-md"
                                    variants={tooltipVariant}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    transition={{ duration: 0.3 }}
                                >
                                    {tech.name}
                                    {/* Tooltip Notch */}
                                    <div className="absolute inset-x-0 bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-8 border-t-gray-800 border-l-8 border-l-transparent border-r-8 border-r-transparent" />
                                </motion.div>
                            )}

                            {/* Hover Wave Animation */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-4 border-indigo-500"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 0.3, scale: 1 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechnologyStackPage;
