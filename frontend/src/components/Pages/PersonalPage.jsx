import { useState } from "react";
import { useFetchOffers } from "../../hooks/useOfferData";
import filter from "../../util/search";
import ClientOfferCard from "../ClientOfferCard";

export default function PersonalPage({ currentUser }) {
  const { data: offers } = useFetchOffers();
  const [search, setSearch] = useState("");

  let filteredOffers = offers;
  if (offers && !!search) filteredOffers = filter(offers, search, searchFields);

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
        {filteredOffers?.map((offer, i) => (
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
const searchFields = ["company_name", "title"];
