import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Zap, Youtube, Smartphone, Briefcase, Heart } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Youtube,
    title: "YouTube Video Editing",
    prices: [
      { duration: "Up to 10 mins", price: 150 },
      { duration: "10-20 mins", price: 250 },
    ],
    description: "Perfect for content creators who want to increase engagement and production value on their channel."
  },
  {
    icon: Smartphone,
    title: "Short-Form Content",
    prices: [
      { duration: "Single Video (<60s)", price: 40 },
      { duration: "3-Pack Bundle", price: 100 },
    ],
    description: "Engaging, fast-paced edits for TikTok, Instagram Reels, and YouTube Shorts to capture attention instantly."
  },
  {
    icon: Briefcase,
    title: "Corporate/Promo Videos",
    prices: [{ duration: "Per project", price: 300 }],
    description: "Professional editing for brand stories, product showcases, and promotional content to elevate your company's image."
  },
  {
    icon: Heart,
    title: "Wedding/Event Highlights",
    prices: [{ duration: "Per project", price: 350 }],
    description: "Beautifully crafted highlight reels that capture the magic of your special day or event."
  },
];

const includedFeatures = [
    "Professional Transitions & Effects",
    "Color Grading & Correction",
    "Engaging Subtitles/Captions",
    "Royalty-Free Music & Sound FX",
    "Stock Footage Integration (if needed)",
    "Intro & Outro Graphics",
];

export default function VideoEditingPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-headline">
          Professional Video Editing Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We transform your raw footage into polished, engaging videos that captivate your audience and deliver your message.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4">
                 <div className="p-3 rounded-md bg-primary/10">
                    <service.icon className="h-8 w-8 text-primary" />
                 </div>
                 <CardTitle className="text-2xl font-headline">{service.title}</CardTitle>
              </div>
              <CardDescription className="pt-2">{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <h4 className="font-semibold mb-2 text-foreground">Pricing:</h4>
              <ul className="space-y-2 text-muted-foreground">
                {service.prices.map(p => (
                   <li key={p.duration} className="flex justify-between items-center">
                     <span>{p.duration}</span>
                     <span className="font-bold text-foreground text-lg">${p.price}</span>
                   </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
                <Button asChild className="w-full">
                    <Link href="/contact">Request a Quote</Link>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-card p-8 md:p-12 rounded-lg">
        <div>
            <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">What's Included in Every Package</h3>
            <ul className="space-y-3">
                {includedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="space-y-6">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h4 className="font-semibold text-lg text-foreground">Standard Turnaround</h4>
                    <p className="text-muted-foreground">Our standard delivery time is 2-4 business days, ensuring a swift yet high-quality result.</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10 flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h4 className="font-semibold text-lg text-foreground">Rush Delivery Available</h4>
                    <p className="text-muted-foreground">Need it faster? Opt for our rush delivery service for an additional $50 to get your project prioritized.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
