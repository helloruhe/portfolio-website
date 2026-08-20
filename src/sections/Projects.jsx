import { HeaderText } from "@/assets/HeaderText";
import { Button } from "@/assets/Button";
import { useEffect, useState } from "react";

// images
import ck3Banner from "/src/assets/images/crusader_king.avif";
import tsagaanSar from "/src/assets/images/tsagaan_sar.png";
import petEagle from "/src/assets/images/pet_eagle_one.png";
import legacyAdventurer from "/src/assets/images/legacy_adventurer.png";
import goaBanner from "/src/assets/images/download.jpeg";
import elune from "/src/assets/images/elune.png";
import illidan from "/src/assets/images/illidan.png";
import crisisGui from "/src/assets/images/crisisgui.png";
import tippy from "/src/assets/images/tippy.png";
import wires from "/src/assets/images/wires.png";
import cafe_email from "/src/assets/images/cafe_email_1.png";
import tippy_lines from "/src/assets/images/tippy_lines.png";

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
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.genres.map((genre, genreIndex) => (
                            <button key={genreIndex} className="px-3 py-1 bg-gold/20 border border-parchment-dim text-parchment-dim rounded-lg hover:bg-gold/30 transition-colors text-sm glow-text">
                                {genre} 
                            </button>
                        ))}
                    </div>
                    <p className="text-parchment text-md leading-relaxed text-parchment-dim flex-1" dangerouslySetInnerHTML={{ __html: project.blurb }} />
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                            <button key={tagIndex} className="px-3 py-1 bg-stone/20 border border-parchment-dim text-parchment-dim rounded-lg hover:bg-gold/30 transition-colors text-sm">
                                {tag}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2 mt-auto pt-2">
                        <Button size="default" as="a" href={project.link} target="_blank">{project.link_label}</Button>
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
                                                <img src={media.src} alt={media.caption} className="w-full rounded-lg" />
                                            )}
                                            <p className="text-parchment-dim text-base text-center">{media.caption}</p>
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
                    <p className="text-parchment text-xl leading-relaxed text-parchment-dim" dangerouslySetInnerHTML={{ __html: selectedProject.description }} />
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
                        <img src={expandedMedia.src} alt={expandedMedia.caption} className="w-full rounded-lg max-h-[75vh] object-contain" />
                    )}
                    <p className="text-parchment-dim text-base text-center">{expandedMedia.caption}</p>
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
        title: "Crusader Kings III",
        studio: "Paradox Interactive",
        role: "Game Designer",
        blurb: "Shipped player-facing content and in-game systems for one of the most complex grand strategy games in the genre. <br /><br />Credited on the <strong>All Under Heaven</strong> and <strong>Khans of the Steppe</strong> DLCs.",
        genres: ["Grand Strategy", "Historical", "RPG"],
        tags: ["Narrative Design"],
        link: "https://www.paradoxinteractive.com/games/crusader-kings-iii/",
        link_label: "Game Link",
        texture: ck3Banner,
        description: "<h2 class=\"text-parchment text-2xl font-bold mb-2\">Project Overview</h2><br />Crusader Kings III is a grand strategy game developed by Paradox Interactive, focusing on the medieval period and complex political and dynastic systems.<br /><br />As Game Designer on <strong>All Under Heaven</strong> and <strong>Khans of the Steppe</strong> DLCs, I created immersive experiences for players via in game decisions, events, and other narrative content.<br /><br /><h2 class=\"text-parchment text-2xl font-bold mb-2\">Some of my contributions:</h2><br /><ul class=\"list-disc list-inside space-y-2 pl-2 marker:text-gold\"><li>The variation of the Feast Activity - the <em>Tsagaan Sar</em>. For Mongolic and Steppe rulers, these events brought an ancient tradition to life. I wrote and designed events that reflect real customs and games played by Steppe peoples, yet still keeping it relevant within the context of the game.<br /><br /></li><li>The Pet Eagle - a unique companion only available to steppe rulers, expanding on the game's existing pet system. This pet is <em>unique</em>, as I created custom events and scenarios for the player to train and really learn the personality of their eagle, compared to other pets in the game which are more generic. They also assist the ruler in Falconry!</li></ul><br /><h2 class=\"text-parchment text-2xl font-bold mb-2\">Questions and Challenges:</h2><br /><ul class=\"list-disc list-inside space-y-2 pl-2 marker:text-gold\"><li>Is this event a result of, or will influence the player's actions?</li><li>Does this event punish the player for no reason?</li><li>Will this event create interesting, meaningful choices for the player that effects the game state?</li><li>Was something like this likely to happen, given the historical context?</li><li>If this is not an event, or if if this is an event with no options: What is the <em>purpose</em> for this content?</li><br/><h2 class=\"text-parchment text-2xl font-bold mb-2\">Learning Outcomes:</h2><br /><li>While writing any localization text, I always ensured it was historically accurate, following the style guide provided by my design leads, and kept the length appropriate to prevent reading fatigue.</li><li>Sometimes, gameplay trumps narrative. However, this isn't something you want to make apparent to players, so it is best to blend both accordingly</li></ul>",
        gallery: [
            {
                src: tsagaanSar,
                caption: "Tsagaan Sar opening event — a custom variation on the feast activity",
                link: "https://forum.paradoxplaza.com/forum/developer-diary/dev-diary-167-the-greatest-of-them-all.1733816/",
                link_label: "Developer Diary",
            },
            {
                src: petEagle,
                caption: "Pet eagle event — a unique companion available to steppe rulers",
            },
            {
                src: legacyAdventurer,
                caption: "Legacy of the Adventurer decision — sandbox decision for good-aligned players",
            }
        ],
    },
    {
        title: "Warcraft: Guardians of Azeroth 2",
        studio: "Independent Mod Team",
        role: "Team Lead and Developer",
        genres: ["Grand Strategy", "Fantasy", "RPG"],
        tags: ["Narrative Design", "Modding", "Systems Design"],
        blurb: "Led the team of a total conversion mod set in ABK's Warcraft universe, bringing the First War and Reign of Chaos to Crusader Kings III. <strong>100,000+ subscribers</strong> on Steam Workshop.",
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2949767945",
        link_label: "Steam Workshop",
        description: "<h2 class=\"text-parchment text-2xl font-bold mb-2\">Project Overview</h2><br />Warcraft: Guardians of Azeroth 2 is a mod for Crusader Kings III. It transforms the medieval world present in the vanilla game to the ever-changing, resilient world of Azeroth. The mod features many events and systems from ABK'S <em>Warcraft III</em> and <em>World of Warcraft</em> in the sense of Crusader Kings. It also contains many original events, story choices, and narratives.<br /><br /><h2 class=\"text-parchment text-2xl font-bold mb-2\">Some of my contributions:</h2><br />As a designer for the mod, I've created player-facing content and in-game systems that enhance the Warcraft experience within Crusader Kings III. This includes designing events, decisions, and narrative content that align with the lore and mechanics of the Warcraft universe, but also allows for sandbox-like gameplay for players to create their own variation of Warcraft within Crusader Kings III.<br /><br />As team lead, I've created and enforced development standards, direct release management, and coordinated the efforts of the development team to ensure high-quality content and smooth project progression. I've also organized community events and giveaways in our discord with over <strong>8,000 members</strong>, and spoken at ModCon on behalf of the team.<br /><br /><strong>Similar to my experience and responsibilities on <em>Crusader Kings III</em>, I have also contributed the following to the mod</strong>:<br/><ul class=\"list-disc list-inside space-y-2 pl-2 marker:text-gold\"><li>Designed, implemented, and scoped the complex in-game magic system: Taking inspiration from Warcraft III and World of Warcraft, I've converted many spells to work in the context of CK3, as well as implemented completely new spell ideas.<br /><br /></li><li>Created sandbox-like content in the Warcraft Universe: What if Elisande didn't join the legion? Or Arthas stayed a light-wielding Paladin instead of dawning the mantle of The Lich King? What would Azeroth be like if the Empire of Zul returned? I have designed and written events, decisions, and flavor texts allowing the players to essentially create their own version of Warcraft within Crusader Kings III.<br /><br /></li><li>Along with being a long time contributor and community manager, I have also taken on somewhat of a producer role: Maintaining documentation, scoping releases and setting release dates around Crusader Kings III patch times for the best player experience, as well as facilitate effective communication between our world-wide development team.</li></ul><br /><h2 class=\"text-parchment text-2xl font-bold mb-2\">Questions and Challenges:</h2><br /><ul class=\"list-disc list-inside space-y-2 pl-2 marker:text-gold\"><li>Why would this character in Warcraft make this choice?</li><li>How can we make this mechanic or event, once in Warcraft, make sense in CK3?</li><br /><h2 class=\"text-parchment text-2xl font-bold mb-2\">Learning Outcomes:</h2><br /><li>As a Narrative Designer, I will likely have to work with someone elses story. I learned to bring that story to life in a meaningful way, without changing it completely, and making these changes accessible (and even exciting!) to players.</li></ul>",
        texture: goaBanner,
        gallery: [
            {
                src: "https://www.youtube.com/watch?v=ox2e43IjZLY",
                caption: "Trailer showcasing the mod's features and gameplay",
            },
            {
                src: elune,
                caption:
                    "An event displaying the schisms between Elven culture in Warcraft, integrated with CK3 Mechanics",
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
        title: "Project: Cafe",
        studio: "Sunday Studios",
        role: "Game/Narrative Designer, Programmer",
        genres: ["Management", "Simulation"],
        tags: ["Game Design", "Narrative Design", "Programming", "Godot"],
        blurb: "Wrote witty and clever flavor text, designed engaging mini games, and iterated continuously on player feedback.",
        link: "https://www.sundaystudiosgames.com/",
        link_label: "Studio Link",
        description: "<h2 class=\"text-parchment text-2xl font-bold mb-2\">Project Overview</h2><br />Project: Cafe is an upcoming management sim game. In this game, you play as a Chinese Immigrant who works at a cafe. He aspires to write comics and craft stories, even as he struggles in his day job. He becomes the manager of cAIfe, along with his money-hungry boss replacing all of his other coworkers with AI-powered machines.<br /><br /><h2 class=\"text-parchment text-2xl font-bold mb-2\">Some of my contributions:</h2><br />As a Game/Narrative Designer and Programmer on Project: Cafe, I am responsible for creating and designing engaging mini games, and I wrote flavor text (in the form of the in-game emails system), and wrote dialogue barks for our protagonist character, Tippy, all to bring you in the world of our worker with a tyrannical AI-loving boss!<br /><br /><h2 class=\"text-parchment text-2xl font-bold mb-2\">Questions and Challenges:</h2><br /><ul class=\"list-disc list-inside space-y-2 pl-2 marker:text-gold\"><li>How can we make the mini games fun and engaging, yet not too difficult or time consuming?</li><li>Is it even possible to incorporate narrative elements in such a gameplay heavy game?</li><li>What is the best way to present tutorials and narrative content without causing too much confusion?</li><br /><h2 class=\"text-parchment text-2xl font-bold mb-2\">Learning Outcomes:</h2><br /><li>Working on Project: Cafe has showed me that iteration is key, and the need for QA is essential. Without the feedback we got from our testers, the gameplay would have been egregiously difficult, hard to understand, and almost impossible to master.</li></ul><br/><br/><em>All art assets featured were made by our talented artists at Sunday Studios.</em>",
        texture: tippy,
        gallery: [
            {
                src: wires,
                caption: "Art asset from a mini-game I designed for breaking the in-game cameras, which your boss uses to spy on you",
            },
            {
                src: cafe_email,
                caption: "An email you get from your boss, filled with corporate jargon, explaining how he 'improved' the AI. Spoiler: he makes it worse, along with so called 'improvements'",
            },
            {
                src: tippy_lines,
                caption: "Some dialogue lines I wrote for Tippy, who is a money-hungry, sarcastic, and AI-loving character working for the boss.",
            },
        ],
    },
];