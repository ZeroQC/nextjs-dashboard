import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextRequest } from 'next/server';
 
export default NextAuth(authConfig).auth;

// export function middleware(req: NextRequest) {
//   if (req.nextUrl.pathname.startsWith('/dashboard')) {
//     console.log(req.nextUrl.pathname);
//   }
// }
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};