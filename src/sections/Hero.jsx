import { Mail, Download, Code2, Toolbox } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/assets/Button";
import { HeaderText } from "@/assets/HeaderText";

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
                        <img src="./src/assets/cute-pic.jpg" className="w-full aspect-[10/10] object-cover rounded-full"></img>
                    </div>
                </div>

                <div className="lg:text-left gap-5">
                    {/* Text */}
                    <h1 className="text-5xl glow-text md:text-6xl lg:text-7xl leading-tight animate-fade-in animation-delay-100">
                        <span className="text-parchment">About Me</span>
                    </h1>
                    <p className="text-lg text-parchment-dim max-w-lg animate-fade-in">
                        Hi! My name is Ariana <em>(she/her)</em>. I am a <strong>Software Engineering</strong> student with a passion and interest in Game Development. I am a Game Designer with AA studio experience and an aspiring Narrative Designer.<br/><br/> I have also been writing since a young age, crafting narratives and worlds for my own stories and games. I have worked on <strong>Crusader Kings III</strong>, a grand strategy/RPG hybrid game set in the medieval period. I am also the team lead for <strong>Warcraft: Guardians of Azeroth II</strong>, a total conversion mod for Crusader Kings III.<br/><br/>
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
            {/* Education */}
            <HeaderText text="Education"/>
            <div className="flex-col lg:flex-row items-center animate-fade-in animation-delay-300 lg:px-30 glass rounded-2xl m-5">
                <div className="relative space-y-1 border-1-2 py-5 text-center lg:text-left">
                    {EDUCATION.map((school, index) => (
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold md:text-2xl">{school.school}</h3>
                                <p className="font-light text-md text-parchment-dim">{school.degree}</p>
                                <p className="font-light text-md text-muted">{school.note}</p>
                            </div>
                            <div>
                                <p className="font-light text-md text-muted">{school.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Skills */}
            <HeaderText text="Skills"/>
            <div className="grid sm:grid-cols-2 gap-5 m-5">
            {SKILLS.map((item, idx) => (
                <div
                    key={idx}
                    className="glass p-6 rounded-2xl animate-fade-in"
                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                    <div className="w-12 h-12 rounded-xl bg-parchment/10 flex items-center justify-center mb-4 hover:bg-gold/20">
                    <item.icon className="w-6 h-6 text-parchment" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                        <div className="grid grid-cols-3 gap-2">
                        {item.tags.map((itemtag, idx) => (
                            <p className="rounded-full bg-stone-mid px-4 py-2 justify-center flex hover:bg-gold/20">{itemtag}</p>
                        ))}
                    </div>
                    </p>
                </div>
            ))}
        </div>
        </div>
    </section>;
};

const EDUCATION = [
    {
        degree: "BS, Computer Software Engineering",
        school: "Western Governors University",
        year: "Jun. 2028",
        note: "In progress · Skills: Python, C#, Java, HTML/CSS",
    },
    {
        degree: "BS, Game Programming",
        school: "Academy of Art University",
        year: "2024",
        note: "Skills: C++, Level Design, Game Design",
    },
]

const SKILLS = [
    {
        icon: Code2,
        name: "Languages",
        tags: [
            "Python",
            "C#",
            "C++",
            "TypeScript",
            "JavaScript",
            "Lua",
            "GDScript",
            "HTML",
            "CSS",
        ],
    },
    {   
        icon: Toolbox,
        name: "Frameworks/Engines/Tools",
        tags: [".NET", "WPF", "WinForms", "Godot", "Unity", "UE5", "Blender", "Figma", "SQL"],
    }
]