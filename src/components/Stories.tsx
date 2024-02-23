import React from "react";
import nat8 from "./../assets/nat-8.jpg";
import nat9 from "./../assets/nat-9.jpg";
import StoriesCard from "./StoriesCard";
import videom from "./../assets/video.mp4";
import videow from "./../assets/video.mp4";

const Stories = () => {
  const description = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Laboriosam, omnis consequuntur hic aliquam voluptate natus facere, 
    fuga quibusdam totam amet a doloremque tempora quod ducimus?`;

  const obj = {
    user1: {
      name: "Mary Smith",
      headline: "I had the best week ever with my family.",
    },
    user2: {
      name: "Jack Wilson",
      headline: "WOW! my life is completely different now.",
    },
  };
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={videom} type="video/mp4" />
          <source src={videow} type="video/webm" />
          Your browser is not supported.
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinly happy</h2>
      </div>
      <StoriesCard image={nat8} description={description} user={obj.user1} />
      <StoriesCard image={nat9} description={description} user={obj.user2} />
      <div className="u-center-text u-margin-top-big">
        <a href="/" className="btn-text">
          Read all stories&rarr;
        </a>
      </div>
    </section>
  );
};

export default Stories;
