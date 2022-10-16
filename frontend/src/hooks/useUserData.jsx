import { useMutation } from "react-query";
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
