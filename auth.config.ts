import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // console.log("Auth : ", auth);
      // console.log("nextUrl : ", nextUrl);
      const isLoggedIn = !!auth?.user;
      console.log("isLoggedIn : ", isLoggedIn);
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;




{/* For multiple protected routes */}
// import type { NextAuthConfig } from "next-auth";

// export const authConfig = {
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;

//       // Define protected routes
//       const protectedRoutes = [
//         "/dashboard",
//         "/settings",
//         "/profile",
//         "/admin"
//       ];

//       // Check if current path starts with any protected route
//       const isProtected = protectedRoutes.some((path) =>
//         nextUrl.pathname.startsWith(path)
//       );

//       // If route is protected and user not logged in → redirect
//       if (isProtected && !isLoggedIn) return false;

//       // If logged in and tries to access public routes like /login → redirect to dashboard
//       if (isLoggedIn && ["/", "/login"].includes(nextUrl.pathname)) {
//         return Response.redirect(new URL("/dashboard", nextUrl));
//       }

//       // Allow all other routes
//       return true;
//     },
//   },
//   providers: [],
// } satisfies NextAuthConfig;

