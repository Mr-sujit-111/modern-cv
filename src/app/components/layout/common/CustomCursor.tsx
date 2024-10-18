"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseListener = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseListener);

        return () => window.removeEventListener("mousemove", mouseListener);
    }, []);

    return (
        <>
            {/* Custom cursor */}
            <motion.div
                animate={{ x: position.x - 24, y: position.y - 24 }} // Adjust for custom cursor size
                className="w-5 h-5 bg-background rounded-full border border-white fixed pointer-events-none z-50"
            />
        </>
    );
};
