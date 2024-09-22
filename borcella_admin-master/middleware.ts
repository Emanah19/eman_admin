import { clerkMiddleware } from "@clerk/nextjs";
 
export default clerkMiddleware({
  publicRoutes: ["/api/:path*"]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}; 