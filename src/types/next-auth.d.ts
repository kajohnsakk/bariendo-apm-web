import NextAuth from "next-auth";

export type NextAuthSession = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  accessToken: string;
  organizationId: string;
};

declare module "next-auth" {
  interface Session {
    user: NextAuthSession;
  }
}
