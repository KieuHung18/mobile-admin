import { backendRequest } from "./request";

export default {
  apps: {},
  users: {
    retrieve(email = "kieuhungcm2015@gmail.com") {
      const path = `/users/${email}`;
      return backendRequest("GET", path);
    },
  },
};
