import ParticlesBackground from "@/app/_components/ParticlesBackground";
import { Jersey_25 } from "next/font/google";
import "./globals.css";

const jerseySans = Jersey_25({
  weight: "400",
  variable: "--font-jersey-25",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jerseySans.variable}`}>
        <ParticlesBackground>{children}</ParticlesBackground>
        <footer className="mx-auto w-full max-w-6xl px-4 pb-4 text-left text-sm text-white/35 sm:px-6">
          Web 0.1.0 Nova
        </footer>
      </body>
    </html>
  );
}
