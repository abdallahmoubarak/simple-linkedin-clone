import { useMutation, useQuery } from "react-query";
import { client } from "..";
import { authApi } from "../util/axiosInstance";

const getOffers = async () => {
  const res = await authApi.get("/offers/");
  return res.data;
};

export const useFetchOffers = () => {
  return useQuery({
    queryFn: () => getOffers(),
    refetchOnWindowFocus: false,
  });
};

const addOffer = (offer) => {
  return authApi({ url: "/offers", data: offer, method: "POST" }).then(
    (res) => res.data,
  );
};

export const useAddOffer = () => {
  return useMutation({
    mutationFn: (offer) => addOffer(offer),
    onSuccess: (data) => {
      client.invalidateQueries("offers");
    },
  });
};
