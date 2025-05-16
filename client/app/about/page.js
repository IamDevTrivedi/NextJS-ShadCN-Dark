import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Bot, MessageSquare, Shield, Sparkles } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">About Talkasaurus</h1>
        <p className="text-muted-foreground">Conversational AI for everyone</p>
      </div>

      <Separator className="my-6" />

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-foreground text-lg leading-7">
          Talkasaurus is an advanced conversational AI platform designed to make artificial intelligence accessible,
          helpful, and safe for everyone. Our mission is to create AI assistants that understand context, learn from
          interactions, and provide valuable assistance while respecting user privacy.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border bg-card text-card-foreground">
          <CardHeader className="pb-2">
            <Bot className="h-6 w-6 text-primary mb-2" />
            <CardTitle>Intelligent Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Our AI understands context and nuance, enabling natural, flowing conversations that feel human-like and
              intuitive.
            </p>
          </CardContent>
        </Card>

        <Card className="border bg-card text-card-foreground">
          <CardHeader className="pb-2">
            <MessageSquare className="h-6 w-6 text-primary mb-2" />
            <CardTitle>Personalized Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Talkasaurus learns from your interactions to provide increasingly relevant and helpful responses tailored
              to your needs.
            </p>
          </CardContent>
        </Card>

        <Card className="border bg-card text-card-foreground">
          <CardHeader className="pb-2">
            <Shield className="h-6 w-6 text-primary mb-2" />
            <CardTitle>Privacy-Focused</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Your data is yours alone. We use your chat history only to improve your individual experience, never for
              analytics or third parties.
            </p>
          </CardContent>
        </Card>

        <Card className="border bg-card text-card-foreground">
          <CardHeader className="pb-2">
            <Sparkles className="h-6 w-6 text-primary mb-2" />
            <CardTitle>Continuous Improvement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Our AI is constantly evolving, with regular updates that enhance capabilities, fix issues, and introduce
              new features.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border bg-card text-card-foreground">
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
          <CardDescription>How Talkasaurus came to be</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground leading-7">
            Founded in 2023 by a team of AI researchers and engineers passionate about making artificial intelligence
            more accessible and beneficial, Talkasaurus began as a project to create conversational AI that truly
            understood people.
          </p>
          <p className="text-foreground leading-7">
            Today, we're proud to offer an AI assistant that millions of users rely on daily for information, creative
            inspiration, productivity assistance, and meaningful conversation—all while maintaining the highest
            standards of privacy and ethical AI development.
          </p>
          <p className="text-foreground leading-7">
            Our team continues to grow, bringing together diverse perspectives and expertise to build AI that serves
            humanity's best interests.
          </p>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
