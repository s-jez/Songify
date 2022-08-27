import {NextRequest, NextResponse} from "next/server";

const signedinPages = ['/', '/playlist', '/libary']

export default function middleware(
  request: NextRequest,
){
  if(signedinPages.find((p) => p === request.nextUrl.pathname)) {
    const token = request.cookies['TOKEN_SECRET']
    if(!token) {
      return NextResponse.redirect('/signin')
    }
  }
}