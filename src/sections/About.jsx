import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
{
    icon: Code2,
    title: "Clean Code",
    description: "Write scalable, maintainable code with strong architecture and clear standards.",
},
{
    icon: Rocket,
    title: "Performance",
    description: "Optimized builds, fast loading, and smooth UX—because speed matters.",
},
{
    icon: Users,
    title: "Collaborations",
    description: "Team-driven development with strong communication and shared ownership.",
},
{
    icon: Lightbulb,
    title: "Innovations",
    description: "Always learning, always improving—bringing new ideas to production.",
},
];


export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        Developer Profile
                        </span>
                    </div>

                    {/* opener */}
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Quest:
                        <span className="font-serif italic font-normal text-white">
                        {" "}Build. Deploy. Repeat.
                        </span>
                    </h2>

                    {/* brief description */}
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                        Full-Stack Web Developer specializing in the TALL stack. I build scalable apps with clean architecture and secure authentication.
                        </p>
                        <p>
                        I’ve shipped enterprise systems, and I’m currently expanding into MERN for modern JavaScript projects.
                        </p>
                    </div>

                    {/* mission/vision */}
                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            Level up every project with better performance, stronger architecture,
                            and a polished user experience.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="glass p-4 rounded-xl glow-border animate-fade-in animation-delay-300">
                            <div className="text-xs uppercase text-muted-foreground">Stack Mastery</div>
                            <div className="text-lg font-medium">TALL</div>
                        </div>
                        <div className="glass p-4 rounded-xl glow-border animate-fade-in animation-delay-300">
                            <div className="text-xs uppercase text-muted-foreground">Current Quest</div>
                            <div className="text-lg font-medium">MERN Stack</div>
                        </div>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{ animationDelay:`${(idx + 1) * 100}ms` }}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
};