import { useState } from "react";
import { useFetchOffers } from "../../hooks/useOfferData";
import filter from "../../util/search";
import ClientOfferCard from "../ClientOfferCard";
import Loader from "../Loader";
import NoDataPlaceholder from "../NoDataPlaceholder";

export default function PersonalPage({ currentUser }) {
  const { isLoading, data: offers } = useFetchOffers();
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
        {isLoading ? (
          <Loader />
        ) : !!filteredOffers[0] ? (
          filteredOffers
            ?.map((offer, i) => (
              <ClientOfferCard
                key={i}
                offer={offer}
                currentUser={currentUser}
              />
            ))
            .reverse()
        ) : (
          <NoDataPlaceholder name="offers" />
        )}
      </div>
    </>
  );
}
const searchFields = ["company_name", "title"];
