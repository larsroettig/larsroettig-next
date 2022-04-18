import type { NextRequest } from 'next/server';
import redirectsJson from './redirects.json';
import { NextResponse } from 'next/server';

type LocalRedirects = {
  [k: string]:
    | {
        destination: string;
        permanent: boolean;
      }
    | undefined;
};

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Find the redirect from the local JSON file, do note this JSON shouldn't be
  // large, as the space in Edge Functions is quite limited
  const localRedirect = (redirectsJson as LocalRedirects)[url.pathname];
  if (localRedirect) {
    url.pathname = `${localRedirect.destination}`;
    return NextResponse.redirect(url);
  }
}
