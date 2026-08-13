export const Button = ({
    className = "",
    size = "default",
    children,
    as: Component = "button",
    href,
    target,
    rel,
    onClick,
    type = "button",
    ...props
}) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-light bg-stone-light text-parchment-dim hover:bg-primary/85 shadow-lg shadow-stone-light/30 hover:bg-gold/20";

    const sizeClasses = {
        sm: "px-4 py-2 text-md",
        default: "px-6 py-3 base",
        lg: "px-8 py-4 text-xl"
    };

    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
    const content = (
        <span className="relative flex center justify-center gap-2">
            {children}
        </span>
    );

    if (Component === "a" || href) {
        return (
            <a
                className={classes}
                href={href}
                target={target}
                rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
                onClick={onClick}
                {...props}
            >
                {content}
            </a>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick} {...props}>
            {content}
        </button>
    );
};