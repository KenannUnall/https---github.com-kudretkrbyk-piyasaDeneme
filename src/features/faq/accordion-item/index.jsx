import React, { useState } from 'react';
import PropTypes from 'prop-types';

AccordionItem.propTypes = {
    item: PropTypes.object,
};

function AccordionItem(props) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState(item.show);

    return (
        <div className="border border-white/10 rounded-lg overflow-hidden">
            <button
                className="w-full px-6 py-4 text-left bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-bold text-white">{item.title}</span>
                <svg
                    className={`w-6 h-6 text-[#14C2A3] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                }`}
            >
                <div className="px-6 py-4 text-gray-400">{item.content}</div>
            </div>
        </div>
    );
}

export default AccordionItem;