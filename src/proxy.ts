import { type NextRequest, NextResponse } from "next/server";
import {
  defaultLocale,
  isValidLocale,
  type Locale,
  locales,
} from "@/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal next paths, api routes, static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    pathname === "/icon.png" ||
    pathname === "/apple-icon.png" ||
    pathname === "/opengraph-image" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/manifest.webmanifest" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  // Check if pathname starts with a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    const segments = pathname.split("/");
    const currentLocale = segments[1];
    const response = NextResponse.next();
    if (isValidLocale(currentLocale)) {
      response.cookies.set("NEXT_LOCALE", currentLocale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    }
    return response;
  }

  // Detect locale from cookie or Accept-Language header
  let targetLocale: Locale = defaultLocale;
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;

  if (cookieLocale && isValidLocale(cookieLocale)) {
    targetLocale = cookieLocale;
  } else {
    const acceptLanguage = request.headers.get("accept-language");
    if (acceptLanguage?.toLowerCase().startsWith("en")) {
      targetLocale = "en";
    }
  }

  request.nextUrl.pathname = `/${targetLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|icon.png|apple-icon.png|opengraph-image|robots.txt|sitemap.xml|manifest.webmanifest).*)",
  ],
};
