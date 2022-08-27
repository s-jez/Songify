import {NextRequest, NextResponse} from "next/server";

const signedinPages = ['/', '/playlist', '/libary']

export default function middleware(
  request: NextRequest,
){
  if(signedinPages.find((url) => url === request.nextUrl.pathname)) {
    const token = request.cookies['TOKEN_SECRET']
    if(!token) {
      const url = request.nextUrl.clone();
      console.log(url)
      url.pathname = "/signin"
      url.search = "";
      return NextResponse.redirect(url)
    }
  }
}