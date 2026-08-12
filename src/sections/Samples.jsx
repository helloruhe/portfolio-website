import { Button } from "@/assets/Button";
import { HeaderText } from "@/assets/HeaderText";
import magic from "/src/assets/images/magic-cover.png";

export const Samples = () => {
    return (
        <section className="items-center justify-center overflow-hidden xl:p-20 p-10">
            <HeaderText text="Samples" />
            <p className="text-center text-parchment-dim">Here are some samples of my writing and game design work.</p>
            <div className="mx-auto mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {SAMPLES.map((sample) => {
                    const hasLink = Boolean(sample.link && sample.link !== "#");

                    return (
                        <article
                            key={sample.title}
                            className="glass rounded-2xl p-6 flex flex-col gap-4 shadow-xl shadow-black/40 border border-gold/20"
                        >
                            <img
                                src={sample.image}
                                alt={sample.title}
                                className="h-44 w-full rounded-xl object-cover"
                            />
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-parchment">{sample.title}</h3>
                                <p className="text-sm leading-relaxed text-parchment-dim" dangerouslySetInnerHTML={{ __html: sample.description }}></p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {sample.tags.map((tag) => (
                                    <span key={tag} className="rounded-full border border-parchment-dim/40 px-3 py-1 text-sm text-parchment-dim">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            {hasLink ? (
                                <Button size="sm" as="a" href={sample.link} target="_blank">
                                    View
                                </Button>
                            ) : (
                                <span className="inline-flex w-fit rounded-full border border-parchment-dim/30 px-3 py-2 text-sm text-parchment-dim">
                                    Coming soon
                                </span>
                            )}
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

const SAMPLES = [
    {
        title: "CK3 Event Chain: The Pretender",
        description: "This CK3 design document outlines an event chain where the player must navigate a situation where someone is pretending to be their dead relative or predecessor. This entry also contains the localization text used for the events.",
        image: "https://images.pexels.com/photos/16721215/pexels-photo-16721215.jpeg",
        tags: ["Narrative Design", "Game Design"],
        link: "https://drive.google.com/file/d/1w9HW5Jt7FhjfN4rdx-bHm0AqqMAzGG4R/view?usp=sharing",
    },
    {
        title: "Skyrim NPC",
        description: "This is an NPC I wrote and designed in the context of The Elder Scrolls V: Skyrim. Contains the character's backstory, dialogue, and in-game schedule.",
        image: "https://images.pexels.com/photos/8060360/pexels-photo-8060360.jpeg",
        tags: ["Narrative Design", "Game Design", "Character Design"],
        link: "https://drive.google.com/file/d/1GoYG94gdMzygQOBxJ4vcCWZJQmUVsq0K/view?usp=sharing",
    },
    {
        title: "Screenplay: Apotheosis",
        description: "Apotheosis is an original screenplay I wrote that explores themes of human morality and desperation.<br /><br />In a world where humans are ruled by robots, a young woman travels with her dog to pay tribute to the mechanical God-Queen. What she offers determines her family's status and living conditions for ages to come. ",
        image: "https://images.pexels.com/photos/3345860/pexels-photo-3345860.jpeg",
        tags: ["Writing"],
        link: "https://drive.google.com/file/d/1lHtkSc9zqPrGe6lxoZTZkyAoCj4OcbNb/view?usp=drive_link",
    },
    {
        title: "Little Gifts",
        description: "A short story about mourning and regret.",
        image: "https://images.pexels.com/photos/17941235/pexels-photo-17941235.jpeg",
        tags: ["Writing"],
        link: "https://drive.google.com/file/d/1C1moNROMB4dZ2nIrMELA2llx83L2lc73/view?usp=drive_link",
    },
    {
        title: "CK3 Magic System Design Document",
        description: "This CK3 design document outlines the magic system within the mod, detailing the spell trees, spells, and other system effects. This includes a roadmap and activity tracker with some links to Warcraft references. This document is quite comprehensive and complex. Beware!",
        image: magic,
        tags: ["Game Design", "Systems Design"],
        link: "https://docs.google.com/spreadsheets/d/1cXFqsVwHekKiyrowB0PA5Ia4zvXuuxnBAoug8Iusrj8/edit?usp=sharing",
    },
]