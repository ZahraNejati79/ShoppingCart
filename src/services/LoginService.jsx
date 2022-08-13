import http from "./HttpService";

export const loginUser = (data) => {
  return http.post("/user/login", data);
};
