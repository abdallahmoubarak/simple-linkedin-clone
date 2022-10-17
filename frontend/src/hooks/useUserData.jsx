import { useMutation, useQuery } from "react-query";
import { client } from "..";
import { authApi } from "../util/axiosInstance";

const follow = async (id) => {
  return await authApi({ url: "/users/follow", data: id, method: "PUT" });
};

export const useFollow = () => {
  return useMutation(follow, {
    onSuccess: (res) => {
      client.invalidateQueries("User");
    },
  });
};

const updateUser = (user) => {
  return authApi({ url: "/users/", data: user, method: "PUT" }).then(
    (res) => res.data,
  );
};

export const useUpdateUser = (setEditMode) => {
  return useMutation(updateUser, {
    onSuccess: (res) => {
      client.invalidateQueries("User");
      res.status === "success" && setEditMode(false);
    },
  });
};

const getApplicants = async (id) => {
  const res = await authApi.get(`/users/applicants/${id}`);
  return res.data.users;
};

export const useApplicants = (offerId) => {
  return useQuery({
    queryFn: () => getApplicants(offerId),
    queryKey: "Applicants",
    refetchOnWindowFocus: false,
  });
};
