import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, File, Layers, ShoppingCart, PlusCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: File,
    title: "Landing Page Website",
    price: 200,
    priceQualifier: "",
    description: "A powerful, single-page site perfect for product launches, events, or focused marketing campaigns."
  },
  {
    icon: Layers,
    title: "Small Business Website",
    price: 500,
    priceQualifier: "",
    description: "A complete, professional website with up to 5 pages (e.g., Home, About, Services, Blog, Contact)."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Website",
    price: 1000,
    priceQualifier: "Starting at",
    description: "A robust online store with everything you need to sell products, manage inventory, and process payments."
  },
];

const includedFeatures = [
  "Fully Mobile-Responsive Design",
  "SEO-Ready Foundation",
  "Smooth, Basic Animations",
  "1 Full Round of Revisions",
  "Contact Form Integration",
  "Social Media Links",
];

const addOns = [
  { title: "Domain + Hosting Setup", price: 50, qualifier: "" },
  { title: "Professional Copywriting", price: 100, qualifier: "" },
  { title: "Monthly Maintenance Plan", price: 50, qualifier: "/month" },
];

export default function WebDesignPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-headline">
          Custom Websites That Convert
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We design and build stunning, high-performing websites that reflect your brand and drive business growth.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                    <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-headline">{service.title}</CardTitle>
              </div>
              <CardDescription className="pt-4">{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold text-foreground">
                <span className="text-xl text-muted-foreground font-medium">{service.priceQualifier} </span>
                ${service.price}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="bg-card p-8 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold font-headline mb-6">Standard in Every Build</h3>
            <ul className="space-y-3">
                {includedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="bg-card p-8 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold font-headline mb-6">Optional Add-ons</h3>
            <ul className="space-y-4">
                {addOns.map((addOn) => (
                    <li key={addOn.title} className="flex items-start gap-4">
                       <PlusCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                       <div>
                           <h4 className="font-semibold text-foreground">{addOn.title}</h4>
                           <p className="text-muted-foreground">Add for ${addOn.price}{addOn.qualifier}</p>
                       </div>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
}
