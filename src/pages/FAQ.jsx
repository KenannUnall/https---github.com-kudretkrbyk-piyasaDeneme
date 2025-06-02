import dataFaq from "../assets/fake-data/data-faq";
import AccordionItem from "../features/faq/accordion-item";

function FAQ() {
  return (
    <div className="w-full font-chakra min-h-screen bg-[#0c1226] ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataFaq.map((item) => (
            <AccordionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
