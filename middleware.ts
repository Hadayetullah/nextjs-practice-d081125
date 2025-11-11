import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};



// For protected groups of routes
// export const config = {
//   matcher: ["/(protected)(.*)", "/(admin)(.*)"],
// };

// Project structure example for the protected groups of routes:
// app/
//  ├─ (marketing)/
//  │   ├─ page.tsx         // Public
//  ├─ (auth)/
//  │   ├─ login/
//  ├─ (protected)/
//  │   ├─ dashboard/
//  │   ├─ settings/
//  │   ├─ profile/

