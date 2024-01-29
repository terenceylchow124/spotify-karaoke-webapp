import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export function middleware(request) {
  const token = getToken({ req: request, secret: process.env.JWT_SECRET });

  // const { pathname } = request.nextUrl;
  // // Allow the request if the following is true...
  // // 1. Its a request for next-auth session & provider fetching
  // // 2. The token exists
  // if (pathname.includes("/api/auth") || token) {
  //   return NextResponse.next();
  // }

  // // Redirect them to login if they don't have token AND are requesting a protected route
  // //
  // if (!token && pathname !== "/login") {
  //   console.log("LOGGED OUT");
  //   // return NextResponse.redirect("/login");
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  if (request.nextUrl.pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  if (!token && request.nextUrl.pathname !== "/login") {
    console.log("no token");
    return NextResponse.rewrite(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/api/auth", "/login", "/index"],
};
