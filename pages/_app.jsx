import "../styles/globals.css";

import { ThemeProvider } from "next-themes";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>

        <ThemeProvider enableSystem={true} attribute="class">
          <Component   {...pageProps} />
        </ThemeProvider>
    </>
  );
}
