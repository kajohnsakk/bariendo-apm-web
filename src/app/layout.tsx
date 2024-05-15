import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth/next";

import { Toaster } from "@/components/ui/toaster";
import ReactQueryProvider from "@/utils/providers/react-query-provider";
import { authOptions } from "@/lib/auth/auth-options";
import AuthProvider from "./provider/auth-provider";

const notoSansThai = Noto_Sans_Thai({ subsets: ["latin", "thai"] });

export const metadata: Metadata = {
  title: "Customer",
  description: "Customer appointment",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={notoSansThai.className}>
        <ReactQueryProvider>
          <AuthProvider session={session}>{children}</AuthProvider>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
