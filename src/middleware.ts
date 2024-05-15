import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware() {}, {
  pages: {
    signIn: "login",
    signOut: "logout",
  },
});

export const config = {
  matcher: ["/services/:path*", "/appointments/:path*", "/settings/:path*"],
};
