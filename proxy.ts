import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if current route is public
  const isPublicRoute = ["/"].includes(pathname);
  // Get auth session from cookies
  //Todo: Implement auth session retrieval logic here and guards
  // Proceed with the request if no redirection is needed
  console.log("No redirection needed, proceeding with request.", isPublicRoute);
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public files (images, etc)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
