import localFont from "next/font/local";
import "./globals.css";
import FrontLayout from "@/layout/FrontLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pulikids Childcare Frontend",
  description: "Generated by Pulikids Childcare Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FrontLayout>{children}</FrontLayout>
      </body>
    </html>
  );
}
