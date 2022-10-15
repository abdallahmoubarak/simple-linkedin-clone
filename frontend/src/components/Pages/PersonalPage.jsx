import { useFetchOffers } from "../../hooks/useOfferData";

export default function PersonalPage() {
  const { data: offers } = useFetchOffers();
  console.log(offers);
  return <>Personal page</>;
}
