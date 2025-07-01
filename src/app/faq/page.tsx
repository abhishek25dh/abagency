import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on complexity. For video editing, our standard turnaround is 2-4 business days. For web design, a landing page can take about a week, while a multi-page business site may take 2-3 weeks. We'll provide a specific timeline after discussing your project details."
    },
    {
        question: "Do you offer revisions?",
        answer: "Absolutely. We want you to be 100% satisfied. Our web design packages include one full round of revisions. For video editing, we offer up to two rounds of minor revisions. Additional major revisions can be requested and will be quoted separately."
    },
    {
        question: "Can I request a custom package?",
        answer: "Yes! We understand that every project is unique. If our standard packages don't fit your needs, please contact us with your requirements, and we'll be happy to create a custom quote for you."
    },
    {
        question: "What do you need from me to get started?",
        answer: "For video editing, we'll need all your raw footage, any specific branding assets (logos, fonts, colors), and a brief outlining your vision for the final video. For web design, we'll need your branding assets, content (text and images) for each page, and examples of websites you like."
    },
    {
        question: "Who provides the music and stock footage for videos?",
        answer: "We use licensed, royalty-free music and stock footage from our extensive libraries. This is included in the package price, so you don't have to worry about copyright issues."
    },
    {
        question: "Do you provide hosting for websites?",
        answer: "While we don't host websites directly, we offer a 'Domain + Hosting Setup' add-on for a one-time fee of $50. We will help you choose the best provider for your needs (like Vercel, Netlify, or a traditional host) and get everything configured correctly."
    },
];

export default function FAQPage() {
    return (
        <div className="container mx-auto px-4 py-16 sm:py-24">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-headline">
                    Frequently Asked Questions
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Have questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
                </p>
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
