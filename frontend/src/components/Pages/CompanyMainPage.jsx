import { useState } from "react";
import { useFetchOwnOffers } from "../../hooks/useOfferData";
import Button from "../Button";
import CompanyOfferCard from "../CompanyOfferCard";
import EmptyCompanyOfferCard from "../EmptyCompanyOfferCard";
import Loader from "../Loader";
import NoDataPlaceholder from "../NoDataPlaceholder";

export default function CompanyMainPage({ setMain, setOfferId }) {
  const { isLoading, data: offers } = useFetchOwnOffers();
  const [addOffer, setAddOffer] = useState(false);
  return (
    <div className="company-page">
      <div className="add-offer-container">
        <div className="add-offer-btn">
          <Button
            text={addOffer ? "Cancel" : "Add new job offer"}
            onClick={() => setAddOffer(!addOffer)}
          />
        </div>
        {addOffer && <EmptyCompanyOfferCard setAddOffer={setAddOffer} />}
      </div>
      <div className="cards-container">
        <div className="offer-card-title">Past Job Offers</div>
        {isLoading ? (
          <Loader />
        ) : !!offers[0] ? (
          offers
            ?.map((offer, i) => (
              <CompanyOfferCard
                key={i}
                offer={offer}
                setMain={setMain}
                setOfferId={setOfferId}
              />
            ))
            .reverse()
        ) : (
          <NoDataPlaceholder name="offers" />
        )}
      </div>{" "}
    </div>
  );
}
