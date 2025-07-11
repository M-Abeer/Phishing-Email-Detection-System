



// After applying authentication


"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Loader2, CloudCog } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // To store error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Clear any previous error

    try {
      // Make the API request to the backend login endpoint
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      // Check if the login was successful
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();

      // If login is successful, store user data and redirect
      // Store the JWT in cookies
      document.cookie = `token=${data.token}; path=/; max-age=86400`;  // Store the token for 1 day

      // Redirect based on user role (adjust as needed)
      if (data.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/dashboard");
      }

    } catch (error) {
      setError(error.message); // Set error message if login fails
    } finally {
      setIsLoading(false); // Stop loading
    }
  };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(""); // Clear any previous error

//     try {
//         // Make the API request to the backend login endpoint
//         const response = await fetch("http://localhost:5000/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 email: formData.email,
//                 password: formData.password,
//             }),
//         });

//         // Check if the login was successful
//         if (!response.ok) {
//             throw new Error("Invalid credentials");
//         }

//         const data = await response.json();
//         console.log("Backend response:", data);  // Verify the response from backend

//         // If login is successful, store user data and redirect
//         // Store the JWT in cookies
//         document.cookie = `token=${data.token}; path=/; max-age=86400`;  // Store the token for 1 day

//         // Check role from backend and redirect accordingly
//         const userRole = data.role && data.role.trim().toLowerCase();  // Trim and check role
//         console.log(userRole);

//         if (userRole === "admin") {
//             router.push("/admin/dashboard");
//         } else if (userRole === "user") {
//             router.push("/");
//         } else {
//             setError("Invalid user role or undefined role received.");
//         }

//     } catch (error) {
//         setError(error.message); // Set error message if login fails
//     } finally {
//         setIsLoading(false); // Stop loading
//     }
// };

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-8">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-primary underline-offset-4 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>

            {/* Show error message if login fails */}
            {error && <div className="mt-4 text-red-500 text-center">{error}</div>}

            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-primary underline-offset-4 hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
