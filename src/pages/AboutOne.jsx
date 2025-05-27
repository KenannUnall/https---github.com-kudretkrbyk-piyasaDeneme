import About from "../features/about/home-v2";
import dataAbout from "../assets/fake-data/data-about";
import Team from "../features/team/home-v2";
import dataTeam from "../assets/fake-data/data-team";

function AboutOne(props) {
  return (
    <div className="about">
      <About data={dataAbout} />

      <Team data={dataTeam} />
    </div>
  );
}

export default AboutOne;
