import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AccordionItem from './accordion-item';

FAQ.propTypes = {
    data: PropTypes.array,
};

function FAQ(props) {
    const { data } = props;

    const [dataBlock] = useState({
        subtitle: 'FAQs',
        title: 'Looking for answers?'
    });

    return (
        <section className="py-20 bg-[#141A31]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
                    <div className="space-y-4">
                        <p className="text-[#14C2A3] font-bold uppercase tracking-wider">{dataBlock.subtitle}</p>
                        <h4 className="text-3xl md:text-4xl font-bold text-white">{dataBlock.title}</h4>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="800">
                    <div className="space-y-4">
                        {data.slice(0, 4).map(item => (
                            <AccordionItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;