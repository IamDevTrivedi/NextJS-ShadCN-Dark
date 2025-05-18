import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';

export function TelegramBotPromo() {
    return (
        <section className="max-w-7xl mx-auto bg-background rounded-3xl p-8 mb-6 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-2">
                {/* Text and Button */}
                <div className="w-full md:w-3/5">
                    <h2 className="text-2xl md:text-3xl text-accent-foreground font-bold mb-4">
                        Chat with the AI Bot on Telegram
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        Prefer chatting on mobile? Use our official Telegram bot for the same
                        powerful features — right from your phone. Fast, secure, and always
                        available.
                    </p>

                    <Button asChild>
                        <a
                            href="https://t.me/talkasauras_bot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <Bot className="w-4 h-4" />
                            Try Telegram Bot
                        </a>
                    </Button>
                </div>

                {/* QR Code Image */}
                <div className="w-full md:w-2/5 flex justify-center">
                    <a href="http://t.me/talkasauras_bot" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/assets/images/telegram-qr.png"
                            alt="Scan to open Telegram bot"
                            width={200}
                            height={200}
                            className="rounded-xl border shadow"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
