import Head from "next/head";
import "../styles/globals.css"
import { Navigation } from "./components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <title>My first app with Next 13</title>
      </Head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
