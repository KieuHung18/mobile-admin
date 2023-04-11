import userEvent from "@testing-library/user-event";
import { backendRequest } from "./request";

export default {
  apps: {},
  users: {
    retrieve(email: string) {
      const path = `/users/${email}`;
      return backendRequest("GET", path);
    },
  },
};
