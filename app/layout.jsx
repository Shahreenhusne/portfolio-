import "@styles/globals.scss";
import Navbar from "@components/Navbar";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Shahreen's Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
