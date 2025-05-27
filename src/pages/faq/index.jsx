import React from 'react';
import FAQ from '../../features/faq';

function FAQPage() {
  const faqData = [
    {
      id: 1,
      title: 'What is NFT?',
      content: 'NFTs are tokens that we can use to represent ownership of unique items. They let us tokenise things like art, collectibles, even real estate. They can only have one official owner at a time and they\'re secured by the Ethereum blockchain – no one can modify the record of ownership or copy/paste a new NFT into existence.',
      show: true
    },
    {
      id: 2,
      title: 'What is NFT?',
      content: 'NFTs are tokens that we can use to represent ownership of unique items. They let us tokenise things like art, collectibles, even real estate. They can only have one official owner at a time and they\'re secured by the Ethereum blockchain – no one can modify the record of ownership or copy/paste a new NFT into existence.',
      show: false
    },
    {
      id: 3,
      title: 'What is NFT?',
      content: 'NFTs are tokens that we can use to represent ownership of unique items. They let us tokenise things like art, collectibles, even real estate. They can only have one official owner at a time and they\'re secured by the Ethereum blockchain – no one can modify the record of ownership or copy/paste a new NFT into existence.',
      show: false
    },
    {
      id: 4,
      title: 'What is NFT?',
      content: 'NFTs are tokens that we can use to represent ownership of unique items. They let us tokenise things like art, collectibles, even real estate. They can only have one official owner at a time and they\'re secured by the Ethereum blockchain – no one can modify the record of ownership or copy/paste a new NFT into existence.',
      show: false
    }
  ];

  return (
    <div>
      <FAQ data={faqData} />
    </div>
  );
}

export default FAQPage; 