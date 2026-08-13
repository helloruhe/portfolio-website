import { HeaderText } from "@/assets/HeaderText";
import { Code2, Toolbox } from "lucide-react";

export const Skills = () => {
    return <section className="mx-auto relative min-h-screen flex items-center overflow-hidden">

        <div className="container h-full mx-auto">
            <div className="flex flex-col items-center justify-between p-3 lg:mx-30 mx-10 gap-10">
                {/* Skills */}
                <HeaderText text="Skills"/>
                <div className="grid sm:grid-cols-2 gap-5 m-5">
                {SKILLS.map((item, idx) => (
                    <div
                        key={idx}
                        className="glass p-10 rounded-2xl animate-fade-in"
                        style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-parchment/10 flex items-center justify-center mb-4 hover:bg-gold/20">
                        <item.icon className="w-6 h-6 text-parchment" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-md text-muted-foreground">
                            <div className="grid grid-cols-3 gap-3">
                            {item.tags.map((itemtag, idx) => (
                                <p className="rounded-full bg-stone-mid px-4 py-2 justify-center flex hover:bg-gold/20">{itemtag}</p>
                            ))}
                        </div>
                        </p>
                    </div>
                ))}
            </div>
            {/* Education */}
            <HeaderText text="Education"/>
            <div className="flex flex-col lg:flex-row items-center animate-fade-in animation-delay-300 lg:px-30 glass rounded-2xl m-5">
                <div className="relative space-y-10 border-1-2 py-6 text-center lg:text-left mx-20 ">
                    {EDUCATION.map((school, index) => (
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold md:text-3xl">{school.school}</h3>
                                <p className="font-light text-lg text-parchment-dim">{school.degree}</p>
                                <p className="font-light text-lg text-muted-light">{school.note}</p>
                            </div>
                            <div>
                                <p className="font-light text-lg text-muted-light">{school.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    </section>;
};


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
        note: "Transferred · Skills: C++, Level Design, Game Design",
    },
]
