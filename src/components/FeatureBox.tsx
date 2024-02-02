import React from "react";
import "./../sass/main.scss";
import "./../icon-font.css";

const FeatureBox = ({ iconName, title, about }: any) => {
  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        <i className={`icon-basic-${iconName} feature-box__icon`}></i>
        <h2 className="heading-tertiary u-margin-bottom-small">{title}</h2>
        <p className="feature-box__text">{about}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
