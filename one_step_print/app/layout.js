import localFont from "next/font/local";
import "./globals.css";

// const neueHass = localFont({
//   src: [
//     {
//       path: "./static-font/NeueHaasDisplayBlack.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./static-font/NeueHaasDisplayBlackItalic.ttf",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "./static-font/NeueHaasDisplayBold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./static-font/NeueHaasDisplayBoldItalic.ttf",
//       weight: "700",
//       style: "italic",
//     },
//     {
//       path: "./static-font/NeueHaasDisplayLight.ttf",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "./static-font/NeueHaasDisplayLightItalic.ttf",
//       weight: "100",
//       style: "italic",
//     },
//     {
//       path: "./static-font/NeueHaasDisplayMediu.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./static-font/NeueHaasDisplayMediumItalic.ttf",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "./static-font/NeueHaasDisplayRoman.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./static-font/NeueHaasDisplayRomanItalic.ttf",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "./static-font/NeueHaasDisplayThin.ttf",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "./static-font/NeueHaasDisplayThinItalic.ttf",
//       weight: "100",
//       style: "italic",
//     },
//     {
//       path: "./static-font/NeueHaasDisplayXThin.ttf",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "./static-font/NeueHaasDisplayXThinItalic.ttf",
//       weight: "100",
//       style: "italic",
//     },
//     {
//       path: "./static-font/NeueHaasDisplayXXThin.ttf",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "./static-font/NeueHaasDisplayXXThinItalic.ttf",
//       weight: "100",
//       style: "italic",
//     },
//   ],
// });

export const metadata = {
  title: "One Step Print",
  description: "Created By Sugam Palav",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
