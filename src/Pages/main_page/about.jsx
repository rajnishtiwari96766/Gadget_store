// import React from "react";
import Hero_sec from "./hero_sec";

const About = () => {
  const data = {
    intro: "This is about Gadget-Store",
  };

  return (
    <div>
      <Hero_sec myData={data} />
    </div>
  );
};

export default About;
