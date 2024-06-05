import React from "react";
import DeveloperClass from "./DeveloperClass";

const About = () => {
  return (
    <div>
      <div style={{ marginTop: "100px" }}>About</div>
      <DeveloperClass
        name="Jai Jain"
        location="Noida, UP"
        contact="jaijain.work@gmail.com"
      />
    </div>
  );
};

export default About;
