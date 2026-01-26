const experiences = [
    {
        period: "Nov 2023 - Present",
        role: "Web App Developer",
        company: "CaPEx Cargo Padala Express",
        description: "Full-stack web developer specializing in building, optimizing, and scaling business-critical web applications using the TALL stack (Tailwind CSS, Alpine.js, Laravel, Livewire). Proven experience developing HRIS platforms and internal enterprise systems using the LIRT stack (Laravel, Inertia.js, React, Tailwind), alongside CRM and Order Management solutions. Strong background in Cloud Firestore integration, Checkmobi Flash Missed Call verification, and secure authentication workflows. Experienced in Agile/Scrum environments, collaborating with cross-functional teams to deliver high-quality, production-ready solutions with a focus on performance, reliability, and maintainability.",
        technologies: [
                "Laravel",
                "Livewire",
                "TALL Stack",
                "Tailwind CSS",
                "Alpine.js",
                "PHP",
                "JavaScript",
                "React.js",
                "Express.js",
                "Inertia.js",
                "Node.js",
                "REST APIs",
                "API Development",
                "Web Services API",
                "SQL",
                "Relational Databases",
                "MongoDB",
                "Cloud Firestore",
                "Git",
                "Bitbucket",
                "Postman",
                "Jira",
                "Atlassian Suite",
                "Agile",
                "Scrum",
                "Clean Coding",
                "Software Quality Assurance",
                "Data Migration",
                "gRPC"
        ],
        current: true,
    },{
        period: "Feb 2023 - May 2023",
        role: "Web Developer Intern",
        company: "Rakso CT",
        description: "Back-end developer on a team responsible for developing an event management system using PHP Laravel framework. Primary responsibilities include authentication, search functionality implementation, liking feature implementation, and other related tasks. Also participated in the development of flowcharts, database design, and other aspects of the system.",
        technologies: [
                "Laravel",
                "Livewire",
                "PHP",
                "JavaScript",
                "HTML",
                "CSS",
                "Bootstrap",
                "MySQL",
                "SQL",
                "Relational Databases",
                "Back-End Web Development",
                "Full-Stack Development",
                "Object-Oriented Programming (OOP)",
                "Data Migration",
                "Clean Coding",
                "Git",
                "Team Collaboration",
                "Telecommuting"
        ],
        current: false,
    },{
        period: "Dec 2018 - Feb 2019",
        role: "PHP Developer OJT",
        company: "Maximum Ideas Business Solutions, Inc.",
        description: "Back-end PHP developer on a four-person team building a time in/time out system, responsible for server-side logic, database integration, and system reliability.",
        technologies: [
                "PHP",
                "Object-Oriented Programming (OOP)",
                "MySQL",
                "SQL",
                "Back-End Web Development",
                "Web Development",
                "JavaScript",
                "HTML",
                "CSS",
                "Clean Coding",
                "Team Collaboration",
                "Critical Thinking",
                "Telecommuting"
        ],
        current: false,
    },
    // {
    //     period: "2019 - 2023",
    //     role: "Bachelor of Science in Information Technology",
    //     company: "Adamson University",
    //     description: "Solidified foundational IT skills and advanced into a lead developer role. Achieved academic honors and successfully delivered a capstone project, demonstrating real-world full-stack development and leadership capabilities.",
    //     technologies: [
    //             "Magna Cum Laude",
    //             "Valedictorian",
    //             "Academic Scholar",
    //             "Microsoft Technology Associate: Database Administration Fundamentals",
    //             "Best Undergraduate Research & Pitching",
    //             "Best Paper Presentation",
    //     ],
    //     current: false,
    // },
]

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96
                h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto mb-16 text-center">
                        <span className="text-secondary-foreground text-sm font-medium
                            tracking-wider uppercase animate-fade-in">
                            Career Journey
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6
                            animate-fade-in animation-delay-100 text-secondary-foreground">
                            Professional{" "}
                            <span className="font-serif italic font-normal text-white">
                                timeline.
                            </span>
                        </h2>

                        <p className="text-muted-foreground animate-fade-in animation-delay-200">
                            A timeline of roles, projects, and milestones.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                        <div className="space-y-12">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                    style={{ animationDelay:`${(idx + 1) * 150}ms` }}>

                                    <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                        {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>}
                                    </div>

                                    <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                        <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                            <span className="text-sm text-primary font-medium">{exp.period}</span>
                                            <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                            <p className="text-muted-foreground">{exp.company}</p>
                                            <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                            <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                                                {exp.technologies.map((tech, techIdx) => (
                                                    <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">
                                                        {tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </section>
    );
};