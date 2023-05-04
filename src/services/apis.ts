import { backendRequest } from "./request";
const USER_EMAIL = "kieuhungcm2015@gmail.com";
export default {
  apps: {},
  users: {
    retrieve(email = USER_EMAIL) {
      const path = `/users/${email}`;
      return backendRequest("GET", path);
    },
  },
  artworks: {
    list(email = USER_EMAIL) {
      const path = `/artworks/${email}`;
      return backendRequest("GET", path);
    },
  },
};
