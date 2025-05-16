import React from "react";
import {
  Info,
  Shield,
  Home,
  FileText,
  MessageCircle,
  Send,
  Twitter,
  Mail,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const navigationLinks = [
  {
    href: "/",
    icon: <Home size={16} />,
    label: "Home",
  },
  {
    href: "/about",
    icon: <Info size={16} />,
    label: "About",
  },
  {
    href: "/contact",
    icon: <Mail size={16} />,
    label: "Contact",
  },
  {
    href: "/privacy-policy",
    icon: <Shield size={16} />,
    label: "Privacy Policy",
  },
  {
    href: "/terms-of-services",
    icon: <FileText size={16} />,
    label: "Terms of Services",
  },
  {
    href: "/chat",
    icon: <MessageCircle size={16} />,
    label: "Chat",
  },
];

const socialLinks = [
  {
    href: "#",
    icon: <Twitter size={20} />,
    label: "Twitter",
  },
  {
    href: "#",
    icon: <Mail size={20} />,
    label: "Email",
  },
  {
    href: "#",
    icon: <Instagram size={20} />,
    label: "Instagram",
  },
  {
    href: "#",
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-slate-800 text-accent-foreground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-13 gap-5">


          {/* Brand Section */}
          <div className="md:col-span-4">
            <div className="text-3xl font-bold">Talkasauras</div>
            <div className="text-lg mt-2 text-accent-foreground font-extralight">
              Making AI convenient for everyone
            </div>

          
          
            {/* Telegram Link for Mobile */}
            <div className="mt-6 md:hidden">
              <h3 className="text-lg font-bold mb-3">Try us on Telegram</h3>
              <a
                href="https://t.me/talkasaurus_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent-foreground hover:text-muted-foreground transition-colors"
              >
                <Send size={16} />
                <span>t.me/talkasaurus_bot</span>
              </a>
            </div>
          </div>



          {/* Navigation Section */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-accent-foreground hover:text-muted-foreground transition-colors"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* Telegram Section - Hidden on Mobile */}
          <div className="md:col-span-3 hidden md:block">
            <h3 className="text-lg font-bold mb-4">Try us on Telegram</h3>
            <a
              href="https://t.me/talkasaurus_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-foreground hover:text-muted-foreground transition-colors"
            >
              <Send size={16} />
              <span>t.me/talkasaurus_bot</span>
            </a>
          </div>



          {/* Social Links Section */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="bg-background hover:bg-muted p-2 rounded-md transition-colors border border-muted"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>



        {/* Copyright Section */}
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm text-accent-foreground">
          <p>© {new Date().getFullYear()} Talkasauras. All rights reserved.</p>
        </div>



      </div>
    </footer>
  );
};

export default Footer;
