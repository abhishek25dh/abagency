import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-card">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-headline">
                        Get In Touch
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        We're excited to hear about your project. Fill out the form below, and we'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="bg-background p-8 rounded-lg shadow-lg">
                       <h2 className="text-2xl font-bold mb-6 font-headline">Contact Form</h2>
                       <ContactForm />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold font-headline">Other Ways to Reach Us</h2>
                        <div className="flex items-start gap-4">
                             <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                                <Mail className="h-6 w-6 text-primary" />
                             </div>
                             <div>
                                <h3 className="text-lg font-semibold text-foreground">Email</h3>
                                <p className="text-muted-foreground">For general inquiries, partnership proposals, or anything else.</p>
                                <a href="mailto:hello@abagency.com" className="text-primary hover:underline break-all">
                                    hello@abagency.com
                                </a>
                             </div>
                        </div>
                         <div className="flex items-start gap-4">
                             <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                                <Phone className="h-6 w-6 text-primary" />
                             </div>
                             <div>
                                <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                                <p className="text-muted-foreground">For urgent matters, feel free to give us a call.</p>
                                <a href="tel:+1234567890" className="text-primary hover:underline">
                                    +1 (234) 567-890
                                </a>
                             </div>
                        </div>
                         <div className="flex items-start gap-4">
                             <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                                <MessageSquare className="h-6 w-6 text-primary" />
                             </div>
                             <div>
                                <h3 className="text-lg font-semibold text-foreground">WhatsApp</h3>
                                <p className="text-muted-foreground">Prefer to chat? Send us a message on WhatsApp.</p>
                                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                    Message us on WhatsApp
                                </a>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
