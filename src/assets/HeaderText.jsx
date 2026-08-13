export const HeaderText = ({className="", text}) => {
    const baseClasses = "text-center text-4xl glow-text md:text-5xl lg:text-6xl leading-tight animate-fade-in animation-delay-100";
    const classes = `${baseClasses} ${className}`;
    return <h2 className={classes}>
        <span className="text-parchment ">{text}</span>
    </h2>
};