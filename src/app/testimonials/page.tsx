import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jake T.",
    business: "JT Vlogs, Content Creator",
    quote: "A&B Agency took my boring YouTube channel and gave it life! The editing is top-notch, the turnaround is fast, and my engagement has skyrocketed. They understand the YouTube algorithm and what makes a video pop. Highly recommend!",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "man smiling",
  },
  {
    name: "Sarah L.",
    business: "The Bloom Boutique, Owner",
    quote: "The website they designed for my boutique is not only beautiful but also incredibly functional. My online sales have doubled since the launch. The process was smooth, and they listened to all my ideas.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman portrait",
  },
  {
    name: "Mike R.",
    business: "Innovate Inc, Marketing Manager",
    quote: "Fast, professional, and creative. A&B delivered a promotional video that exceeded all our expectations. It perfectly captured our brand's message and has been a huge hit with our audience. We'll definitely be back for more projects.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "man office",
  },
  {
    name: "Emily C.",
    business: "Wanderlust Weddings, Wedding Planner",
    quote: "I've worked with many video editors for my clients' weddings, and A&B Agency is by far the best. They create such emotional and stunning highlight reels that my couples cherish forever. Their work is pure magic.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman professional",
  },
  {
    name: "David Chen",
    business: "FitLife App, Founder",
    quote: "We needed a series of short, punchy videos for our social media ad campaign. A&B delivered exactly what we needed, on time and on budget. The videos are high-energy and have a great ROI.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "asian man",
  },
  {
    name: "Maria Garcia",
    business: "Garcia Legal, Attorney",
    quote: "I was hesitant about creating a website for my law firm, but A&B made it an easy and rewarding experience. The site is professional, easy to navigate, and has helped me attract new clients. I couldn't be happier with the result.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "hispanic woman",
  },
];

export default function TestimonialsPage() {
    return (
        <div className="container mx-auto px-4 py-16 sm:py-24">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-headline">
                    Trusted by Brands and Creators
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Don't just take our word for it. Here's what our clients have to say about working with us.
                </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-card/50">
                        <CardContent className="p-6 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex text-primary mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                                </div>
                                <blockquote className="italic text-muted-foreground">
                                    "{testimonial.quote}"
                                </blockquote>
                            </div>
                            <div className="mt-6 flex items-center gap-4">
                                <Avatar>
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
