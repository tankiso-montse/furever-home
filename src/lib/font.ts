import { Geist, Geist_Mono, Instrument_Sans, Inter, Playfair_Display, Red_Rose } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],

})

export const red_rose = Red_Rose({
  variable: "--font-red-rose",
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
})

export const instrument_sans = Instrument_Sans({
  variable: "--font-instrument-sans",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
})