import { useFetchOffers } from "../../hooks/useOfferData";
import ClientOfferCard from "../ClientOfferCard";

export default function PersonalPage() {
  const { data: offers } = useFetchOffers();
  return (
    <>
      <div className="cards-container">
        {offers?.map((offer, i) => (
          <ClientOfferCard
            key={i}
            title={offer.title}
            requirments={offer.requirments}
            companyName={offer.company_name}
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
