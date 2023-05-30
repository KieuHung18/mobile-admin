import type { Artwork, User } from "./model.types";
import { backendRequest } from "./request";

export default {
  apps: {},
  reports: {
    list() {
      const path = `/admin/reports`;
      return backendRequest("GET", path);
    },
    retrieve(reportId: string) {
      const path = `/admin/reports/${reportId}`;
      return backendRequest("GET", path);
    },
    delete(reportId: string, artwork?: Artwork) {
      const path = `/admin/reports/${reportId}`;
      if (artwork) {
        return backendRequest("DELETE", path, JSON.stringify(artwork));
      } else {
        return backendRequest("DELETE", path);
      }
    },
  },
  users: {
    create(user: User) {
      const path = `/admin/users`;
      return backendRequest("POST", path, JSON.stringify(user));
    },
  },
  auth: {
    session(refresh?: boolean) {
      const path = `/admin/auth/`;
      if (refresh) {
        return backendRequest("POST", path);
      } else {
        return backendRequest("GET", path);
      }
    },

    login(data: { email: string; password: string }) {
      const path = `/auth/admin/login`;
      return backendRequest("POST", path, JSON.stringify(data));
    },
  },
};
