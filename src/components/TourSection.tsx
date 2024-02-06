import React from "react";
import TourCard from "./TourCard";

const TourSection = () => {
  const cardDetailObj = {
    card1: [
      "3 day tour",
      "Up to 30 people",
      "2 tour guides",
      "Sleep in cozy hostels",
      "Difficulty: very easy",
    ],
    card2: [
      "7 day tour",
      "Up to 40 people",
      "6 tour guides",
      "Sleep in provided tents",
      "Difficulty: medium",
    ],
    card3: [
      "5 day tour",
      "Up to 15 people",
      "3 tour guides",
      "Sleep in provided tents",
      "Difficulty: hard",
    ],
  };
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <TourCard
            cardNumber={1}
            cardDetails={cardDetailObj.card1}
            cardPrice={297}
            tourName={"The sea explorer"}
          />
        </div>
        <div className="col-1-of-3">
          <TourCard
            cardNumber={2}
            cardDetails={cardDetailObj.card2}
            cardPrice={497}
            tourName={"The forest Hiker"}
          />
        </div>
        <div className="col-1-of-3">
          <TourCard
            cardNumber={3}
            cardDetails={cardDetailObj.card3}
            cardPrice={897}
            tourName={"The snow adventurer"}
          />
        </div>
      </div>
      <div className="u-center-text u-margin-top-big">
      <a href="/" className="btn btn--green">Discover our tours</a>
      </div>
    </section>
  );
};

export default TourSection;
