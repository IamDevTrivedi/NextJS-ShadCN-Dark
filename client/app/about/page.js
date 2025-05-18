'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Bot, MessageSquare, Shield, Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
    const router = useRouter();

    const features = [
        {
            icon: <Bot className="h-6 w-6 text-primary" />,
            title: 'Intelligent Conversations',
            description:
                'Our AI understands context and nuance, enabling natural, flowing conversations that feel human-like and intuitive.',
        },
        {
            icon: <MessageSquare className="h-6 w-6 text-primary" />,
            title: 'Personalized Experience',
            description:
                'Talkasaurus learns from your interactions to provide increasingly relevant and helpful responses tailored to your needs.',
        },
        {
            icon: <Shield className="h-6 w-6 text-primary" />,
            title: 'Privacy-Focused',
            description:
                'Your data is yours alone. We use your chat history only to improve your individual experience, never for analytics or third parties.',
        },
        {
            icon: <Sparkles className="h-6 w-6 text-primary" />,
            title: 'Continuous Improvement',
            description:
                'Our AI is constantly evolving, with regular updates that enhance capabilities, fix issues, and introduce new features.',
        },
    ];

    return (
        <div className="container mx-auto py-10 px-4 space-y-8">
            {/* Header Section */}
            <header className="flex items-center">
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="mr-4"
                    aria-label="Go back"
                >
                    <ArrowLeft className="h-5 w-5" />
                </Button>

                <div className="flex-1 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">About Talkasaurus</h1>
                    <p className="text-muted-foreground">Conversational AI for everyone</p>
                </div>

                <div className="w-10" />
            </header>

            <Separator />

            {/* Introduction Section */}
            <section className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-foreground text-lg leading-7">
                    Talkasaurus is an advanced conversational AI platform designed to make
                    artificial intelligence accessible, helpful, and safe for everyone. Our mission
                    is to create AI assistants that understand context, learn from interactions, and
                    provide valuable assistance while respecting user privacy.
                </p>
            </section>

            {/* Features Section */}
            <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <Card key={index} className="border bg-card text-card-foreground">
                        <CardHeader className="pb-2">
                            <div className="mb-2">{feature.icon}</div>
                            <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </section>

            {/* Story Section */}
            <section>
                <Card className="border bg-card text-card-foreground">
                    <CardHeader>
                        <CardTitle>Our Story</CardTitle>
                        <CardDescription>How Talkasaurus came to be</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-foreground leading-7">
                            Founded in 2023 by a team of AI researchers and engineers passionate
                            about making artificial intelligence more accessible and beneficial,
                            Talkasaurus began as a project to create conversational AI that truly
                            understood people.
                        </p>
                        <p className="text-foreground leading-7">
                            Today, we're proud to offer an AI assistant that millions of users rely
                            on daily for information, creative inspiration, productivity assistance,
                            and meaningful conversation—all while maintaining the highest standards
                            of privacy and ethical AI development.
                        </p>
                        <p className="text-foreground leading-7">
                            Our team continues to grow, bringing together diverse perspectives and
                            expertise to build AI that serves humanity's best interests.
                        </p>
                    </CardContent>
                </Card>
            </section>

            {/* Contact CTA Section */}
            <footer className="flex justify-center">
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                    Get in Touch
                </Link>
            </footer>
        </div>
    );
}
