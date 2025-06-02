import React from "react";
import FAQ from "../pages/FAQ";
import Partner from "../pages/Partner";
import CoinsSlider from "../components/CoinsSlider";
import Team from "./Team";
import RoadMapOne from "./RoadMapOne";
import Hero from "../components/Hero";

const Home = () => {
  const faqData = [
    {
      id: 1,
      title: "What is NFT?",
      content:
        "NFTs are tokens that we can use to represent ownership of unique items. They let us tokenise things like art, collectibles, even real estate. They can only have one official owner at a time and they're secured by the Ethereum blockchain – no one can modify the record of ownership or copy/paste a new NFT into existence.",
      show: true,
    },
    {
      id: 2,
      title: "What is NFT?",
      content:
        "NFTs are tokens that we can use to represent ownership of unique items. They let us tokenise things like art, collectibles, even real estate. They can only have one official owner at a time and they're secured by the Ethereum blockchain – no one can modify the record of ownership or copy/paste a new NFT into existence.",
      show: false,
    },
    {
      id: 3,
      title: "What is NFT?",
      content:
        "NFTs are tokens that we can use to represent ownership of unique items. They let us tokenise things like art, collectibles, even real estate. They can only have one official owner at a time and they're secured by the Ethereum blockchain – no one can modify the record of ownership or copy/paste a new NFT into existence.",
      show: false,
    },
    {
      id: 4,
      title: "What is NFT?",
      content:
        "NFTs are tokens that we can use to represent ownership of unique items. They let us tokenise things like art, collectibles, even real estate. They can only have one official owner at a time and they're secured by the Ethereum blockchain – no one can modify the record of ownership or copy/paste a new NFT into existence.",
      show: false,
    },
  ];

  const partnerData = [
    {
      id: 1,
      img: "/assets/images/partner/1.png",
    },
    {
      id: 2,
      img: "/assets/images/partner/2.png",
    },
    {
      id: 3,
      img: "/assets/images/partner/3.png",
    },
    {
      id: 4,
      img: "/assets/images/partner/4.png",
    },
    {
      id: 5,
      img: "/assets/images/partner/5.png",
    },
    {
      id: 6,
      img: "/assets/images/partner/6.png",
    },
    {
      id: 7,
      img: "/assets/images/partner/7.png",
    },
    {
      id: 8,
      img: "/assets/images/partner/8.png",
    },
    {
      id: 9,
      img: "/assets/images/partner/9.png",
    },
    {
      id: 10,
      img: "/assets/images/partner/10.png",
    },
    {
      id: 11,
      img: "/assets/images/partner/11.png",
    },
    {
      id: 12,
      img: "/assets/images/partner/12.png",
    },
    {
      id: 13,
      img: "/assets/images/partner/13.png",
    },
    {
      id: 14,
      img: "/assets/images/partner/14.png",
    },
    {
      id: 15,
      img: "/assets/images/partner/15.png",
    },
    {
      id: 16,
      img: "/assets/images/partner/16.png",
    },
    {
      id: 17,
      img: "/assets/images/partner/17.png",
    },
    {
      id: 18,
      img: "/assets/images/partner/18.png",
    },
  ];

  const projectData = [
    {
      id: 1,
      img: "/images/binance.png",
      title: "Binance ",
    },
    {
      id: 2,
      img: "/images/cardano.png",
      title: "Cardano",
    },
    {
      id: 3,
      img: "images/bitcoin.png",
      title: "Bitcoin",
    },
    {
      id: 4,
      img: "images/ethereum.png",
      title: "Ethereum",
    },
    // {
    //   id: 5,
    //   img: "/assets/images/portfolio/5.jpg",
    //   title: "NFT Marketplace",
    // },
    // {
    //   id: 6,
    //   img: "/assets/images/portfolio/6.jpg",
    //   title: "NFT Marketplace",
    // },
    // {
    //   id: 7,
    //   img: "/assets/images/portfolio/7.jpg",
    //   title: "NFT Marketplace",
    // },
    // {
    //   id: 8,
    //   img: "/assets/images/portfolio/8.jpg",
    //   title: "NFT Marketplace",
    // },
  ];

  const teamData = [
    {
      id: 1,
      img: "/assets/images/team/1.jpg",
      name: "John Doe",
      position: "CEO & Founder",
      listsocial: [
        {
          id: 1,
          icon: "fab fa-facebook-f",
          link: "#",
        },
        {
          id: 2,
          icon: "fab fa-twitter",
          link: "#",
        },
        {
          id: 3,
          icon: "fab fa-linkedin-in",
          link: "#",
        },
      ],
    },
    {
      id: 2,
      img: "/assets/images/team/2.jpg",
      name: "John Doe",
      position: "CEO & Founder",
      listsocial: [
        {
          id: 1,
          icon: "fab fa-facebook-f",
          link: "#",
        },
        {
          id: 2,
          icon: "fab fa-twitter",
          link: "#",
        },
        {
          id: 3,
          icon: "fab fa-linkedin-in",
          link: "#",
        },
      ],
    },
    {
      id: 3,
      img: "/assets/images/team/3.jpg",
      name: "John Doe",
      position: "CEO & Founder",
      listsocial: [
        {
          id: 1,
          icon: "fab fa-facebook-f",
          link: "#",
        },
        {
          id: 2,
          icon: "fab fa-twitter",
          link: "#",
        },
        {
          id: 3,
          icon: "fab fa-linkedin-in",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c1226]">
      <Hero />
      <CoinsSlider />
      <RoadMapOne />
      <Team data={teamData} />

      <FAQ data={faqData} />
      <Partner data={partnerData} />
    </div>
  );
};

export default Home;
