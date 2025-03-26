import { Poppins, Space_Grotesk } from "next/font/google";
import "./reset.css";
import "./globals.css";
import { ReactLenis } from "lenis/react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "FELIX Boats",
  description: "by fntz",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${poppins.variable} ${spaceGrotesk.variable}`}>
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
