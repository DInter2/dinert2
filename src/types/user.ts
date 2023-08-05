export type User = {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
  image: string | null;
  id: string;
  name: string | null;
  email: string | null;
  hashedPassword: string | null;
  favoriteIds: string[];
  username: string | null;
} | null
