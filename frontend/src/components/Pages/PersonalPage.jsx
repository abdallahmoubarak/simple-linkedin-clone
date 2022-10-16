import { useState } from "react";
import { useFetchOffers } from "../../hooks/useOfferData";
import ClientOfferCard from "../ClientOfferCard";

export default function PersonalPage() {
  const { data: offers } = useFetchOffers();
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          className="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="cards-container">
        {offers?.map((offer, i) => (
          <ClientOfferCard
            key={i}
            title={offer.title}
            requirments={offer.requirments}
            companyName={offer.company_name}
            imgUrl={offer.profile_img}
          />
        ))}
      </div>
      <style jsx="true">
        {`
          .cards-container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
        `}
      </style>
    </>
  );
}
