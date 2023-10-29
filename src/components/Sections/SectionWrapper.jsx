import { cn } from "../../lib/classnames";

const SectionWrapper = ({ children, className, id }) => {
    return (
        <section id={id} className={cn("relative w-full py-20 px-10 odd:bg-white even:bg-slate-100", className)}>
            {children}
        </section>
    );
};

export default SectionWrapper;
