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
    update(userId: string, update: User) {
      const path = `/admin/users/${userId}`;
      return backendRequest("POST", path, JSON.stringify(update));
    },
    retrieve(userId: string) {
      const path = `/admin/users/${userId}`;
      return backendRequest("GET", path);
    },
    delete(userId: string) {
      const path = `/admin/users/${userId}`;
      return backendRequest("DELETE", path);
    },
  },
  auth: {
    session(refresh?: boolean) {
      const path = `/auth/`;
      if (refresh) {
        return backendRequest("POST", path);
      } else {
        return backendRequest("GET", path);
      }
    },

    login(data: { email: string; password: string }) {
      const path = `/auth/login`;
      return backendRequest("POST", path, JSON.stringify(data));
    },
  },
  artworks: {
    create(artwork: Artwork[]) {
      const path = `/admin/artworks`;
      return backendRequest("POST", path, JSON.stringify(artwork));
    },
    update(artworkId: string, update: Artwork) {
      const path = `/admin/artworks/${artworkId}`;
      return backendRequest("POST", path, JSON.stringify(update));
    },
    retrieve(artworkId: string) {
      const path = `/admin/artworks/${artworkId}`;
      return backendRequest("GET", path);
    },
    delete(artworkId: string) {
      const path = `/admin/artworks/${artworkId}`;
      return backendRequest("DELETE", path);
    },
    list() {
      const path = `/admin/artworks/`;
      return backendRequest("GET", path);
    },
  },
};
