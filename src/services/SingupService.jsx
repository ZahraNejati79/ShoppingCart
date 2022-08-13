import http from "./HttpService";

export const singupUser = (data) => {
  return http.post("/user/register", data);
};
