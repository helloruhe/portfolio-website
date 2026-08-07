export const HeaderText = ({className="", text}) => {
    const baseClasses = "text-center text-3xl glow-text md:text-4xl lg:text-5xl leading-tight animate-fade-in animation-delay-100";
    const classes = `${baseClasses} ${className}`;
    return <h2 className={classes}>
        <span className="text-parchment ">{text}</span>
    </h2>
};