import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Raleway } from "next/font/google";

import "~/app/globals.scss";
import Navbar from "../components/Layouts/Navbar";
import ScrollToTop from "../components/ScrollToTop";

const ralewayFont = Raleway({
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
  subsets: ["latin"],
  variable: "--font-raleway",
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={ralewayFont.className}>
      <head>
        <title>Foso</title>
        <meta name="title" content="Foso" />
        <meta name="description" content="Foso" />

        <link rel="icon" href="/images/global/logo_icon.png" />
        <meta name="theme-color" content="#0A0A0A" />
        {/* <meta name="color-scheme" content="dark light" /> */}
        <link rel="apple-touch-icon" href="/images/global/logo.png" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/images/global/logo.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Foso" />
        <meta property="og:description" content="Foso" />
        <meta
          property="og:image"
          content="/images/global/logo.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Foso" />
        <meta property="twitter:description" content="Foso" />
        <meta
          property="twitter:image"
          content="/images/global/logo.png"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}

          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
