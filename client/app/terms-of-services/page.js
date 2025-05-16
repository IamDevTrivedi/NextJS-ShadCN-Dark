import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TermsOfServicePage() {
    return (
        <div className="container mx-auto py-10 px-4 space-y-8">
            <div className="space-y-2 flex items-center justify-center flex-col">
                <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
                <p className="text-muted-foreground">Last updated: May 15, 2025</p>
            </div>

            <Separator className="my-6" />

            <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-foreground leading-7">
                    Welcome to Talkasaurus. These Terms of Service ("Terms") govern your access to and use of the Talkasaurus
                    service, including our website, chatbot, and any related services (collectively, the "Service"). Please read
                    these Terms carefully before using the Service.
                </p>
                <p className="text-foreground leading-7">
                    By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms,
                    you may not access or use the Service.
                </p>
            </div>

            <Card className="border bg-card text-card-foreground">
                <CardHeader>
                    <CardTitle>Acceptable Use</CardTitle>
                    <CardDescription>Guidelines for using our service</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-foreground leading-7">When using Talkasaurus, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-foreground">
                        <li>Use the Service in compliance with all applicable laws and regulations</li>
                        <li>Respect the privacy and rights of other users</li>
                        <li>Not use the Service to send spam, distribute malware, or engage in any harmful activities</li>
                        <li>Not attempt to gain unauthorized access to any part of the Service</li>
                        <li>
                            Not use the Service to generate content that is illegal, harmful, threatening, abusive, harassing,
                            defamatory, or otherwise objectionable
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="border bg-card text-card-foreground">
                <CardHeader>
                    <CardTitle>User Content</CardTitle>
                    <CardDescription>Your rights and responsibilities regarding content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-foreground leading-7">
                        You retain ownership of any content you submit to the Service. However, by submitting content, you grant
                        Talkasaurus a non-exclusive, worldwide, royalty-free license to use, store, and process your content solely
                        for the purpose of providing and improving the Service for you.
                    </p>
                    <p className="text-foreground leading-7">
                        As stated in our Privacy Policy, your chat history is used only to improve your individual chat experience
                        and is not shared with third parties or used for analytics purposes.
                    </p>
                </CardContent>
            </Card>

            <Card className="border bg-card text-card-foreground">
                <CardHeader>
                    <CardTitle>Intellectual Property Rights</CardTitle>
                    <CardDescription>Ownership of service and content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-foreground leading-7">
                        The Service, including all of its content, features, and functionality, is owned by Talkasaurus and its
                        licensors and is protected by copyright, trademark, and other intellectual property laws.
                    </p>
                    <p className="text-foreground leading-7">
                        You may not copy, modify, distribute, sell, or lease any part of the Service without our prior written
                        consent. You also may not reverse engineer or attempt to extract the source code of the Service, unless
                        applicable laws prohibit these restrictions.
                    </p>
                </CardContent>
            </Card>

            <Card className="border bg-card text-card-foreground">
                <CardHeader>
                    <CardTitle>Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-foreground leading-7">
                        To the maximum extent permitted by law, Talkasaurus and its affiliates, officers, employees, agents,
                        partners, and licensors will not be liable for any indirect, incidental, special, consequential, or punitive
                        damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                        resulting from:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-foreground">
                        <li>Your access to or use of or inability to access or use the Service</li>
                        <li>Any conduct or content of any third party on the Service</li>
                        <li>Any content obtained from the Service</li>
                        <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="border bg-card text-card-foreground">
                <CardHeader>
                    <CardTitle>Termination</CardTitle>
                    <CardDescription>When and how your access may be terminated</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground leading-7">
                        We may terminate or suspend your access to the Service immediately, without prior notice or liability, for
                        any reason whatsoever, including without limitation if you breach these Terms.
                    </p>
                    <p className="text-foreground leading-7">
                        Upon termination, your right to use the Service will immediately cease. If you wish to terminate your
                        account, you may simply discontinue using the Service or contact us to request account deletion.
                    </p>
                </CardContent>
            </Card>

            <Card className="border bg-card text-card-foreground">
                <CardHeader>
                    <CardTitle>Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground leading-7">
                        These Terms shall be governed and construed in accordance with the laws of the State of California, without
                        regard to its conflict of law provisions.
                    </p>
                    <p className="text-foreground leading-7">
                        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                        rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                        provisions of these Terms will remain in effect.
                    </p>
                </CardContent>
            </Card>

            <Card className="border bg-card text-card-foreground">
                <CardHeader>
                    <CardTitle>Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground leading-7">
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
                        material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
                    </p>
                    <p className="text-foreground leading-7">
                        By continuing to access or use our Service after those revisions become effective, you agree to be bound by
                        the revised terms. If you do not agree to the new terms, please stop using the Service.
                    </p>
                </CardContent>
            </Card>

            <Card className="border bg-card text-card-foreground">
                <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground leading-7">
                        If you have any questions about these Terms, please contact us at:
                    </p>
                    <address className="not-italic mt-2 text-muted-foreground">
                        <div>Talkasaurus Inc.</div>
                        <div>legal@talkasaurus.example.com</div>
                        <div>123 AI Avenue, San Francisco, CA 94105</div>
                    </address>
                </CardContent>
            </Card>
        </div>
    )
}
