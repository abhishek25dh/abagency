import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Video, PenTool, Star } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Jake T.",
    title: "Content Creator",
    quote: "A&B Agency took my boring YouTube channel and gave it life! The editing is top-notch and my engagement has skyrocketed. Highly recommend!",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "man smiling"
  },
  {
    name: "Sarah L.",
    title: "Small Business Owner",
    quote: "The website they designed for my boutique is not only beautiful but also incredibly functional. My online sales have doubled since the launch.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman portrait"
  },
  {
    name: "Mike R.",
    title: "Marketing Manager",
    quote: "Fast, professional, and creative. A&B delivered a promotional video that exceeded all our expectations. We'll definitely be back for more projects.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "man office"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-6 font-headline">
            Bring Your Brand to Life with Pro Video & Web Design.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
            High-Quality Video Editing & Stunning Web Design Under One Roof. We help businesses and creators shine online.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link href="/video-editing">Explore Video Editing <Video className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/web-design">Explore Web Design <PenTool className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Who We Are & What We Do</h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    A&B Agency is your dedicated partner for digital excellence. We combine creative video editing with strategic web design to build powerful brand experiences that captivate and convert.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="flex-row items-center gap-4 pb-2">
                        <div className="p-3 rounded-md bg-primary/10">
                            <Video className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline">Video Editing</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">From dynamic YouTube content and viral short-form videos to professional corporate promos, we craft visually stunning narratives that engage your audience and tell your story effectively.</p>
                         <Button variant="link" asChild className="p-0 mt-4 h-auto">
                            <Link href="/video-editing">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                        </Button>
                    </CardContent>
                </Card>
                <Card className="hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="flex-row items-center gap-4 pb-2">
                        <div className="p-3 rounded-md bg-primary/10">
                            <PenTool className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline">Web Design</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">We build beautiful, responsive, and SEO-ready websites that provide a seamless user experience. Whether it's a landing page or a full e-commerce store, we design to meet your goals.</p>
                        <Button variant="link" asChild className="p-0 mt-4 h-auto">
                            <Link href="/web-design">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Real stories from happy partners who've seen real results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardContent className="pt-6">
                  <div className="flex text-primary mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardHeader className="flex-row items-center gap-4 pt-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
             <Button variant="outline" asChild>
                 <Link href="/testimonials">View All Testimonials</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">Ready to Elevate Your Brand?</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4 mb-8">
            Let's discuss your project. We're excited to learn about your vision and how we can help you achieve it.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
