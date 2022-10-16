import { useState } from "react";
import { useFetchOwnOffers } from "../../hooks/useOfferData";
import Button from "../Button";
import CompanyOfferCard from "../CompanyOfferCard";
import EmptyCompanyOfferCard from "../EmptyCompanyOfferCard";

export default function CompanyPage({ currentUser }) {
  const { data: offers } = useFetchOwnOffers();
  const [addOffer, setAddOffer] = useState(false);

  return (
    <>
      <div className="company-page">
        <div className="add-offer-container">
          <div className="add-offer-btn">
            <Button
              text={addOffer ? "Cancel" : "Add new job offer"}
              onClick={() => setAddOffer(!addOffer)}
            />
          </div>
          {addOffer && <EmptyCompanyOfferCard />}
        </div>
        <div className="cards-container">
          <div className="offer-card-title">Past Job Offers</div>
          {offers?.map((offer, i) => (
            <CompanyOfferCard key={i} offer={offer} />
          ))}
        </div>{" "}
      </div>
    </>
  );
}
