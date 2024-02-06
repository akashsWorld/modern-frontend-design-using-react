import React from 'react'

const TourCard = ({cardNumber,cardDetails, cardPrice,tourName}:any) => {
  return (
    <div className="card">
            <div className="card__side card__side--front">
              <div className={`card__picture card__picture--${cardNumber}`}>&nbsp;</div>
              <h4 className="card__heading">
                <span className={`card__heading-span card__heading-span--${cardNumber}`}>
                  {tourName}
                </span>
              </h4>
              <div className="card__details ">
                <ul>
                  <li>{cardDetails[0]}</li>
                  <li>{cardDetails[1]}</li>
                  <li>{cardDetails[2]}</li>
                  <li>{cardDetails[3]}</li>
                  <li>{cardDetails[4]}</li>
                </ul>
              </div>
            </div>
            <div className={`card__side card__side--back card__side--back-${cardNumber}`}>
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">${cardPrice}</p>
                  <a href="/" className="btn btn--white">
                    book now!
                  </a>
                </div>
              </div>
            </div>
          </div>
  )
}

export default TourCard;
