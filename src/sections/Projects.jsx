export const Projects = () => {
    return <section> </section>;
};

const PROJECTS = {
    professional: [
        {
            title: "Crusader Kings III",
            subtitle: "Game Designer · Paradox Interactive · Aug. 2024 – Aug. 2025",
            tags: ["Paradox Script", "Game Design", "Systems Design", "UX"],
            desc: "Shipped player-facing content and in-game systems for one of the most complex grand strategy games in the genre. Collaborated with UX, engineering, and production; authored historically researched content; analyzed player feedback to balance and refine game mechanics. Credited on the All Under Heaven and Khans of the Steppe DLCs.",
            links: [
                {
                    label: "Steam Page",
                    href: "",
                },
            ],
            image: ck3Banner,
            gallery: [
                {
                    src: tsagaanSar,
                    caption:
                        "Tsagaan Sar opening event — a custom variation on the feast activity",
                    href: "https://forum.paradoxplaza.com/forum/developer-diary/dev-diary-167-the-greatest-of-them-all.1733816/",
                },
                {
                    src: petEagle,
                    caption:
                        "Pet eagle event — a unique companion available to steppe rulers",
                },
                {
                    src: legacyAdventurer,
                    caption:
                        "Legacy of the Adventurer decision — sandbox decision for good-aligned players",
                },
            ],
        },
    ],
    personal: [
        {
            title: "Warcraft: Guardians of Azeroth Reforged 2",
            subtitle:
                "Developer · Crusader Kings III Total Conversion Mod · Oct. 2023 – Present",
            tags: ["Paradox Script", "Team Lead", "Game Systems", "Localization"],
            desc: "A total conversion mod set in Blizzard's Warcraft universe, bringing the First War and Reign of Chaos to Crusader Kings III. 59,000+ subscribers on Steam Workshop. Led team reorganization, established development standards, implemented new in-game systems, and contributed to flavorization efforts.",
            links: [
                {
                    label: "Steam Workshop",
                    href: "https://steamcommunity.com/sharedfiles/filedetails/?id=2949767945",
                },
            ],
            image: goaBanner,
            gallery: [
                {
                    src: elune,
                    caption:
                        "An event displaying the schisms between Elven culture in Warcaft, integrated with CK3 Mechanics",
                },
                {
                    src: illidan,
                    caption:
                        "GUI showcasing the in-game magic system inspired by Warcraft spells",
                },
                {
                    src: crisisGui,
                    caption:
                        "A Crisis Event, expanding on Warcrafts' major lore events from a ruler's perspective",
                },
            ],
        },
        {
            title: "Warcraft: Guardians of Azeroth Reforged 2",
            subtitle:
                "Team Lead · Crusader Kings III Total Conversion Mod · Oct. 2023 – Present",
            tags: ["Paradox Script", "Game Systems", "Game Design", "Narrative Design"],
            desc: "A total conversion mod set in Blizzard's Warcraft universe, bringing the First War and Reign of Chaos to Crusader Kings III. 59,000+ subscribers on Steam Workshop. Led team reorganization, established development standards, implemented new in-game systems, and contributed to flavorization efforts.",
            links: [
                {
                    label: "Steam Workshop",
                    href: "https://steamcommunity.com/sharedfiles/filedetails/?id=2949767945",
                },
            ],
            image: goaBanner,
            gallery: [],
        }
    ],
}