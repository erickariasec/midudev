import "../styles/globals.css";
import { Navigation } from "./components/Navigation";
import Head from "next/head";
import { font } from "./font";

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <title>My first app with Next 13</title>
      </Head>
      <body className={font.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
