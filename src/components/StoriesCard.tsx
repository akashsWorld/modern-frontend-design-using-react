import React from "react";

const StoriesCard = ({user,description,image}:any) => {
  return (
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src={image} alt="review-image" className="story__img" />
          <figcaption className="story__caption">{user.name}</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            {user.headline}
          </h3>
          <p>{description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoriesCard;
