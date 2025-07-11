"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";

// Function to get token from cookies
const getTokenFromCookies = () => {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="));
  return cookie ? cookie.split("=")[1] : null;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname();

  // Function to check token and role from cookies
  const checkAuthStatus = () => {
    const token = getTokenFromCookies(); // Get token from cookies
    if (token) {
      setIsLoggedIn(true);
      const decoded = JSON.parse(atob(token.split(".")[1])); // Decode token to get user data
      setIsAdmin(decoded.role === "admin"); // Set role (admin or user)
    } else {
      setIsLoggedIn(false);
    }
  };

  // Use effect to check the token when the component mounts or cookies change
  useEffect(() => {
    checkAuthStatus(); // Check authentication status on mount or cookie change
  }, []); // Empty array ensures this runs only once on mount, or use a method to track cookies more efficiently

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    // Remove token from cookies
    document.cookie = "token=; path=/; max-age=-1"; // Delete token cookie
    setIsLoggedIn(false); // Set logged in state to false
    setIsAdmin(false); // Reset admin state
    window.location.href = "/"; // Redirect to home page or login page
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between pl-10 pr-12">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-green-500" />
            <span className="text-xl font-bold">PhishGuard</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/analyze"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/analyze" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Analyze
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/about" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            About
          </Link>
          {isLoggedIn && (
            <Link
              href={isAdmin ? "/admin/dashboard" : "/dashboard"}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname.includes("/dashboard") ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Dashboard
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href={isAdmin ? "/admin/dashboard" : "/dashboard"} className="flex w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                {/* <DropdownMenuItem>
                  <Link href="/profile" className="flex w-full">
                    Profile
                  </Link>
                </DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <div className="flex w-full items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex gap-2">
              <Link href="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link href="/register">
                <Button>Sign up</Button>
              </Link>
            </div>
          )}

          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary" onClick={closeMenu}>
              Home
            </Link>
            <Link
              href="/analyze"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              Analyze
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              About
            </Link>
            {isLoggedIn && (
              <Link
                href={isAdmin ? "/admin/dashboard" : "/dashboard"}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={closeMenu}
              >
                Dashboard
              </Link>
            )}
            {!isLoggedIn && (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={closeMenu}
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={closeMenu}
                >
                  Sign up
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
