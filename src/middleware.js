import { NextResponse } from 'next/server';

export function middleware(request) {
  const isLoggedIn = request.cookies.get('isLoggedIn');
  
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/auth-check', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|auth-check).*)'],
}; 