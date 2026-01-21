import { Github, Linkedin, Heart } from "lucide-react";

const socialLinks = [
{ icon: Github, href: "https://github.com/Jeyzii", label: "Github" },
{ icon: Linkedin, href: "https://www.linkedin.com/in/juan-carlo-bartolome/", label: "Linkedin" },
];

const footerLinks = [
{ href: "#about", label: "About" },
{ href: "#projects", label: "Projects" },
{ href: "#experience", label: "Experience" },
{ href: "#contact", label: "Contact" },
];

export const Footer = () => {
const currentYear = new Date().getFullYear();

return (
    <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
            JCDB<span className="text-primary">.</span>
            </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
            <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-primary transition-colors"
            >
                {link.label}
            </a>
            ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
            {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
                <a
                target="blank"
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="p-2 rounded-full border border-border hover:border-primary transition-colors"
                >
                <Icon className="w-5 h-5" />
                </a>
            );
            })}
        </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-muted">
        © {currentYear} Juan Carlo Bartolome. All rights reserved.
        </div>
    </div>
    </footer>
);
};
