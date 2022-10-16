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

const createOffer = (offer) => {
  return authApi({ url: "/offers/", data: offer, method: "POST" }).then(
    (res) => res.data,
  );
};

export const useCreateOffer = ({ setAddOffer }) => {
  return useMutation(createOffer, {
    onSuccess: (data) => {
      client.invalidateQueries("Offers");
      if (data.status === "success") {
        setAddOffer(false);
      }
    },
  });
};

const apply = async (id) => {
  return await authApi({ url: "/offers/", data: id, method: "PUT" });
};

export const useApply = () => {
  return useMutation(apply, {
    onSuccess: (res) => {
      client.invalidateQueries("Offers");
    },
  });
};
