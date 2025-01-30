import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  // 如果已登录，允许继续访问 ,如果没有 token，则重定向到登录页面
  if (token) {
    return NextResponse.next();
  }else{
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}

// 仅对需要保护的路由生效
export const config = {
  matcher: ["/","/main/:path*"], // 需要保护的路由
};