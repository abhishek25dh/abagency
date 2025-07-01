import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlayCircle, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const videoPortfolio = [
    { title: "Corporate Promo - Tech Startup", category: "Corporate", src: "https://placehold.co/1280x720.png", dataAiHint: "video thumbnail" },
    { title: "Wedding Highlight Film", category: "Wedding", src: "https://placehold.co/1280x720.png", dataAiHint: "wedding thumbnail" },
    { title: "YouTube Educational Content", category: "YouTube", src: "https://placehold.co/1280x720.png", dataAiHint: "education thumbnail" },
    { title: "Viral Instagram Reel", category: "Short-Form", src: "https://placehold.co/400x700.png", dataAiHint: "phone screen" },
];

const websitePortfolio = [
    { title: "E-commerce Fashion Store", category: "E-commerce", src: "https://placehold.co/1280x800.png", link: "#", dataAiHint: "website ecommerce" },
    { title: "Restaurant Booking Site", category: "Small Business", src: "https://placehold.co/1280x800.png", link: "#", dataAiHint: "website restaurant" },
    { title: "Photographer's Portfolio", category: "Small Business", src: "https://placehold.co/1280x800.png", link: "#", dataAiHint: "website portfolio" },
    { title: "SaaS Landing Page", category: "Landing Page", src: "https://placehold.co/1280x800.png", link: "#", dataAiHint: "website landing" },
];


export default function PortfolioPage() {
    return (
        <div className="container mx-auto px-4 py-16 sm:py-24">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-headline">
                    Our Work
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    We take pride in our work. Explore our portfolios to see the quality and creativity we bring to every project.
                </p>
            </div>

            <Tabs defaultValue="video" className="mt-12 w-full">
                <TabsList className="grid w-full grid-cols-2 md:w-[400px] mx-auto">
                    <TabsTrigger value="video">Video Portfolio</TabsTrigger>
                    <TabsTrigger value="web">Website Portfolio</TabsTrigger>
                </TabsList>
                <TabsContent value="video" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {videoPortfolio.map((video, index) => (
                            <Card key={index} className="overflow-hidden group">
                                <CardContent className="p-0">
                                    <div className="relative">
                                        <Image
                                            src={video.src}
                                            alt={video.title}
                                            width={1280}
                                            height={720}
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                            data-ai-hint={video.dataAiHint}
                                        />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <PlayCircle className="h-16 w-16 text-white" />
                                        </div>
                                    </div>
                                    <div className="p-4 bg-card">
                                        <h3 className="font-semibold text-lg">{video.title}</h3>
                                        <p className="text-sm text-primary">{video.category}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="web" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {websitePortfolio.map((site, index) => (
                            <Card key={index} className="overflow-hidden group">
                                <CardContent className="p-0">
                                     <div className="relative">
                                        <Image
                                            src={site.src}
                                            alt={site.title}
                                            width={1280}
                                            height={800}
                                            className="w-full h-auto object-cover"
                                            data-ai-hint={site.dataAiHint}
                                        />
                                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Button asChild>
                                                <a href={site.link} target="_blank" rel="noopener noreferrer">
                                                    Visit Site <LinkIcon className="ml-2 h-4 w-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-card">
                                        <h3 className="font-semibold text-lg">{site.title}</h3>
                                        <p className="text-sm text-primary">{site.category}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
