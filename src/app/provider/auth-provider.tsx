"use client";

import { SessionProvider } from "next-auth/react";

type ProviderProps = {
  children: React.ReactNode;
  session: any;
};

const AuthProvider = ({
  children,
  session,
}: ProviderProps): React.ReactNode => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
