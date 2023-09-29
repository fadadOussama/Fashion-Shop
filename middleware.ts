import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/men(.*)", "/women(.*)"],
});

// for specifying protected routes
export const config = {
  matcher: ["/", "/men", "/women", "/signUp", "/signIn"],
};
