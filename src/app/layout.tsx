import type { Metadata } from "next";
import { Geist} from "next/font/google";
import "./globals.css";
import { APP_DESCIPTION, APP_NAME } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Geist({
  weight: ["300", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Shoe Store",
    default: `${APP_NAME}`,
  },
  description: `${APP_DESCIPTION}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
