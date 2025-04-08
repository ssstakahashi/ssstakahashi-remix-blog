import type { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link
} from "@remix-run/react";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="fixed top-0 w-full z-[10000] border-b border-gray-500 bg-[rgba(249,249,249,0.9)] shadow-[0px_4px_10px_rgba(0,0,0,0.2)] transition-[background-color_0.3s,_box-shadow_0.3s]">
          <div className="flex items-center h-14 px-4 sm:px-6 lg:px-8" role="navigation">
            <div className="flex items-center cursor-pointer">
              <Link to={'/'}>
                <img
                  src="/assets/mini_logo_500*500.png"
                  alt="サイトロゴ"
                  height={40}
                  width={40}
                  className="block mx-auto"
                />
              </Link>
            </div>
            <div className="flex justify-start space-x-8 ml-8">
              <Link to={'/blogs'}><span className="text-sm">ブログ</span></Link>
              <Link to={'/outputs'}><span className="text-sm cursor-pointer">アウトプット</span></Link>
            </div>
          </div>
        </div>
        <div className="pt-14">
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
