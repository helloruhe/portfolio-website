export const Footer = () => {
    return (
        <footer className="border-t border-gold/20 bg-black/40 backdrop-blur-sm">
            <div className="mx-auto px-10 py-8 xl:px-20">
                <div className="space-y-4 text-center text-md text-parchment-dim">
                    <p>
                        © {new Date().getFullYear()} Ariana Tranumn. All rights reserved.
                    </p>
                    <div className="space-y-2">
                        <p>
                            Background image by{" "}
                            <a
                                href="https://urlich.art/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-parchment hover:text-gold transition-colors"
                            >
                                Philipp A. Urlich
                            </a>
                            <br/>All other assets belong to their respective owners.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
