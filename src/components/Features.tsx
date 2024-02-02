import React from "react";
import "./../sass/main.scss";
import FeatureBox from "./FeatureBox";

const Features = () => {
  return (
    <section className="section-features">
      <div className="row">
        <FeatureBox
          iconName={"world"}
          title={"Explore the World"}
          about={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum ratione nesciunt id?"
          }
        />
        <FeatureBox
          iconName={"compass"}
          title={"meet nature"}
          about={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum ratione nesciunt id?"
          }
        />
        <FeatureBox
          iconName={"map"}
          title={"find your way"}
          about={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum ratione nesciunt id?"
          }
        />
        <FeatureBox
          iconName={"heart"}
          title={"live a healthier life"}
          about={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum ratione nesciunt id?"
          }
        />
      </div>
    </section>
  );
};

export default Features;
