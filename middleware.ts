import {NextRequest, NextResponse} from "next/server";

const signedinPages = ['/', '/playlist', '/libary']

export default function middleware(
  request: NextRequest,
){
  if(signedinPages.find((url) => url === request.nextUrl.pathname)) {
    const token = request.cookies["COOKIE_NAME"]
    if(!token) {
      const url = request.nextUrl.clone();
      url.pathname = "/signin"
      url.search = "";
      return NextResponse.redirect(url)
    }
    if(token) {
      const url = request.nextUrl.clone();
      url.pathname = "/"
      url.search = "";
      return NextResponse.redirect(url)
    }
  }
}