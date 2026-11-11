import { HeaderText } from "@/assets/HeaderText";
import { Button } from "@/assets/Button";
import { useEffect, useState } from "react";

// images
import tsagaanSar from "/src/assets/images/tsagaan_sar.png";
import legacyAdventurer from "/src/assets/images/legacy_adventurer.png";
import petEagle from "/src/assets/images/pet_eagle_one.png";
import goaBanner from "/src/assets/images/download.jpeg";
import elune from "/src/assets/images/elune.png";
import illidan from "/src/assets/images/illidan.png";
import crisisGui from "/src/assets/images/crisisgui.png";
import tippy from "/src/assets/images/tippy.png";
import wires from "/src/assets/images/wires.png";
import cafe_email from "/src/assets/images/cafe_email_1.png";
import tippy_lines from "/src/assets/images/tippy_lines.png";
import ep4_keyart from "/src/assets/images/tgp.jpg";
import ce2_keyart from "/src/assets/images/mpo.jpg";        
import tgp_1 from "/src/assets/images/tgp_1.png";
import tgp_2 from "/src/assets/images/tgp_2.png";
import tgp_3 from "/src/assets/images/tgp_3.png";
import tgp_4 from "/src/assets/images/tgp_4.png";
import sunscorned_1 from "/src/assets/images/sunscorned-1.png";
import sunscorned_2 from "/src/assets/images/sunscorned-2.png";
import sunscorned_3 from "/src/assets/images/sunscorned-3.gif";
import sunscorned_4 from "/src/assets/images/sunscorned-4.png";
import sunscorned_5 from "/src/assets/images/sunscorned-5.png";
import sunscorned_6 from "/src/assets/images/sunscorned-6.png";
import sunscorned_7 from "/src/assets/images/sunscorned-7.png";
import sunscorned_8 from "/src/assets/images/sunscorned-8.png";
import sunscorned_cover from "/src/assets/images/sunscorned-cover.png";


const MEDIA_PER_PAGE_MOBILE = 1;
const MEDIA_PER_PAGE_DESKTOP = 2;

const getYouTubeVideoId = (url) => {
    if (!url || typeof url !== "string") {
        return null;
    }

    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (watchMatch?.[1]) {
        return watchMatch[1];
    }

    const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (shortMatch?.[1]) {
        return shortMatch[1];
    }

    const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
    if (embedMatch?.[1]) {
        return embedMatch[1];
    }

    return null;
};

const getYouTubeEmbedUrl = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};

const ProjectDescription = ({ blocks }) => (
    <div className="space-y-5 text-parchment-dim">
        {blocks.map((block, index) => {
            if (block.type === "heading") {
                return <h2 key={index} className="text-parchment text-2xl font-bold">{block.text}</h2>;
            }

            if (block.type === "list") {
                return (
                    <ul key={index} className="list-disc list-inside space-y-2 pl-2 marker:text-gold">
                        {block.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                    </ul>
                );
            }

            return <p key={index} className="text-xl leading-relaxed">{block.text}</p>;
        })}
    </div>
);

export const Projects = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [mediaPage, setMediaPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [expandedMediaIndex, setExpandedMediaIndex] = useState(null);
    const selectedProject = selectedIndex !== null ? PROJECTS[selectedIndex] : null;
    const mediaPerPage = isMobile ? MEDIA_PER_PAGE_MOBILE : MEDIA_PER_PAGE_DESKTOP;
    const galleryMedia = (selectedProject?.gallery || []).filter((media) => media?.src);
    const mediaPageCount = Math.max(1, Math.ceil(galleryMedia.length / mediaPerPage));
    const mediaStartIndex = mediaPage * mediaPerPage;
    const visibleMedia = galleryMedia.slice(mediaStartIndex, mediaStartIndex + mediaPerPage);
    const expandedMedia = expandedMediaIndex !== null ? galleryMedia[expandedMediaIndex] : null;

    const handleOpenProject = (projectIndex) => {
        setSelectedIndex(projectIndex);
    };

    const handleCloseProject = () => {
        setSelectedIndex(null);
    };

    const handleMediaNext = () => {
        setMediaPage((prev) => (prev + 1) % mediaPageCount);
    };

    const handleMediaPrev = () => {
        setMediaPage((prev) => (prev - 1 + mediaPageCount) % mediaPageCount);
    };

    const handleOpenMedia = (mediaIndex) => {
        setExpandedMediaIndex(mediaIndex);
    };

    const handleCloseMedia = () => {
        setExpandedMediaIndex(null);
    };

    useEffect(() => {
        setMediaPage(0);
    }, [selectedIndex]);

    useEffect(() => {
        setExpandedMediaIndex(null);
    }, [selectedIndex, mediaPage]);

    useEffect(() => {
        const mobileQuery = window.matchMedia("(max-width: 639px)");

        const updateIsMobile = () => {
            setIsMobile(mobileQuery.matches);
        };

        updateIsMobile();
        mobileQuery.addEventListener("change", updateIsMobile);

        return () => {
            mobileQuery.removeEventListener("change", updateIsMobile);
        };
    }, []);

    useEffect(() => {
        if (mediaPage > mediaPageCount - 1) {
            setMediaPage(Math.max(0, mediaPageCount - 1));
        }
    }, [mediaPage, mediaPageCount]);

    useEffect(() => {
        if (selectedIndex === null) {
            return;
        }

        const handleEscape = (event) => {
            if (event.key !== "Escape") {
                return;
            }

            if (expandedMediaIndex !== null) {
                handleCloseMedia();
            } else {
                handleCloseProject();
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [selectedIndex, expandedMediaIndex]);

    return <section className="items-center justify-center overflow-hidden xl:p-20 p-10"> 
        <HeaderText text="Projects"/>
        <p className="text-center text-parchment-dim">Here are some of the projects I have worked on, both professional and personal.<br /><em>Note: I am also working on the <a href="https://asgc.gg/" className="text-gold hover:underline" target="_blank">ASGC 2026 Game Jam!</a></em></p>
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-5">
            {PROJECTS.map((project, projectIndex) => (
                <div key={project.title} className="glass rounded-2xl flex flex-col gap-4 relative p-6 shadow-2xl shadow-black/50">
                    {project.texture && <img src={project.texture} alt={project.title} className="w-full rounded-lg aspect-video object-cover" />}
                    <div className="border-b border-gold/30 pb-3 mb-1">
                        <p className="text-parchment text-xl font-bold">{project.title}</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-parchment-dim text-md uppercase tracking-wide">Role</span>
                            <p className="text-parchment text-md font-medium text-right">{project.role}</p>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-parchment-dim text-md uppercase tracking-wide">Studio</span>
                            <p className="text-parchment text-md font-medium text-right">{project.studio}</p>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-parchment-dim text-md uppercase tracking-wide">Engine</span>
                            <p className="text-parchment text-md font-medium text-right">{project.engine}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.genres.map((genre, genreIndex) => (
                            <button key={genreIndex} className="px-3 py-1 bg-gold/20 border border-parchment-dim text-parchment-dim rounded-lg hover:bg-gold/30 transition-colors text-sm glow-text">
                                {genre} 
                            </button>
                        ))}
                    </div>
                    <p className="text-parchment text-md leading-relaxed text-parchment-dim flex-1">{project.blurb}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                            <button key={tagIndex} className="px-3 py-1 bg-stone/20 border border-parchment-dim text-parchment-dim rounded-lg hover:bg-gold/30 transition-colors text-sm">
                                {tag}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2 mt-auto pt-2">
                        {project.link && (
                            <Button size="default" as="a" href={project.link} target="_blank">{project.link_label}</Button>
                        )}
                        <Button size="default" onClick={() => handleOpenProject(projectIndex)}>See More</Button>
                    </div>
                </div>
            ))}
        </div>
        {selectedProject && (
            <div className="fixed inset-0 z-50 bg-black/80 p-4 sm:p-8 overflow-y-auto" onClick={handleCloseProject}>
                <div className="glass mx-auto w-full max-w-6xl flex flex-col gap-5 rounded-2xl p-6 sm:p-10 my-10" onClick={(event) => event.stopPropagation()}>
                    <div className="flex items-center justify-between border-b border-gold/30 pb-3">
                        <p className="text-parchment text-3xl sm:text-4xl font-bold">{selectedProject.title}</p>
                        <button
                            type="button"
                            onClick={handleCloseProject}
                            className="text-parchment-dim hover:text-gold transition-colors text-md"
                        >
                            Close ×
                        </button>
                    </div>
                    {/* Gallery Carousel */}
                    {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                        <div className="flex flex-col gap-4">
                            {mediaPageCount > 1 && (
                                <div className="flex items-center justify-between">
                                    <button onClick={handleMediaPrev} className="text-md px-3 py-1 text-parchment-dim hover:text-gold transition-colors">
                                        ← Previous
                                    </button>
                                    <span className="text-parchment-dim text-md">
                                        {mediaPage + 1} / {mediaPageCount}
                                    </span>
                                    <button onClick={handleMediaNext} className="text-md px-3 py-1 text-parchment-dim hover:text-gold transition-colors">
                                        Next →
                                    </button>
                                </div>
                            )}
                            <div className="flex flex-col sm:flex-row gap-4 pb-2">
                                {visibleMedia.map((media, mediaIndex) => (
                                    (() => {
                                        const embedUrl = getYouTubeEmbedUrl(media.src);

                                        return (
                                    <div
                                        key={mediaStartIndex + mediaIndex}
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => handleOpenMedia(mediaStartIndex + mediaIndex)}
                                        onKeyDown={(event) => {
                                            if (event.key === "Enter" || event.key === " ") {
                                                event.preventDefault();
                                                handleOpenMedia(mediaStartIndex + mediaIndex);
                                            }
                                        }}
                                        className="flex flex-col gap-3 w-full min-w-[260px] flex-1 cursor-pointer hover:opacity-90 transition-opacity"
                                    >
                                            {embedUrl ? (
                                                <iframe
                                                    src={embedUrl}
                                                    title={media.caption || "YouTube video"}
                                                    className="w-full aspect-video rounded-lg"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                />
                                            ) : (
                                                <img src={media.src} alt={media.caption || "Project image"} className="w-full rounded-lg" />
                                            )}
                                            {media.caption?.trim() && (
                                                <p className="text-parchment-dim text-base text-center">{media.caption}</p>
                                            )}
                                            {media.link && media.link.trim().length > 0 && (
                                                <a
                                                    href={media.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    onClick={(event) => event.stopPropagation()}
                                                    className="text-gold text-md text-center hover:underline"
                                                >
                                                    {media.link_label || "View media"}
                                                </a>
                                            )}
                                        </div>
                                        );
                                    })()
                                ))}
                            </div>
                        </div>
                    )}
                    <ProjectDescription blocks={selectedProject.description} />
                </div>
            </div>
        )}
        {expandedMedia && (
            <div className="fixed inset-0 z-[60] bg-black/80 p-4 sm:p-8" onClick={handleCloseMedia}>
                <div className="mx-auto w-full max-w-5xl flex flex-col gap-4" onClick={(event) => event.stopPropagation()}>
                    <button
                        type="button"
                        onClick={handleCloseMedia}
                        className="self-end text-parchment-dim hover:text-gold transition-colors text-md"
                    >
                        Close ×
                    </button>
                    {getYouTubeEmbedUrl(expandedMedia.src) ? (
                        <iframe
                            src={getYouTubeEmbedUrl(expandedMedia.src)}
                            title={expandedMedia.caption || "YouTube video"}
                            className="w-full aspect-video rounded-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    ) : (
                        <img src={expandedMedia.src} alt={expandedMedia.caption || "Project image"} className="w-full rounded-lg max-h-[75vh] object-contain" />
                    )}
                    {expandedMedia.caption?.trim() && (
                        <p className="text-parchment-dim text-base text-center">{expandedMedia.caption}</p>
                    )}
                    {expandedMedia.link && expandedMedia.link.trim().length > 0 && (
                        <a
                            href={expandedMedia.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gold text-md text-center hover:underline"
                        >
                            {expandedMedia.link_label || "View media"}
                        </a>
                    )}
                </div>
            </div>
        )}
    </section>;
};


const PROJECTS = [
    {
        title: "Crusader Kings III: Khans of the Steppe",
        studio: "Paradox Interactive",
        role: "Game Designer",
        engine: "Clausewitz Engine",
        blurb: "The winds sweep across the Great Steppe as you look over your people, preparing to ride toward the horizon in search of greener pastures, lands to conquer, and new treasures to claim.",
        genres: ["Grand Strategy", "Historical", "RPG"],
        tags: ["Narrative Design"],
        link: "https://www.paradoxinteractive.com/games/crusader-kings-iii/add-ons/crusader-kings-iii-khans-of-the-steppe",
        link_label: "Game Link",
        texture: ce2_keyart,
        description: [
            { type: "heading", text: "Project Overview" },
            { type: "paragraph", text: "Crusader Kings III is a grand strategy game developed by Paradox Interactive, focused on the medieval period and complex political and dynastic systems. As a Game Designer on Khans of the Steppe, I created immersive player experiences through in-game decisions, events, and narrative content." },
            { type: "heading", text: "Some of My Contributions" },
            { type: "list", items: [
                "Designed Tsagaan Sar, a variation of the Feast activity for Mongolic and Steppe rulers. Its events bring an ancient tradition to life through customs and games adapted to the context of the game.",
                "Created the Pet Eagle, a unique companion for Steppe rulers, with custom events and scenarios that let players train and learn their eagle's personality. The eagle can also assist the ruler in Falconry."
            ] },
            { type: "heading", text: "Questions and Challenges" },
            { type: "list", items: [
                "Is this event a result of, or will it influence, the player's actions?",
                "Does this event punish the player for no reason?",
                "Will this event create interesting, meaningful choices that affect the game state?",
                "Was something like this likely to happen, given the historical context?",
                "If this is an event with no options, what is the purpose of this content?"
            ] },
            { type: "heading", text: "Learning Outcomes" },
            { type: "list", items: [
                "I ensured localization text was historically accurate, followed the design style guide, and stayed an appropriate length to prevent reading fatigue.",
                "Gameplay sometimes takes priority over narrative; the challenge is to blend both without making that tradeoff apparent to players."
            ] }
        ],
        gallery: [
            {
                src: tsagaanSar,
                caption: "Tsagaan Sar opening event - a custom variation on the feast activity",
                link: "https://forum.paradoxplaza.com/forum/developer-diary/dev-diary-167-the-greatest-of-them-all.1733816/",
                link_label: "Developer Diary",
            },
            {
                src: petEagle,
                caption: "Pet eagle event - a unique companion available to steppe rulers",
            },
            {
                src: legacyAdventurer,
                caption: "Legacy of the Adventurer decision - sandbox decision for benevolent players",
            }
        ],
    },
    {
        title: "Crusader Kings III: All Under Heaven",
        studio: "Paradox Interactive",
        role: "Game Designer",
        engine: "Clausewitz Engine",
        blurb: "In All Under Heaven – the game’s fourth Major Expansion – the map extends to Asia to include the rich and storied lands of China, Japan, and Southeast Asia. Lead legendary warrior houses, manage vast empires and navigate intricate power struggles in this vibrant region filled with history, culture and innovation.",
        genres: ["Grand Strategy", "Historical", "RPG"],
        tags: ["Narrative Design"],
        link: "https://www.paradoxinteractive.com/games/crusader-kings-iii/add-ons/crusader-kings-iii-all-under-heaven",
        link_label: "Game Link",
        texture: ep4_keyart,
        description: [
            { type: "heading", text: "Project Overview" },
            { type: "paragraph", text: "Crusader Kings III is a grand strategy game developed by Paradox Interactive, focused on the medieval period and complex political and dynastic systems. As a Game Designer on All Under Heaven, I created immersive player experiences through in-game decisions, events, and narrative content." },
            { type: "heading", text: "Some of My Contributions" },
            { type: "paragraph", text: "I created player-facing decisions, events, and narrative content for this DLC, similar to my work on Khans of the Steppe." }
        ],
        gallery: [
            {
                src: tgp_1
            },
            {
                src: tgp_2
            },
            {
                src: tgp_3
            },
            {
                src: tgp_4
            }
        ],
    },
    {
        title: "Warcraft: Guardians of Azeroth 2",
        studio: "Independent Mod Team",
        role: "Team Lead and Developer",
        engine: "Clausewitz Engine",
        genres: ["Grand Strategy", "Fantasy", "RPG"],
        tags: ["Narrative Design", "Modding", "Systems Design"],
        blurb: "Relive the harrowing years of strife first told in the beloved strategy games and the early years of World of Warcraft as you chart a new saga for Azeroth and cement a legacy to last the ages.",
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2949767945",
        link_label: "Steam Workshop",
        description: [
            { type: "heading", text: "Project Overview" },
            { type: "paragraph", text: "Warcraft: Guardians of Azeroth 2 is a Crusader Kings III total-conversion mod that transforms the medieval world into Azeroth. It adapts events and systems from Warcraft III and World of Warcraft to the CK3 format, alongside original events, story choices, and narratives." },
            { type: "heading", text: "Some of My Contributions" },
            { type: "paragraph", text: "As a designer, I created player-facing content and in-game systems that bring the Warcraft experience into Crusader Kings III, balancing the source universe's lore and mechanics with sandbox gameplay." },
            { type: "paragraph", text: "As team lead, I established development standards, managed releases, coordinated the development team, organized community events for a Discord community of over 8,000 members, and represented the team at ModCon." },
            { type: "list", items: [
                "Designed, implemented, and scoped the in-game magic system, adapting spells from Warcraft III and World of Warcraft and introducing new spell concepts.",
                "Created sandbox content through events, decisions, and flavor text that lets players explore alternate possibilities in the Warcraft universe.",
                "Maintained documentation, scoped releases, coordinated release dates around Crusader Kings III patches, and supported communication across the worldwide development team."
            ] },
            { type: "heading", text: "Questions and Challenges" },
            { type: "list", items: [
                "Why would this Warcraft character make this choice?",
                "How can a mechanic or event from Warcraft make sense within Crusader Kings III?",
                "What are things we can expand on in this mod that might not be possible within the original Warcraft games?"
            ] },
            { type: "heading", text: "Learning Outcomes" },
            { type: "paragraph", text: "I learned to bring an existing story to life in a meaningful way without changing it completely, while making those adaptations accessible and exciting to players." }
        ],
        texture: goaBanner,
        gallery: [
            {
                src: "https://www.youtube.com/watch?v=ox2e43IjZLY",
                caption: "Trailer showcasing the mod's features and gameplay",
            },
            {
                src: elune,
                caption: "An event displaying the schisms between Elven culture in Warcraft, integrated with CK3 Mechanics",
            },
            {
                src: illidan,
                caption: "GUI showcasing the in-game magic system inspired by Warcraft spells",
            },
            {
                src: crisisGui,
                caption: "A Crisis Event, expanding on Warcrafts' major lore events from a ruler's perspective",
            },
        ],
    },
    {
        title: "Sunscorned",
        studio: "Game Jam Group",
        role: "Technical Narrative Designer",
        engine: "Unreal Engine 5",
        genres: ["Dungeon Crawler", "Horror", "Fantasy"],
        tags: ["Narrative Design", "Game Design", "Programming"],
        blurb: "On the Isle of Lumina where Vampires reign, one uses the famed Violet Sepulcher to bring about eternal night and the curse of Nightbane, effectively ending the thousand-year peace between human and vampire. After half-vampire Matthias loses his mother to the curse, he must traverse the perilous dungeons of a vampiric castle to destroy the relic and restore the sun to its rightful place.",
        link: "https://mrdj2u.itch.io/sunscorned",
        link_label: "Game Link",
        texture: sunscorned_cover,
        description: [
            { type: "heading", text: "Project Overview" },
            { type: "paragraph", text: "Sunscorned was a game jam project submitted to the Vampire Horror Jam 3D 2026. I worked with a small team in Unreal Engine 5 to create a horror themed game featuring vampires within 1 month." },
            { type: "heading", text: "Some of My Contributions" },
            { type: "paragraph", text: "As the Technical Narrative Designer, I was responsible for crafting the story, and lore within the game. I wrote in-game lore text, dialogue barks, as well as designed narrative systems in Unreal Engine 5 using Blueprints and C++." },
            { type: "list", items: [
                "Created character and location reference sheets for our artists",
                "Wrote in-game lore text and dialogue barks",
                "Designed narrative systems in Unreal Engine 5 using Blueprints and C++",
            ] },
            { type: "heading", text: "Questions and Challenges" },
            { type: "list", items: [
                "How can the player learn the story in an engaging and immersive way?",
                "What are ways we can express narrative outside of traditional dialogue and cut scenes?",
                "Can a meaningful game really be made in such a short timeframe?"
            ] },
            { type: "heading", text: "Learning Outcomes" },
            { type: "paragraph", text: "I learned how to work with and minimize scope in a game project, while still delivering a digestible way for players to experience our story." }
        ],
        gallery: [
            {
                src: sunscorned_8,
            },
            {
                src: sunscorned_1,
            },
            {
                src: sunscorned_2,
            },
            {
                src: sunscorned_3,
            },
            {
                src: sunscorned_8,
            },
            {
                src: sunscorned_4,
            },
            {
                src: sunscorned_5,
            },
            {
                src: sunscorned_6,
            }
        ],
    },
    {
        title: "Tippy's Cafe",
        studio: "Sunday Studios",
        role: "Game/Narrative Designer, Programmer",
        engine: "Godot",
        genres: ["Management", "Simulation"],
        tags: ["Game Design", "Narrative Design", "Programming"],
        blurb: "Play as Sato, a Chinese immigrant dealing with the closure of his beloved King of Comics cafe as it is taken over by the AI-powered Tippy's Cafe.",
        link: "https://www.sundaystudiosgames.com/",
        link_label: "Studio Link",
        description: [
            { type: "heading", text: "Project Overview" },
            { type: "paragraph", text: "Tippy's Cafe is an upcoming management sim. You play as a Chinese immigrant working at a cafe while aspiring to write comics and craft stories. He becomes the manager of cAIfe as his money-hungry boss replaces coworkers with AI-powered machines." },
            { type: "heading", text: "Some of My Contributions" },
            { type: "paragraph", text: "As a Game/Narrative Designer and Programmer, I designed engaging mini games, wrote flavor text for the in-game email system, and wrote dialogue barks for Tippy, bringing the world of a worker with a tyrannical, AI-loving boss to life." },
            { type: "heading", text: "Questions and Challenges" },
            { type: "list", items: [
                "How can mini games be fun and engaging without becoming too difficult or time consuming?",
                "How can narrative elements be incorporated into a gameplay-heavy game?",
                "What is the best way to present tutorials and narrative content without causing confusion?"
            ] },
            { type: "heading", text: "Learning Outcomes" },
            { type: "paragraph", text: "I learned that iteration and QA are essential. Tester feedback helped make the gameplay easier to understand, less frustrating, and more enjoyable to master." },
            { type: "paragraph", text: "All art assets featured were made by the talented artists at Sunday Studios." }
        ],
        texture: tippy,
        gallery: [
            {
                src: wires,
                caption: "Art asset from a mini-game I designed for breaking the in-game cameras, which your boss uses to spy on you",
            },
            {
                src: cafe_email,
                caption: "An email from your boss, filled with corporate jargon, explaining how he 'improved' the AI.",
            },
            {
                src: tippy_lines,
                caption: "Dialogue lines for Tippy, a money-hungry, sarcastic, and AI-loving character working for the boss.",
            },
        ],
    },
];
