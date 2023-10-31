import { Roboto } from "next/font/google";
import localFont from "next/font/local";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});
const newsflashbb = localFont({
  src: "./Newsflash_BB_Regular.ttf",
  variable: "--font-Newsflash_BB",
});
const proximanova = localFont({
  src: "./ProximaNova-Regular.otf",
  variable: "--font-Proxima__Nova",
});

export { roboto, newsflashbb, proximanova };
