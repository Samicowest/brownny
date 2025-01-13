import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionSample(): JSX.Element {
  return (
    <div className="py-8 bg-pinkLight px-4">
      <div className="text-3xl md:text-4xl font-bold font-kanit py-8 text-center">
        FAQ
      </div>
      <Accordion type="single" collapsible className="max-w-5xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl md:text-2xl font-bold">
            What you need to know about brownny brand
          </AccordionTrigger>
          <AccordionContent className="text-md md:text-xl font-normal">
            Brownny brand is a brand that is base on skin care and hair product
            providing the best product at an affordable price
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl md:text-2xl font-bold">
            How do i communicate the Brownny?
          </AccordionTrigger>
          <AccordionContent className="text-md md:text-xl font-normal">
            Brownny has various means of communication you can choose to chat
            them up on whatsapp and other means you can chat us on our website
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl md:text-2xl font-bold">
            What you need to know about brownny brand
          </AccordionTrigger>
          <AccordionContent className="text-md md:text-xl font-normal">
            Brownny brand is a brand that is base on skin care and hair product
            providing the best product at an affordable price
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl md:text-2xl font-bold">
            How do i communicate the Brownny?
          </AccordionTrigger>
          <AccordionContent className="text-md md:text-xl font-normal">
            Brownny has various means of communication you can choose to chat
            them up on whatsapp and other means you can chat us on our website
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
