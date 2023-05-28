export interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  profileUrl?: string;
}
export interface Artwork {
  id: string;
  url: string;
  description: string;
  name?: string;
  feature?: boolean;
  publish?: boolean;
}
export interface Report {
  id: string;
  user: User;
  artwork: Artwork;
  name: string;
  description: string;
  userId: string;
  artworkId: string;
}
