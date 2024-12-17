//1. Standard Matcher
import type { NextRequest } from 'next/server'
// export function middleware(request: NextRequest) {
//   console.log( `middleware invoked at time: ${new Date()}`)
//   console.log({url: request.url})
//   console.log({pathname: request.nextUrl.pathname})
//   console.log({method: request.method})
// }
 
// // Matcher allows you to filter middleware to run on specific path
// export const config = {
//   matcher: '/about/:path*',
// }


//2. conditional matchin with includes()---how middlware works without matchers
// export function middleware(request: NextRequest) {
//     if (request.url.includes("/auth/")){
//         console.log( `middleware invoked at time: ${new Date()}`)
//         console.log({url: request.url})
//         console.log({pathname: request.nextUrl.pathname})
//         console.log({method: request.method})
//     }
//   }

// 3. Conditional matching with Regex 
export function middleware(request: NextRequest){
    const authRegexChecker = new RegExp("/auth/*")
    if(authRegexChecker.test(request.url)){
        // console.log( `middleware invoked at time: ${new Date()}`)
        console.log({url: request.url})
        console.log({pathname: request.nextUrl.pathname})
        console.log({method: request.method})
    }
}