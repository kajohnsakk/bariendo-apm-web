import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

import { NextAuthSession } from "@/types/next-auth";
import { authenticate } from "@/services/auth-service";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        organizationId: { label: "Organization ID", type: "text" },
      },
      async authorize(credentials) {
        if (typeof credentials !== "undefined") {
          try {
            const response = await authenticate(
              credentials.email,
              credentials.password,
              credentials.organizationId
            );
            const data = response.data;

            return {
              ...data.user,
              accessToken: data.accessToken,
              organizationId: credentials.organizationId,
            };
          } catch (error) {
            if (axios.isAxiosError(error)) {
              const { response } = error;
              throw new Error(response?.data.message);
            }

            throw error;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }

      return token;
    },

    session({ session, token }) {
      if (token) {
        session.user = token.user as NextAuthSession;
      }

      return session;
    },
  },
};
