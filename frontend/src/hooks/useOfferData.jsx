import { useMutation, useQuery } from "react-query";
import { client } from "..";
import { authApi } from "../util/axiosInstance";

const getOffers = async () => {
  const res = await authApi.get("/offers");
  return res.data.offers;
};

export const useFetchOffers = () => {
  return useQuery({
    queryFn: () => getOffers(),
    queryKey: "Offers",
    refetchOnWindowFocus: false,
  });
};

const getOwnOffers = async () => {
  const res = await authApi.get("/offers/own");
  return res.data.offers;
};

export const useFetchOwnOffers = () => {
  return useQuery({
    queryFn: () => getOwnOffers(),
    queryKey: "Offers",
    refetchOnWindowFocus: false,
  });
};

const createOffer = async (offer) => {
  console.log(offer);
  return await authApi({ url: "/offers/", data: offer, method: "POST" });
};

export const useCreateOffer = () => {
  return useMutation(createOffer, {
    onSuccess: (res) => {
      console.log(res.data);
      client.invalidateQueries("Offers");
    },
    onError: (err) => console.log(err.message),
  });
};
