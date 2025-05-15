import React from "react";
import {
  MessageSquare,
  Info,
  Shield,
  Home,
  Send,
  Twitter,
  Facebook,
  Mail,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-background text-accent-foreground py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between text-center">
          <div className="w-full md:w-1/4 flex flex-col">
            <div className="text-3xl font-bold">Talkasauras</div>

            <div className="text-lg mt-2  text-accent-foreground font-extralight">
              Making AI convinient for everyone
            </div>
          </div>

          {/* nfkwnefnwek */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Navigation Links */}
            <div className="space-y-4 flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-accent-foreground hover:text-muted-foreground transition-colors"
                  >
                    <Home size={16} />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chat"
                    className="flex items-center gap-2 text-accent-foreground hover:text-muted-foreground transition-colors"
                  >
                    <MessageSquare size={16} />
                    <span>Chat</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="flex items-center gap-2 text-accent-foreground hover:text-muted-foreground transition-colors"
                  >
                    <Info size={16} />
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="flex items-center gap-2 text-accent-foreground hover:text-muted-foreground transition-colors"
                  >
                    <Shield size={16} />
                    <span>Privacy</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Try on Telegram */}
            <div className="space-y-4">
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

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="bg-background hover:bg-muted p-2 rounded-md transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="bg-background hover:bg-muted p-2 rounded-md transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="#"
                  className="bg-background hover:bg-muted p-2 rounded-md transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-background hover:bg-muted p-2 rounded-md transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* nfkwnefnwek */}
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm text-accent-foreground">
          <p>© {new Date().getFullYear()} Talksauras. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
