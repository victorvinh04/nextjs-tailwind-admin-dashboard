import { Inter, Bricolage_Grotesque  } from "next/font/google"
import './globals.css';
import Cookies from 'js-cookie'

// import { SidebarProvider2 } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { SidebarProvider } from '@/components/ui/sidebar';
import { SearchProvider } from '@/context/search-context';
import { Metadata } from "next";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultOpen = Cookies.get('sidebar:state') !== 'false'
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        data-new-gr-c-s-check-loaded="14.1105.0"
        data-gr-ext-installed=""
        className={`${bricolage.variable} dark:bg-gray-900`}
      >
        <ThemeProvider 
          defaultTheme="light" 
          storageKey="ui-theme">
          <SearchProvider>
            <SidebarProvider defaultOpen={defaultOpen}>
              {children}
            </SidebarProvider>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
