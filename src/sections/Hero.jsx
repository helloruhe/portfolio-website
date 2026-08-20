import { Mail, Download, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/assets/Button";
import { HeaderText } from "@/assets/HeaderText";
import myphoto from "@/assets/images/cute-pic.jpg";

export const Hero = () => {
    return <section className="mx-auto relative min-h-screen flex items-center overflow-hidden xl:p-20 p-10 my-10">
        <div className="container h-full mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between p-3 lg:mx-30 mx-10 gap-10">
                {/* Background */}
                <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_100%)]">
                    <img
                        src="https://cdnb.artstation.com/p/assets/images/images/096/607/169/4k/philipp-a-urlich-cpncept806-4.webp"
                        alt="Artwork by Philipp A. Urlich"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
                </div>
                {/* Photo */}
                <div className="relative animate-fade-in animation-delay-300 relative glass rounded-full p-3 glow-border">
                    <div className="w-[250px] h-[250px] xl:w-[300px] xl:h-[300px]">
                        <img src={myphoto} className="w-full aspect-[10/10] object-cover rounded-full"></img>
                    </div>
                </div>

                <div className="lg:text-left gap-5">
                    {/* Text */}
                    <h1 className="text-6xl glow-text md:text-7xl lg:text-8xl leading-tight animate-fade-in animation-delay-100">
                        <span className="text-parchment">About Me</span>
                    </h1>
                    <br/>
                    <h2 className="text-xl glow-text leading-tight animate-fade-in animation-delay-100">
                        <MapPin className="inline-block mr-2" />
                        <span className="text-parchment">New York, NY</span>
                    </h2>
                    <br/>
                    <p className="text-xl text-parchment-dim max-w-lg animate-fade-in">
                        Hi! My name is Ariana <em>(she/her)</em>. I am a Narrative Designer with AA studio experience and a background in writing and Software Engineering.  I have also been writing since a young age, crafting narratives and worlds for my own stories and games.<br/><br/>I have worked on <strong>Crusader Kings III</strong>, a grand strategy/RPG hybrid game set in the medieval period. I am also the team lead for <strong>Warcraft: Guardians of Azeroth II</strong>, a total conversion mod for Crusader Kings III.<br/><br/>As a <strong>Software Engineering</strong> student, I have developed strong problem-solving skills, accompanied by the ability to work with complex systems, collaborate, and see a game world as an interconnected "web", with all disciplines spinning off of one another.<br/><br/>
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
                                target="_blank"
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:bg-gold transition-all duration-300"
                            >
                                {<social.icon className="w-5 h-5 " />}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>;
};
