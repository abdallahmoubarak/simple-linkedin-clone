import { useState } from "react";
import { useFetchOffers } from "../../hooks/useOfferData";
import { useGetUser } from "../../hooks/useUserData";
import filter from "../../util/search";
import ClientOfferCard from "../ClientOfferCard";
import Loader from "../Loader";
import NoDataPlaceholder from "../NoDataPlaceholder";
import ProfilePage from "./ProfilePage";

export default function PersonalPage({ currentUser }) {
  const { isLoading, data: offers } = useFetchOffers();
  const [search, setSearch] = useState("");
  const [userId, setUser] = useState(false);

  const { data: user } = useGetUser({ userId, enabled: Boolean(userId) });

  const handelOpenProfileById = (id) => setUser(id);

  let filteredOffers = offers;
  if (offers && !!search) filteredOffers = filter(offers, search, searchFields);

  return (
    <>
      {!!userId ? (
        <ProfilePage currentUser={user} setUser={setUser} backTo={"home"} />
      ) : (
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
                    handelOpenProfileById={handelOpenProfileById}
                  />
                ))
                .reverse()
            ) : (
              <NoDataPlaceholder name="offers" />
            )}
          </div>
        </>
      )}
    </>
  );
}
const searchFields = ["company_name", "title"];
