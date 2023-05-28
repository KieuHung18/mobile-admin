import { backendUrl } from "./url";

const backendRequest = async (
  method = "GET" || "POST" || "DELETE" || "OPTIONS",
  path = "",
  payload?: any
) => {
  const url = backendUrl + path;
  let authentication = "";

  const auth = localStorage.getItem("authentication");

  if (auth) {
    authentication = auth;
  }

  const options: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      authentication: authentication,
    },
    method: method,
    credentials: "include",
  };
  if (payload) {
    options.body = payload;
  }
  let fetchData: any, error: any;
  await fetch(url, options)
    .then(async (res) => res.json())
    .then((data: any) => {
      fetchData = data?.response;
      error = data?.error;
    })
    .catch((err) => {
      error = err;
    });
  return [fetchData, error];
};
export { backendRequest };
