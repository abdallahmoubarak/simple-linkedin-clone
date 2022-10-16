import { useState } from "react";
import { useFetchOwnOffers } from "../../hooks/useOfferData";
import Button from "../Button";
import CompanyOfferCard from "../CompanyOfferCard";
import EmptyCompanyOfferCard from "../EmptyCompanyOfferCard";

export default function CompanyPage({ currentUser }) {
  const { data: offers } = useFetchOwnOffers(currentUser.id);
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
          {offers?.map((offer, i) => (
            <CompanyOfferCard
              key={i}
              title={offer.title}
              requirments={offer.requirments}
            />
          ))}
        </div>{" "}
      </div>
    </>
  );
}
