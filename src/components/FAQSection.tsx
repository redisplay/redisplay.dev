import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import faqContent from "@/data/faq.md?raw";

const FAQSection = () => {
  const [faqData, setFaqData] = useState<Array<{ question: string; answer: string }>>([]);

  useEffect(() => {
    // Parse markdown content into Q&A pairs
    const lines = faqContent.split("\n");
    const faqs: Array<{ question: string; answer: string }> = [];
    let currentQuestion = "";
    let currentAnswer: string[] = [];
    let inAnswer = false;

    for (const line of lines) {
      // Check if line is a heading (question)
      if (line.startsWith("## ")) {
        // Save previous Q&A if exists
        if (currentQuestion && currentAnswer.length > 0) {
          faqs.push({
            question: currentQuestion,
            answer: currentAnswer.join("\n"),
          });
        }
        // Start new question
        currentQuestion = line.replace("## ", "").trim();
        currentAnswer = [];
        inAnswer = true;
      } else if (inAnswer && line.trim()) {
        // Add to current answer
        currentAnswer.push(line);
      }
    }

    // Don't forget the last one
    if (currentQuestion && currentAnswer.length > 0) {
      faqs.push({
        question: currentQuestion,
        answer: currentAnswer.join("\n"),
      });
    }

    setFaqData(faqs);
  }, []);

  return (
    <section id="faq" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Redisplay
          </p>
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => (
                          <a
                            {...props}
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        ),
                        p: ({ node, ...props }) => <p {...props} className="mb-3" />,
                        ul: ({ node, ...props }) => <ul {...props} className="list-disc ml-6 mb-3" />,
                        ol: ({ node, ...props }) => <ol {...props} className="list-decimal ml-6 mb-3" />,
                        li: ({ node, ...props }) => <li {...props} className="mb-1" />,
                        strong: ({ node, ...props }) => <strong {...props} className="font-semibold text-foreground" />,
                      }}
                    >
                      {faq.answer}
                    </ReactMarkdown>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

