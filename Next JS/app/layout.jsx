"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "PhishGuard - Email Phishing Detection System",
//   description: "Detect phishing emails with advanced AI technology",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current route path

  // Check if the current path is "login" or "register"
  const showNavbar = pathname !== "/login" && pathname !== "/register";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background">
            {showNavbar && <Navbar />} {/* Only show Navbar if not on login or register pages */}
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
