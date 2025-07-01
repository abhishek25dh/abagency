import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, HandHeart, Target } from "lucide-react";
import Image from "next/image";

const teamMembers = [
    { name: "Alex Johnson", role: "Co-Founder & Lead Video Editor", avatar: "https://placehold.co/200x200.png", aiHint: "person portrait", bio: "With over 8 years in post-production, Alex has a keen eye for storytelling and a passion for creating cinematic experiences. He started A&B to bring high-end video editing to creators and businesses of all sizes." },
    { name: "Ben Carter", role: "Co-Founder & Lead Web Designer", avatar: "https://placehold.co/200x200.png", aiHint: "person smiling", bio: "Ben is a UX/UI enthusiast who believes a great website is the cornerstone of any successful business. He combines modern design trends with robust functionality to build sites that not only look great but also perform." },
];

const tools = ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Figma", "Webflow", "Next.js & React"];

export default function AboutPage() {
    return (
        <div className="bg-card">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-headline">
                        The Creative Force Behind Your Brand
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        We are a team of passionate creatives dedicated to helping you make a lasting impression in the digital world.
                    </p>
                </div>

                {/* Our Story */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold font-headline mb-4">Our Story</h2>
                        <div className="text-muted-foreground space-y-4">
                           <p>A&B Agency was founded on a simple principle: creative services should be accessible, professional, and impactful. We saw a gap where businesses and creators had to choose between overpriced agencies and unreliable freelancers.</p>
                           <p>We decided to bridge that gap by offering high-quality video editing and web design under one roof, with transparent pricing and a collaborative approach. Our goal is to become an extension of your team, providing the expertise you need to succeed.</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <Image src="https://placehold.co/600x400.png" alt="A&B Agency team collaborating" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="team collaboration" />
                    </div>
                </div>

                 {/* Mission Section */}
                <div className="mt-20 grid md:grid-cols-2 gap-8 text-center">
                    <Card>
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                                <Target className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline mt-2">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">To empower businesses and creators with stunning visual content and powerful websites that drive growth, engagement, and success.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                                <HandHeart className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline mt-2">Our Values</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">We believe in collaboration, transparency, quality, and a client-first approach in everything we do.</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Team Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center font-headline mb-12">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {teamMembers.map(member => (
                            <div key={member.name} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 p-6 bg-background rounded-lg">
                                <Avatar className="w-24 h-24 flex-shrink-0">
                                    <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint} />
                                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-primary font-medium">{member.role}</p>
                                    <p className="text-muted-foreground mt-2">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Tools Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center font-headline mb-8">Our Toolkit</h2>
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">We use industry-standard tools to deliver professional, high-quality results.</p>
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                        {tools.map(tool => (
                            <div key={tool} className="flex items-center gap-2 p-3 bg-background rounded-md border">
                                <BrainCircuit className="h-5 w-5 text-primary" />
                                <span className="font-medium">{tool}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
