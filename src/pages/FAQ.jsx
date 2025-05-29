import dataFaq from "../assets/fake-data/data-faq";
import AccordionItem from "../features/faq/accordion-item";

function FAQ() {
  return (
    <div className="w-full">
      <section className="tf-section faq bg-st2 p-10 py-24 w-full">
        <div className="container w-full">
          <div className="w-full flex flex-col  ">
            <div className="flex flex-col justify-center items-center gap-10 w-full">
              <div
                className="flat-accordion w-full "
                data-aos="fade-up"
                data-aos-duration="800"
              >
                {dataFaq.slice(0, 5).map((item) => (
                  <AccordionItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div
                className="flat-accordion"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                {dataFaq.slice(1, 6).map((item) => (
                  <AccordionItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
