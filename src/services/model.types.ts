export interface User {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  intro?: string;
  title?: string;
  phone?: string;
  address?: string;
  aboutMe?: string;
  description?: string;
  profileUrl?: string;
}
export interface Artwork {
  url: string;
  name?: string;
  feature?: boolean;
  publish?: boolean;
}
