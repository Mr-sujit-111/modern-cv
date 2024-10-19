"use client"
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { ProjectDetails } from "./ProjectDetails";

export const Portfolio = () => {
    const projectData = [
        {
            id: 1,
            title: "T-Shirt Design App",
            image: "/assets/projects/project-1.png",
            description:
                "A 'T-shirt Design' app that people can design and customize tshirts with diffrent colours & diffrent tatoos",
            link: "https://t-shirt-design-5818e.web.app/",
            technologies: []
        },
        {
            id: 1,
            title: "Multi Step Image Selection",
            image: "/assets/projects/project-2.png",
            description:
                "This app is build in plane html,css and javascript, pure javascript is used for the develope multi step image selection with download functionality",
            link: "https://animatedapp.netlify.app/",
            technologies: []
        },
        {
            id: 2,
            title: "Amazon Clone",
            image: "/assets/projects/project-3.png",
            description:
                "NextJs project & NextAuth for the authentificate user also provide stripe checkout for payment particular item(s) and store all data in firestore.",
            link: "https://amazon-clone-928j.vercel.app/",
            technologies: []
        },
        {
            id: 3,
            title: "Google Clone",
            image: "/assets/projects/project-4.png",
            description:
                "A Google-clone is completely redesign google with reactjs and provide google apis for user result also provide design.",
            link: "https://clone-61cf3.web.app/",
            technologies: []
        },
        {
            id: 4,
            title: "Slack-clone App",
            image: "/assets/projects/project-5.png",
            description:
                "A Slack-clone is one of the best chat-app which is completely build in reactjs with styled component for styling.",
            link: "https://slackclone-6f0e0.web.app/",
            technologies: []
        },
        {
            id: 5,
            title: "Weather App",
            image: "/assets/projects/project-6.png",
            description:
                "A Weather app where you can easily check weather information, currunt temprature and wind level",
            link: "https://weather-app-403d1.web.app/",
            technologies: []
        },
    ];
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    return (
        <div ref={ref} className="relative">
            <article className="sticky top-0 left-0  flex flex-col gap-4">
                <header className="w-full text-center py-8 bg-gray-800">
                    <h2 className="text-center text-white text-2xl md:text-7xl">
                        Completed Projects
                    </h2>
                </header>
                <motion.div style={{ scaleX }} className="h-1 rounded-xl bg-white" />
            </article>
            {projectData.map(item => (
                <ProjectDetails key={item.id} {...item} />
            ))}
        </div>
    );
};
