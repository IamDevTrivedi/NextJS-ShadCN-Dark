'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.target);

            formData.append('access_key', process.env.NEXT_PUBLIC_WEB3_FORM_API_KEY);

            const response = await fetch(process.env.NEXT_PUBLIC_WEB3_FORM_API_URL, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            toast('Message sent successfully', {
                description: "We'll get back to you as soon as possible",
                action: {
                    label: 'Close',
                    onClick: () => console.log('Close'),
                },
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            toast('Error occured while submitting the form');
        } finally {
            setIsSubmitting(false);
        }
    };

    const router = useRouter();

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
                    <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
                    <p className="text-muted-foreground">
                        We'd love to hear from you. Send us a message and we'll respond as soon as
                        possible.
                    </p>
                </div>

                <div className="w-10" />
            </header>

            <Separator className={'mb-4'} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Information Cards */}
                <div className="space-y-11">
                    {/* Email Card */}
                    <Card className="border bg-card text-card-foreground">
                        <CardContent className="">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 rounded-full">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-md">Email</h3>
                                    <p className="text-primary">devtrivedi.work@gmail.com</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Phone Card */}
                    <Card className="border bg-card text-card-foreground">
                        <CardContent className="">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 rounded-full">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-md">Phone</h3>
                                    <p className="text-primary">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Address Card */}
                    <Card className="border bg-card text-card-foreground">
                        <CardContent className="">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 rounded-full">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-md">Address</h3>
                                    <p className="text-primary">DA-IICT Road,</p>
                                    <p className="text-muted-foreground">
                                        Gandhinagar 382 007, Gujarat, India
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <Card className="border bg-card text-card-foreground h-full">
                        <CardHeader>
                            <CardTitle>Send us a message</CardTitle>
                            <CardDescription>
                                Fill out the form below and we'll get back to you as soon as
                                possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Your email address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        placeholder="What is this regarding?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="How can we help you?"
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full sm:w-auto"
                                    disabled={isSubmitting}
                                    size="lg"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
