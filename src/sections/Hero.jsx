import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/assets/Button";
import { motion } from "framer-motion";

export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
            <img
                src="https://cdnb.artstation.com/p/assets/images/images/096/607/169/4k/philipp-a-urlich-cpncept806-4.webp"
                alt="Artwork by Philipp A. Urlich"
                className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        <div className="container h-full mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between xl:p-40 lg:p-30 md:p-20">
                <div className="lg:text-left">
                    {/* Text */}
                    <h1 className="text-5xl glow-text md:text-6xl lg:text-7xl leading-tight animate-fade-in animation-delay-100">
                        <span className="text-parchment ">About Me</span>
                    </h1>
                    <p className="text-lg text-parchment-dim max-w-lg animate-fade-in">
                        holderplace
                    </p>
                
                    {/* Socials */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-200">
                        {[
                            { icon: FaGithub, href: "https://github.com/helloruhe" },
                            { icon: FaLinkedin, href: "https://www.linkedin.com/in/tranumn/" },
                            { icon: Mail, href: "mailto:arianatranumn@gmail.com" },
                        ].map((social, idx) => (
                            <a
                            key={idx}
                            href={social.href}
                            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                            {<social.icon className="w-5 h-5" />}
                            </a>
                        ))}
                    </div>
                </div>
                
                {/* Photo */}
                <div className="relative animate-fade-in animation-delay-300 relative glass rounded-xl p-3 glow-border">
                <div className="w-[250px] h-[250px] xl:w-[300px] xl:h-[300px]">
                    <img src="./src/assets/cute-pic.jpg" className="w-full aspect-[10/10] object-cover rounded-2xl"></img>
                </div>
                </div>
            </div>
        </div>


    </section>;
};