import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });
export const platform = localFont({
  src: [
    {
      path: "./Platform-Regular (2).otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Platform-Medium (2).otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-platform",
});
