import { HeaderText } from "@/assets/HeaderText";
import { Button } from "@/assets/Button";
import { useState } from "react";

export const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentProject = PROJECTS[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    };

    return <section className="items-center justify-center overflow-hidden xl:p-20 p-10 my-10"> 
        <HeaderText text="Projects"/>
        <p className="text-center text-parchment-dim">Here are some of the projects I have worked on, both professional and personal.<br /><em>Note: I am also working on the <a href="https://asgc.gg/" className="text-gold hover:underline" target="_blank">ASGC 2026 Game Jam!</a></em></p>
        <div className="flex flex-col items-center gap-5 m-5">
            <div className="glass rounded-2xl flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black/50 w-full max-w-2xl">
                {currentProject.texture && <img src={currentProject.texture} alt={currentProject.title} className="w-full rounded-lg" />}
                <div className="border-b border-gold/30 pb-3 mb-2">
                    <p className="text-parchment text-lg font-bold">{currentProject.title}</p>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-parchment-dim text-sm uppercase tracking-wide">Role</span>
                        <p className="text-parchment text-sm font-medium">{currentProject.role}</p>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-parchment-dim text-sm uppercase tracking-wide">Studio</span>
                        <p className="text-parchment text-sm font-medium">{currentProject.studio}</p>
                    </div>
                </div>
                <p className="text-parchment text-sm leading-relaxed text-parchment-dim" dangerouslySetInnerHTML={{ __html: currentProject.blurb }} />
                <div className="flex flex-wrap gap-2">
                    {currentProject.tags.map((tag, tagIndex) => (
                        <button key={tagIndex} className="px-3 py-1 bg-stone/20 border border-parchment-dim text-parchment-dim rounded-lg hover:bg-gold/30 transition-colors text-sm">
                            {tag}
                        </button>
                    ))}
                </div>
                <Button size="lg" as="a" href={currentProject.link} target="_blank">{currentProject.link_label}</Button>
            </div>
            <div className="flex items-center gap-5">
                <button onClick={handlePrev} className="text-2xl px-4 py-2 text-parchment-dim hover:text-gold transition-colors">
                    ← Previous
                </button>
                <span className="text-parchment-dim">
                    {currentIndex + 1} / {PROJECTS.length}
                </span>
                <button onClick={handleNext} className="text-2xl px-4 py-2 text-parchment-dim hover:text-gold transition-colors">
                    Next →
                </button>
            </div>
        </div>
    </section>;
};


const PROJECTS = [
    {
        title: "Crusader Kings III",
        studio: "Paradox Interactive",
        role: "Game/Narrative Designer",
        blurb: "Shipped player-facing content and in-game systems for one of the most complex grand strategy games in the genre. <br /><br />Credited on the <strong>All Under Heaven</strong> and <strong>Khans of the Steppe</strong> DLCs.",
        tags: ["Game Design", "Narrative Design", "Writing"],
        link: "https://www.paradoxinteractive.com/games/crusader-kings-iii/",
        link_label: "Game Link",
        texture: "",
        description: "Crusader Kings III is a grand strategy game developed by Paradox Interactive, focusing on the medieval period and complex political and dynastic systems.<br /><br />As Game Designer on <strong>All Under Heaven</strong> and <strong>Khans of the Steppe</strong> DLCs, I created immersive experiences for players via in game decisions, events, and other narrative content. I also collaborated with an AA-level studio team; programmers, designers and artists to ensure gameplay quality.",
        gallery: [
            {
                src: "",
                caption: "Gallery Media Caption"
            }
        ],
    }
];

// const PROJECTS = {
//     professional: [
//         {
//             title: "",
//             subtitle: "Game Designer · Paradox Interactive · Aug. 2024 – Aug. 2025",
//             tags: ["Paradox Script", "Game Design", "Systems Design", "UX"],
//             desc: "",
//             links: [
//                 {
//                     label: "Steam Page",
//                     href: "",
//                 },
//             ],
//             image: ck3Banner,
//             gallery: [
//                 {
//                     src: tsagaanSar,
//                     caption:
//                         "Tsagaan Sar opening event — a custom variation on the feast activity",
//                     href: "https://forum.paradoxplaza.com/forum/developer-diary/dev-diary-167-the-greatest-of-them-all.1733816/",
//                 },
//                 {
//                     src: petEagle,
//                     caption:
//                         "Pet eagle event — a unique companion available to steppe rulers",
//                 },
//                 {
//                     src: legacyAdventurer,
//                     caption:
//                         "Legacy of the Adventurer decision — sandbox decision for good-aligned players",
//                 },
//             ],
//         },
//     ],
//     personal: [
//         {
//             title: "Warcraft: Guardians of Azeroth Reforged 2",
//             subtitle:
//                 "Developer · Crusader Kings III Total Conversion Mod · Oct. 2023 – Present",
//             tags: ["Paradox Script", "Team Lead", "Game Systems", "Localization"],
//             desc: "A total conversion mod set in Blizzard's Warcraft universe, bringing the First War and Reign of Chaos to Crusader Kings III. 59,000+ subscribers on Steam Workshop. Led team reorganization, established development standards, implemented new in-game systems, and contributed to flavorization efforts.",
//             links: [
//                 {
//                     label: "Steam Workshop",
//                     href: "https://steamcommunity.com/sharedfiles/filedetails/?id=2949767945",
//                 },
//             ],
//             image: goaBanner,
//             gallery: [
//                 {
//                     src: elune,
//                     caption:
//                         "An event displaying the schisms between Elven culture in Warcaft, integrated with CK3 Mechanics",
//                 },
//                 {
//                     src: illidan,
//                     caption:
//                         "GUI showcasing the in-game magic system inspired by Warcraft spells",
//                 },
//                 {
//                     src: crisisGui,
//                     caption:
//                         "A Crisis Event, expanding on Warcrafts' major lore events from a ruler's perspective",
//                 },
//             ],
//         },
//         {
//             title: "Warcraft: Guardians of Azeroth Reforged 2",
//             subtitle:
//                 "Team Lead · Crusader Kings III Total Conversion Mod · Oct. 2023 – Present",
//             tags: ["Paradox Script", "Game Systems", "Game Design", "Narrative Design"],
//             desc: "A total conversion mod set in Blizzard's Warcraft universe, bringing the First War and Reign of Chaos to Crusader Kings III. 59,000+ subscribers on Steam Workshop. Led team reorganization, established development standards, implemented new in-game systems, and contributed to flavorization efforts.",
//             links: [
//                 {
//                     label: "Steam Workshop",
//                     href: "https://steamcommunity.com/sharedfiles/filedetails/?id=2949767945",
//                 },
//             ],
//             image: goaBanner,
//             gallery: [],
//         }
//     ],
// }