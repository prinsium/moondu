import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: [
    {
      path: '../../public/Demo_Fonts/robson-bold.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/Demo_Fonts/robson-extrabold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/Demo_Fonts/robson-semibold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
})

export const metadata = {
  title: "Moondu",
  description: "Digital Education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}

 

 
// export default function MyApp({ Component, pageProps }) {
//   return (
//     <main className={myFont.className}>
//       <Component {...pageProps} />
//     </main>
//   )
// }