import React from "react";
import image1 from "./../assets/nat-1-large.jpg";
import image2 from "./../assets/nat-2-large.jpg";
import image3 from "./../assets/nat-3-large.jpg";

const About = () => {
  return (
    <div>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-8">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You are going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              atque recusandae dignissimos.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              atque recusandae dignissimos.
            </p>
            <a href="/" className="btn-text">
              Learn More &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={image1}
                alt=""
                className="composition__photo composition__photo--p1"
              />
              <img
                src={image2}
                alt=""
                className="composition__photo composition__photo--p2"
              />
              <img
                src={image3}
                alt=""
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
