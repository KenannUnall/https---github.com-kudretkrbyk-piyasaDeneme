import React from "react";
import FAQ from "../pages/FAQ";
import Partner from "../pages/Partner";
import CoinsSlider from "../components/CoinsSlider";
import Team from "./Team";
import RoadMapOne from "./RoadMapOne";
import Hero from "../components/Hero";

const Home = () => {
  const scrollToCoins = () => {
    const section = document.getElementById("coins-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <Hero scrollToCoins={scrollToCoins} />
      <CoinsSlider />
      <RoadMapOne />
      <Team data={teamData} />

      <FAQ />
    </div>
  );
};

export default Home;
