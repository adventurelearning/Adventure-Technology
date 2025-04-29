import React from 'react';
import { motion } from 'framer-motion';
import {
    // Front-End
    BiLogoReact,
    BiLogoAngular,
    BiLogoVuejs,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoJavascript,
    // Back-End
    // BiLogoNodejs,
    // BiLogoPython,
    
    // BiLogoPhp,
    // BiLogoJava,
} from 'react-icons/bi'; 
// import {
//     FaAws,
//     FaGoogle,
//     FaGithub,
//     FaDocker,
//     FaKubernetes,
//     FaJenkins,
// } from 'react-icons/fa'; 
// import { SiMicrosoftsqlserver, SiMicrosoftazure } from 'react-icons/si'; 

// import {
//     FaMysql,
//     FaMongodb,
//     FaPostgresql,
// } from 'react-icons/fa'; 

const WebTools = () => {
    const technologies = {
        'Front-End': [
            { name: 'React', icon: BiLogoReact, color: 'text-blue-500' },
            { name: 'Angular', icon: BiLogoAngular, color: 'text-red-500' },
            { name: 'Vue.js', icon: BiLogoVuejs, color: 'text-green-600' },
            { name: 'HTML5', icon: BiLogoHtml5, color: 'text-orange-500' },
            { name: 'CSS3', icon: BiLogoCss3, color: 'text-blue-600' },
            { name: 'JavaScript', icon: BiLogoJavascript, color: 'text-yellow-400' },
        ],
        // 'Back-End': [
        //     { name: 'Node.js', icon: BiLogoNodejs, color: 'text-green-600' },
        //     { name: 'Python', icon: BiLogoPython, color: 'text-yellow-500' },
         
        //     { name: 'PHP', icon: BiLogoPhp, color: 'text-indigo-500' },
        //     { name: 'Java', icon: BiLogoJava, color: 'text-red-700' },
        // ],
        // 'Databases': [
        //     { name: 'MySQL', icon: FaMysql, color: 'text-blue-600' },
        //     { name: 'MongoDB', icon: FaMongodb, color: 'text-green-600' },
        //     { name: 'PostgreSQL', icon: FaPostgresql, color: 'text-blue-800' },
        //     { name: 'SQL Server', icon: SiMicrosoftsqlserver, color: 'text-red-600' },
        // ],
        // 'Cloud Services': [
        //     { name: 'AWS', icon: FaAws, color: 'text-orange-600' },
        //     { name: 'Google Cloud', icon: FaGoogle, color: 'text-blue-500' },
        //     { name: 'Microsoft Azure', icon: SiMicrosoftazure, color: 'text-blue-700' },
        // ],
        // 'Tools': [
        //     { name: 'GitHub', icon: FaGithub, color: 'text-gray-800' },
        //     { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
        //     { name: 'Kubernetes', icon: FaKubernetes, color: 'text-blue-600' },
        //     { name: 'Jenkins', icon: FaJenkins, color: 'text-red-600' },
        // ],
    };

    return (
        <div className="bg-black py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12 tracking-tight">
                    Technologies We Use
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    {Object.entries(technologies).map(([category, techList], index) => (
                        <div key={category} className="space-y-4">
                            <h3
                                className={`text-2xl font-semibold text-white text-center
                                            ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                            >
                                {category}
                            </h3>
                            <div
                                className={`flex flex-wrap justify-center gap-6
                                            ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                            >
                                {techList.map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                        className="flex items-center gap-3 p-4 rounded-lg bg-gray-800/50
                                                 border border-gray-700 shadow-md backdrop-blur-md"
                                    >
                                        <tech.icon className={`w-8 h-8 ${tech.color}`} />
                                        <span className="text-white font-medium">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default WebTools;
