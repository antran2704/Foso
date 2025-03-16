import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Raleway } from "next/font/google";

import "~/app/globals.scss";

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
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
