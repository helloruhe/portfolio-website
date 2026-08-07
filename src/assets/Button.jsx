export const Button = ({className="", size="default", children, }) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-light bg-stone-light text-parchment-dim hover:bg-primary/85 shadow-lg shadow-stone-light/30";

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 base",
        lg: "px-8 py-4 text-lg"
    }
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
    return <button className={classes}>
        <span className="relative flex center justify-center gap-2">
            {children}
        </span>
    </button>
};