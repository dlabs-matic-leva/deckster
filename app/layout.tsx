import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "@/components/icons/logo.svg";
import profile from "@/components/images/1654256336528 1.png";
import bell from "@/components/icons/bell.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deckster",
  description: "Approach proposals in minutes, not days",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min0-h-screen flex-col items-start justify-start p-24">
          <div className="flex w-full justify-between">
            <Image priority src={logo} alt="Deckster logo" />
            <div className="flex gap-3">
              <div className="border rounded-full p-1 pr-4 flex gap-2 items-center">
                <Image
                  priority
                  width={32}
                  height={32}
                  src={profile}
                  alt="Profile picture"
                  className="rounded-full"
                />
                <div className="text-sm/4">matic.leva@dlabs.si</div>
              </div>
              <div className="border rounded-full p-2 ">
                <Image priority src={bell} alt="Notifications" />
              </div>
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
