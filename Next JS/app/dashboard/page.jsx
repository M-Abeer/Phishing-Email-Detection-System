// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { AlertTriangle, CheckCircle, Info, Search, Mail, BarChart3, Calendar, ArrowUpRight } from "lucide-react"

// // Mock data for user dashboard
// const mockAnalyzedEmails = [
//   {
//     id: 1,
//     subject: "Your PayPal account has been limited",
//     date: "2023-04-15T10:30:00",
//     score: 92,
//     verdict: "Phishing",
//     sender: "service@paypa1.com",
//   },
//   {
//     id: 2,
//     subject: "Amazon Order Confirmation #12345",
//     date: "2023-04-12T14:22:00",
//     score: 85,
//     verdict: "Phishing",
//     sender: "orders@amazon-services.net",
//   },
//   {
//     id: 3,
//     subject: "Your Netflix subscription",
//     date: "2023-04-10T09:15:00",
//     score: 78,
//     verdict: "Suspicious",
//     sender: "info@netflixbilling.com",
//   },
//   {
//     id: 4,
//     subject: "Team meeting tomorrow",
//     date: "2023-04-08T16:45:00",
//     score: 12,
//     verdict: "Safe",
//     sender: "manager@company.com",
//   },
//   {
//     id: 5,
//     subject: "Your invoice from Dropbox",
//     date: "2023-04-05T11:20:00",
//     score: 8,
//     verdict: "Safe",
//     sender: "no-reply@dropboxmail.com",
//   },
// ]

// const stats = {
//   totalScanned: 27,
//   phishingDetected: 14,
//   suspicious: 8,
//   safe: 5,
// }

// export default function DashboardPage() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [filteredEmails, setFilteredEmails] = useState(mockAnalyzedEmails)

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase()
//     setSearchTerm(term)

//     if (!term.trim()) {
//       setFilteredEmails(mockAnalyzedEmails)
//       return
//     }

//     const filtered = mockAnalyzedEmails.filter(
//       (email) => email.subject.toLowerCase().includes(term) || email.sender.toLowerCase().includes(term),
//     )

//     setFilteredEmails(filtered)
//   }

//   const formatDate = (dateString) => {
//     const date = new Date(dateString)
//     return date.toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     })
//   }

//   const getVerdictBadge = (verdict, score) => {
//     if (verdict === "Phishing") {
//       return (
//         <Badge variant="destructive" className="ml-2">
//           Phishing
//         </Badge>
//       )
//     } else if (verdict === "Suspicious") {
//       return <Badge className="bg-yellow-500 hover:bg-yellow-600 ml-2">Suspicious</Badge>
//     } else {
//       return <Badge className="bg-green-500 hover:bg-green-600 ml-2">Safe</Badge>
//     }
//   }

//   const getVerdictIcon = (verdict) => {
//     if (verdict === "Phishing") {
//       return <AlertTriangle className="h-5 w-5 text-destructive" />
//     } else if (verdict === "Suspicious") {
//       return <Info className="h-5 w-5 text-yellow-500" />
//     } else {
//       return <CheckCircle className="h-5 w-5 text-green-500" />
//     }
//   }

//   return (
//     <div className="container py-8">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
//         <div>
//           <h1 className="text-3xl font-bold">User Dashboard</h1>
//           <p className="text-muted-foreground">View and manage your email analysis history</p>
//         </div>
//         <Link href="/analyze">
//           <Button>
//             Analyze New Email
//             <ArrowUpRight className="ml-2 h-4 w-4" />
//           </Button>
//         </Link>
//       </div>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
//         <Card>
//           <CardContent className="p-6 flex flex-row items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-muted-foreground">Total Scanned</p>
//               <p className="text-3xl font-bold">{stats.totalScanned}</p>
//             </div>
//             <Mail className="h-8 w-8 text-muted-foreground/50" />
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-6 flex flex-row items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-muted-foreground">Phishing Detected</p>
//               <p className="text-3xl font-bold text-destructive">{stats.phishingDetected}</p>
//             </div>
//             <AlertTriangle className="h-8 w-8 text-destructive/50" />
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-6 flex flex-row items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-muted-foreground">Suspicious</p>
//               <p className="text-3xl font-bold text-yellow-500">{stats.suspicious}</p>
//             </div>
//             <Info className="h-8 w-8 text-yellow-500/50" />
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-6 flex flex-row items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-muted-foreground">Safe</p>
//               <p className="text-3xl font-bold text-green-500">{stats.safe}</p>
//             </div>
//             <CheckCircle className="h-8 w-8 text-green-500/50" />
//           </CardContent>
//         </Card>
//       </div>

//       <Tabs defaultValue="history" className="space-y-4">
//         <TabsList>
//           <TabsTrigger value="history">Analysis History</TabsTrigger>
//           <TabsTrigger value="stats">Statistics</TabsTrigger>
//         </TabsList>

//         <TabsContent value="history" className="space-y-4">
//           <div className="flex items-center gap-2">
//             <Search className="h-4 w-4 text-muted-foreground" />
//             <Input placeholder="Search emails..." value={searchTerm} onChange={handleSearch} className="max-w-sm" />
//           </div>

//           <Card>
//             <CardHeader>
//               <CardTitle>Email Analysis History</CardTitle>
//               <CardDescription>View all your previously analyzed emails</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {filteredEmails.length > 0 ? (
//                   filteredEmails.map((email) => (
//                     <div key={email.id} className="flex items-start gap-4 p-4 border rounded-lg">
//                       {getVerdictIcon(email.verdict)}
//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-center">
//                           <h4 className="font-medium truncate">{email.subject}</h4>
//                           {getVerdictBadge(email.verdict, email.score)}
//                         </div>
//                         <p className="text-sm text-muted-foreground truncate">From: {email.sender}</p>
//                         <p className="text-xs text-muted-foreground mt-1">{formatDate(email.date)}</p>
//                       </div>
//                       <Link href={`/analyze/details/${email.id}`}>
//                         <Button variant="outline" size="sm">
//                           View Details
//                         </Button>
//                       </Link>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="text-center py-8">
//                     <p className="text-muted-foreground">No emails found matching your search.</p>
//                   </div>
//                 )}
//               </div>
//             </CardContent>
//             <CardFooter className="flex justify-between">
//               <Button variant="outline" size="sm" disabled>
//                 Previous
//               </Button>
//               <Button variant="outline" size="sm" disabled>
//                 Next
//               </Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>

//         <TabsContent value="stats">
//           <div className="grid gap-6 md:grid-cols-2">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center">
//                   <BarChart3 className="mr-2 h-5 w-5" />
//                   Analysis Breakdown
//                 </CardTitle>
//                 <CardDescription>Distribution of email analysis results</CardDescription>
//               </CardHeader>
//               <CardContent className="p-6">
//                 <div className="space-y-4">
//                   <div>
//                     <div className="flex items-center justify-between mb-1">
//                       <span className="text-sm font-medium">Phishing</span>
//                       <span className="text-sm text-muted-foreground">{stats.phishingDetected} emails</span>
//                     </div>
//                     <div className="h-2 bg-muted rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-destructive"
//                         style={{ width: `${(stats.phishingDetected / stats.totalScanned) * 100}%` }}
//                       ></div>
//                     </div>
//                   </div>

//                   <div>
//                     <div className="flex items-center justify-between mb-1">
//                       <span className="text-sm font-medium">Suspicious</span>
//                       <span className="text-sm text-muted-foreground">{stats.suspicious} emails</span>
//                     </div>
//                     <div className="h-2 bg-muted rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-yellow-500"
//                         style={{ width: `${(stats.suspicious / stats.totalScanned) * 100}%` }}
//                       ></div>
//                     </div>
//                   </div>

//                   <div>
//                     <div className="flex items-center justify-between mb-1">
//                       <span className="text-sm font-medium">Safe</span>
//                       <span className="text-sm text-muted-foreground">{stats.safe} emails</span>
//                     </div>
//                     <div className="h-2 bg-muted rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-green-500"
//                         style={{ width: `${(stats.safe / stats.totalScanned) * 100}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center">
//                   <Calendar className="mr-2 h-5 w-5" />
//                   Recent Activity
//                 </CardTitle>
//                 <CardDescription>Your recent email analysis activity</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {mockAnalyzedEmails.slice(0, 3).map((email) => (
//                     <div key={email.id} className="flex items-center gap-3">
//                       {getVerdictIcon(email.verdict)}
//                       <div className="flex-1 min-w-0">
//                         <p className="text-sm font-medium truncate">{email.subject}</p>
//                         <p className="text-xs text-muted-foreground">{formatDate(email.date)}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button variant="outline" className="w-full" size="sm">
//                   View All Activity
//                 </Button>
//               </CardFooter>
//             </Card>
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }


// ===============================================================


// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { AlertTriangle, CheckCircle, Info, Mail, ArrowUpRight } from "lucide-react"

// // Function to get token from cookies
// const getTokenFromCookies = () => {
//   const cookie = document.cookie
//     .split('; ')
//     .find(row => row.startsWith('token='));
//   return cookie ? cookie.split('=')[1] : null;
// }

// // Function to get User ID from token
// const getUserIdFromToken = () => {
//   const token = getTokenFromCookies();
//   if (token) {
//     const decoded = JSON.parse(atob(token.split('.')[1]));
//     return decoded.user_id; // Assuming the user_id is in the token
//   }
//   return null;
// }

// export default function DashboardPage() {
//   const [userData, setUserData] = useState(null);
//   const [filteredEmails, setFilteredEmails] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch user data from API based on user ID from token
//   const fetchUserData = async () => {
//     const userId = getUserIdFromToken();
//     if (userId) {
//       try {
//         const response = await fetch(`http://127.0.0.1:5000/user-history/${userId}`);
//         const data = await response.json();
//         setUserData(data); // Set user data dynamically
//         setFilteredEmails(data); // Assuming the user data contains email history
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   // Helper function to format the date
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   // Helper function to get verdict badge
//   const getVerdictBadge = (verdict) => {
//     if (verdict === "phishing") {
//       return <Badge variant="destructive" className="ml-2">Phishing</Badge>;
//     } else if (verdict === "suspicious") {
//       return <Badge className="bg-yellow-500 hover:bg-yellow-600 ml-2">Suspicious</Badge>;
//     } else {
//       return <Badge className="bg-green-500 hover:bg-green-600 ml-2">Safe</Badge>;
//     }
//   };

//   const getVerdictIcon = (verdict) => {
//     if (verdict === "phishing") {
//       return <AlertTriangle className="h-5 w-5 text-destructive" />;
//     } else if (verdict === "suspicious") {
//       return <Info className="h-5 w-5 text-yellow-500" />;
//     } else {
//       return <CheckCircle className="h-5 w-5 text-green-500" />;
//     }
//   };

//   // Calculate statistics dynamically
//   const calculateStats = () => {
//     if (!filteredEmails || filteredEmails.length === 0) return { total_scanned: 0, total_spam: 0, total_ham: 0 };

//     const totalScanned = filteredEmails.length;
//     const totalSpam = filteredEmails.filter(email => email.label === "phishing").length;
//     const totalHam = filteredEmails.filter(email => email.label === "ham").length;

//     return { total_scanned: totalScanned, total_spam: totalSpam, total_ham: totalHam };
//   };

//   const stats = calculateStats();

//   return (
//     <div className="container py-8 px-8">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
//         <div>
//           <h1 className="text-3xl font-bold">User Dashboard</h1>
//           <p className="text-muted-foreground">View and manage your email analysis history</p>
//         </div>
//         <Link href="/analyze">
//           <Button>
//             Analyze New Email
//             <ArrowUpRight className="ml-2 h-4 w-4" />
//           </Button>
//         </Link>
//       </div>

//       {/* Statistics Cards */}
//       <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3 mb-8">
//         {loading ? (
//           <div className="text-center">Loading...</div>
//         ) : (
//           <>
//             <Card>
//               <CardContent className="p-6 flex flex-row items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-muted-foreground">Total Scanned</p>
//                   <p className="text-3xl font-bold">{stats.total_scanned}</p>
//                 </div>
//                 <Mail className="h-8 w-8 text-muted-foreground/50" />
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="p-6 flex flex-row items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-muted-foreground">Total Spam</p>
//                   <p className="text-3xl font-bold text-destructive">{stats.total_spam}</p>
//                 </div>
//                 <AlertTriangle className="h-8 w-8 text-destructive/50" />
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="p-6 flex flex-row items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-muted-foreground">Total Ham</p>
//                   <p className="text-3xl font-bold text-green-500">{stats.total_ham}</p>
//                 </div>
//                 <CheckCircle className="h-8 w-8 text-green-500/50" />
//               </CardContent>
//             </Card>
//           </>
//         )}
//       </div>

//       {/* Email History */}
//       <div className="space-y-4">
//         <Card>
//           <CardHeader>
//             <CardTitle>Email Analysis History</CardTitle>
//             <CardDescription>View all your previously analyzed emails</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {filteredEmails.length > 0 ? (
//                 filteredEmails.map((email) => (
//                   <div key={email.id} className="flex items-start gap-4 p-4 border rounded-lg">
//                     {getVerdictIcon(email.label)}
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center">
//                         <h4 className="font-medium truncate">{email.email_text}</h4>
//                         {getVerdictBadge(email.label)}
//                       </div>
//                       <p className="text-sm text-muted-foreground truncate">From: {email.sender}</p>
//                       <p className="text-xs text-muted-foreground mt-1">{formatDate(email.scanned_at)}</p>
//                     </div>
//                     <Link href={`/analyze/details/${email.id}`}>
//                       <Button variant="outline" size="sm">
//                         View Details
//                       </Button>
//                     </Link>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center py-8">
//                   <p className="text-muted-foreground">No emails found matching your search.</p>
//                 </div>
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }




// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation" // Importing the useRouter hook
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { AlertTriangle, CheckCircle, Info, Mail, ArrowUpRight } from "lucide-react"

// // Function to get token from cookies
// const getTokenFromCookies = () => {
//   const cookie = document.cookie
//     .split('; ')
//     .find(row => row.startsWith('token='));
//   return cookie ? cookie.split('=')[1] : null;
// }

// // Function to get User ID from token
// const getUserIdFromToken = () => {
//   const token = getTokenFromCookies();
//   if (token) {
//     const decoded = JSON.parse(atob(token.split('.')[1]));
//     return decoded.user_id; // Assuming the user_id is in the token
//   }
//   return null;
// }

// export default function DashboardPage() {
//   const [userData, setUserData] = useState(null)
//   const [filteredEmails, setFilteredEmails] = useState([])
//   const [loading, setLoading] = useState(true)
//   const router = useRouter() // Initialize router for redirection

//   // Fetch user data from API based on user ID from token
//   const fetchUserData = async () => {
//     const userId = getUserIdFromToken()
//     if (userId) {
//       try {
//         const response = await fetch(`http://127.0.0.1:5000/user-history/${userId}`)
//         const data = await response.json()
//         setUserData(data) // Set user data dynamically
//         setFilteredEmails(data) // Assuming the user data contains email history
//       } catch (error) {
//         console.error("Error fetching user data:", error)
//       } finally {
//         setLoading(false)
//       }
//     } else {
//       // If no userId (i.e., not logged in), redirect to the login page
//       router.push("/login")
//     }
//   }

//   useEffect(() => {
//     fetchUserData()
//   }, [])

//   // Helper function to format the date
//   const formatDate = (dateString) => {
//     const date = new Date(dateString)
//     return date.toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     })
//   }

//   // Helper function to get verdict badge
//   const getVerdictBadge = (verdict) => {
//     if (verdict === "phishing") {
//       return <Badge variant="destructive" className="ml-2">Phishing</Badge>
//     } else if (verdict === "suspicious") {
//       return <Badge className="bg-yellow-500 hover:bg-yellow-600 ml-2">Suspicious</Badge>
//     } else {
//       return <Badge className="bg-green-500 hover:bg-green-600 ml-2">Safe</Badge>
//     }
//   }

//   const getVerdictIcon = (verdict) => {
//     if (verdict === "phishing") {
//       return <AlertTriangle className="h-5 w-5 text-destructive" />
//     } else if (verdict === "suspicious") {
//       return <Info className="h-5 w-5 text-yellow-500" />
//     } else {
//       return <CheckCircle className="h-5 w-5 text-green-500" />
//     }
//   }

//   // Calculate statistics dynamically
//   const calculateStats = () => {
//     if (!filteredEmails || filteredEmails.length === 0) return { total_scanned: 0, total_spam: 0, total_ham: 0 }

//     const totalScanned = filteredEmails.length
//     const totalSpam = filteredEmails.filter(email => email.label === "phishing").length
//     const totalHam = filteredEmails.filter(email => email.label === "ham").length

//     return { total_scanned: totalScanned, total_spam: totalSpam, total_ham: totalHam }
//   }

//   const stats = calculateStats()

//   return (
//     <div className="container py-8 px-8">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
//         <div>
//           <h1 className="text-3xl font-bold">User Dashboard</h1>
//           <p className="text-muted-foreground">View and manage your email analysis history</p>
//         </div>
//         <Link href="/analyze">
//           <Button>
//             Analyze New Email
//             <ArrowUpRight className="ml-2 h-4 w-4" />
//           </Button>
//         </Link>
//       </div>

//       {/* Statistics Cards */}
//       <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3 mb-8">
//         {loading ? (
//           <div className="text-center">Loading...</div>
//         ) : (
//           <>
//             <Card>
//               <CardContent className="p-6 flex flex-row items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-muted-foreground">Total Scanned</p>
//                   <p className="text-3xl font-bold">{stats.total_scanned}</p>
//                 </div>
//                 <Mail className="h-8 w-8 text-muted-foreground/50" />
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="p-6 flex flex-row items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-muted-foreground">Total Spam</p>
//                   <p className="text-3xl font-bold text-destructive">{stats.total_spam}</p>
//                 </div>
//                 <AlertTriangle className="h-8 w-8 text-destructive/50" />
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="p-6 flex flex-row items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-muted-foreground">Total Ham</p>
//                   <p className="text-3xl font-bold text-green-500">{stats.total_ham}</p>
//                 </div>
//                 <CheckCircle className="h-8 w-8 text-green-500/50" />
//               </CardContent>
//             </Card>
//           </>
//         )}
//       </div>

//       {/* Email History */}
//       <div className="space-y-4">
//         <Card>
//           <CardHeader>
//             <CardTitle>Email Analysis History</CardTitle>
//             <CardDescription>View all your previously analyzed emails</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {filteredEmails.length > 0 ? (
//                 filteredEmails.map((email) => (
//                   <div key={email.id} className="flex items-start gap-4 p-4 border rounded-lg">
//                     {getVerdictIcon(email.label)}
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center">
//                         <h4 className="font-medium truncate">{email.email_text}</h4>
//                         {getVerdictBadge(email.label)}
//                       </div>
//                       <p className="text-sm text-muted-foreground truncate">From: {email.sender}</p>
//                       <p className="text-xs text-muted-foreground mt-1">{formatDate(email.scanned_at)}</p>
//                     </div>
//                     <Link href={`/analyze/details/${email.id}`}>
//                       <Button variant="outline" size="sm">
//                         View Details
//                       </Button>
//                     </Link>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center py-8">
//                   <p className="text-muted-foreground">No emails found matching your search.</p>
//                 </div>
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
// import { AlertTriangle, CheckCircle, Info, Mail, ArrowUpRight } from "lucide-react"

// // Function to get token from cookies
// const getTokenFromCookies = () => {
//   const cookie = document.cookie
//     .split('; ')
//     .find(row => row.startsWith('token='));
//   return cookie ? cookie.split('=')[1] : null;
// }

// // Function to get User ID from token
// const getUserIdFromToken = () => {
//   const token = getTokenFromCookies();
//   if (token) {
//     const decoded = JSON.parse(atob(token.split('.')[1]));
//     return decoded.user_id; // Assuming the user_id is in the token
//   }
//   return null;
// }

// export default function DashboardPage() {
//   const [userData, setUserData] = useState(null)
//   const [filteredEmails, setFilteredEmails] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [selectedEmail, setSelectedEmail] = useState(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const router = useRouter()

//   // Fetch user data from API based on user ID from token
//   const fetchUserData = async () => {
//     const userId = getUserIdFromToken()
//     if (userId) {
//       try {
//         const response = await fetch(`http://127.0.0.1:5000/user-history/${userId}`)
//         const data = await response.json()
//         setUserData(data)
//         setFilteredEmails(data) // Assuming the user data contains email history
//       } catch (error) {
//         console.error("Error fetching user data:", error)
//       } finally {
//         setLoading(false)
//       }
//     } else {
//       router.push("/login")
//     }
//   }

//   useEffect(() => {
//     fetchUserData()
//   }, [])

//   // Helper function to format the date
//   const formatDate = (dateString) => {
//     const date = new Date(dateString)
//     return date.toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     })
//   }

//   // Helper function to get verdict badge
//   const getVerdictBadge = (verdict) => {
//     if (verdict === "phishing") {
//       return <Badge variant="destructive" className="ml-2">Phishing</Badge>
//     } else if (verdict === "suspicious") {
//       return <Badge className="bg-yellow-500 hover:bg-yellow-600 ml-2">Suspicious</Badge>
//     } else {
//       return <Badge className="bg-green-500 hover:bg-green-600 ml-2">Safe</Badge>
//     }
//   }

//   const getVerdictIcon = (verdict) => {
//     if (verdict === "phishing") {
//       return <AlertTriangle className="h-5 w-5 text-destructive" />
//     } else if (verdict === "suspicious") {
//       return <Info className="h-5 w-5 text-yellow-500" />
//     } else {
//       return <CheckCircle className="h-5 w-5 text-green-500" />
//     }
//   }

//   // Handle opening the modal with email details
//   const handleViewDetails = (email) => {
//     setSelectedEmail(email)
//     setIsModalOpen(true)
//   }

//   // Calculate statistics dynamically
//   const calculateStats = () => {
//     if (!filteredEmails || filteredEmails.length === 0) return { total_scanned: 0, total_spam: 0, total_ham: 0 }

//     const totalScanned = filteredEmails.length
//     const totalSpam = filteredEmails.filter(email => email.label === "phishing").length
//     const totalHam = filteredEmails.filter(email => email.label === "ham").length

//     return { total_scanned: totalScanned, total_spam: totalSpam, total_ham: totalHam }
//   }

//   const stats = calculateStats()

//   return (
//     <div className="container py-8 px-8">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
//         <div>
//           <h1 className="text-3xl font-bold">User Dashboard</h1>
//           <p className="text-muted-foreground">View and manage your email analysis history</p>
//         </div>
//         <Link href="/analyze">
//           <Button>
//             Analyze New Email
//             <ArrowUpRight className="ml-2 h-4 w-4" />
//           </Button>
//         </Link>
//       </div>

//       {/* Statistics Cards */}
//       <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3 mb-8">
//         {loading ? (
//           <div className="text-center">Loading...</div>
//         ) : (
//           <>
//             <Card>
//               <CardContent className="p-6 flex flex-row items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-muted-foreground">Total Scanned</p>
//                   <p className="text-3xl font-bold">{stats.total_scanned}</p>
//                 </div>
//                 <Mail className="h-8 w-8 text-muted-foreground/50" />
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="p-6 flex flex-row items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-muted-foreground">Total Spam</p>
//                   <p className="text-3xl font-bold text-destructive">{stats.total_spam}</p>
//                 </div>
//                 <AlertTriangle className="h-8 w-8 text-destructive/50" />
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="p-6 flex flex-row items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-muted-foreground">Total Ham</p>
//                   <p className="text-3xl font-bold text-green-500">{stats.total_ham}</p>
//                 </div>
//                 <CheckCircle className="h-8 w-8 text-green-500/50" />
//               </CardContent>
//             </Card>
//           </>
//         )}
//       </div>

//       {/* Email History */}
//       <div className="space-y-4">
//         <Card>
//           <CardHeader>
//             <CardTitle>Email Analysis History</CardTitle>
//             <CardDescription>View all your previously analyzed emails</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {filteredEmails.length > 0 ? (
//                 filteredEmails.map((email) => (
//                   <div key={email.id} className="flex items-start gap-4 p-4 border rounded-lg">
//                     {getVerdictIcon(email.label)}
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center">
//                         <h4 className="font-medium truncate">{email.email_text}</h4>
//                         {getVerdictBadge(email.label)}
//                       </div>
//                       <p className="text-sm text-muted-foreground truncate">From: {email.sender}</p>
//                       <p className="text-xs text-muted-foreground mt-1">{formatDate(email.scanned_at)}</p>
//                     </div>
//                     <Button variant="outline" size="sm" onClick={() => handleViewDetails(email)}>
//                       View Details
//                     </Button>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center py-8">
//                   <p className="text-muted-foreground">No emails found matching your search.</p>
//                 </div>
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Modal for Email Details */}
//       {selectedEmail && (
//         <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//           <DialogContent className="sm:max-w-[600px]">
//             <DialogHeader>
//               <DialogTitle>Email Details</DialogTitle>
//             </DialogHeader>
//             <div className="space-y-4">
//               <div>
//                 <h4 className="font-medium">Label</h4>
//                 <div className="flex items-center gap-2">
//                   {getVerdictIcon(selectedEmail.label)}
//                   {getVerdictBadge(selectedEmail.label)}
//                 </div>
//               </div>
//               {/* <div>
//                 <h4 className="font-medium">Sender</h4>
//                 <p className="text-sm text-muted-foreground">{selectedEmail.sender}</p>
//               </div> */}
//               <div>
//                 <h4 className="font-medium">Scanned At</h4>
//                 <p className="text-sm text-muted-foreground">{formatDate(selectedEmail.scanned_at)}</p>
//               </div>
//               <div>
//                 <h4 className="font-medium">Email Content</h4>
//                 <p className="text-sm text-muted-foreground whitespace-pre-wrap">{selectedEmail.email_text}</p>
//               </div>
//             </div>
//             <DialogClose asChild>
//               <Button variant="outline" className="mt-4">Close</Button>
//             </DialogClose>
//           </DialogContent>
//         </Dialog>
//       )}
//     </div>
//   )
// }


"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { AlertTriangle, CheckCircle, Info, Mail, ArrowUpRight } from "lucide-react"

// Utility Functions
const getTokenFromCookies = () => {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('token='));
  return cookie ? cookie.split('=')[1] : null;
}

const getUserIdFromToken = () => {
  const token = getTokenFromCookies();
  if (token) {
    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      return decoded.user_id;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }
  return null;
}

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * @typedef {Object} Email
 * @property {string} id
 * @property {string} email_text
 * @property {string} sender
 * @property {string} label
 * @property {string} scanned_at
 */

/**
 * @typedef {Object} Stats
 * @property {number} total_scanned
 * @property {number} total_spam
 * @property {number} total_ham
 */

/**
 * Email List Item Component
 * @param {Object} props
 * @param {Email} props.email
 * @param {function} props.onViewDetails
 */
const EmailListItem = ({ email, onViewDetails }) => {
  const getVerdictBadge = (verdict) => {
    if (verdict === "phishing") {
      return <Badge variant="destructive" className="ml-2">Phishing</Badge>;
    } else if (verdict === "suspicious") {
      return <Badge className="bg-yellow-500 hover:bg-yellow-600 ml-2">Suspicious</Badge>;
    }
    return <Badge className="bg-green-500 hover:bg-green-600 ml-2">Safe</Badge>;
  };

  const getVerdictIcon = (verdict) => {
    if (verdict === "phishing") {
      return <AlertTriangle className="h-5 w-5 text-destructive" />;
    } else if (verdict === "suspicious") {
      return <Info className="h-5 w-5 text-yellow-500" />;
    }
    return <CheckCircle className="h-5 w-5 text-green-500" />;
  };

  return (
    <div className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-900 transition">
      {getVerdictIcon(email.label)}
      <div className="flex-1 min-w-0">
        <div className="flex items-center">
          <h4 className="font-medium truncate">{email.email_text}</h4>
          {getVerdictBadge(email.label)}
        </div>
        {/* <p className="text-sm text-muted-foreground truncate">From: {email.sender}</p> */}
        <p className="text-xs text-muted-foreground mt-1">{formatDate(email.scanned_at)}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onViewDetails(email)}
        aria-label={`View details for email from ${email.sender}`}
      >
        View Details
      </Button>
    </div>
  );
};

/**
 * Email Details Modal Component
 * @param {Object} props
 * @param {Email|null} props.email
 * @param {boolean} props.isOpen
 * @param {function} props.onClose
 */
const EmailDetailsModal = ({ email, isOpen, onClose }) => {
  if (!email) return null;

  const getVerdictBadge = (verdict) => {
    if (verdict === "phishing") {
      return <Badge variant="destructive" className="ml-2">Phishing</Badge>;
    } else if (verdict === "suspicious") {
      return <Badge className="bg-yellow-500 hover:bg-yellow-600 ml-2">Suspicious</Badge>;
    }
    return <Badge className="bg-green-500 hover:bg-green-600 ml-2">Safe</Badge>;
  };

  const getVerdictIcon = (verdict) => {
    if (verdict === "phishing") {
      return <AlertTriangle className="h-5 w-5 text-destructive" />;
    } else if (verdict === "suspicious") {
      return <Info className="h-5 w-5 text-yellow-500" />;
    }
    return <CheckCircle className="h-5 w-5 text-green-500" />;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Email Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Label</h4>
            <div className="flex items-center gap-2">
              {getVerdictIcon(email.label)}
              {getVerdictBadge(email.label)}
            </div>
          </div>
          {/* <div>
            <h4 className="font-medium">Sender</h4>
            <p className="text-sm text-muted-foreground">{email.sender}</p>
          </div> */}
          <div>
            <h4 className="font-medium">Scanned At</h4>
            <p className="text-sm text-muted-foreground">{formatDate(email.scanned_at)}</p>
          </div>
          <div>
            <h4 className="font-medium">Email Content</h4>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{email.email_text}</p>
          </div>
        </div>
        <DialogClose asChild>
          <Button variant="outline" className="mt-4">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

/**
 * Pagination Component
 * @param {Object} props
 * @param {number} props.currentPage
 * @param {number} props.totalPages
 * @param {function} props.onPageChange
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        Previous
      </Button>
      {pages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "default" : "outline"}
          size="sm"
          onClick={() => onPageChange(page)}
          aria-label={`Go to page ${page}`}
        >
          {page}
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next
      </Button>
    </div>
  );
};

export default function DashboardPage() {
  const [userData, setUserData] = useState(null);
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const router = useRouter();

  const fetchUserData = useCallback(async () => {
    const userId = getUserIdFromToken();
    if (!userId) {
      router.push("/login");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://127.0.0.1:5000/user-history/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUserData(data);
      setFilteredEmails(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Unable to load email history. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handleViewDetails = (email) => {
    setSelectedEmail(email);
    setIsModalOpen(true);
  };

  const calculateStats = () => {
    if (!filteredEmails || filteredEmails.length === 0) {
      return { total_scanned: 0, total_spam: 0, total_ham: 0 };
    }

    const totalScanned = filteredEmails.length;
    const totalSpam = filteredEmails.filter((email) => email.label === "phishing").length;
    const totalHam = filteredEmails.filter((email) => email.label === "ham").length;

    return { total_scanned: totalScanned, total_spam: totalSpam, total_ham: totalHam };
  };

  const stats = calculateStats();

  // Pagination logic
  const totalPages = Math.ceil(filteredEmails.length / itemsPerPage);
  const paginatedEmails = filteredEmails.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="container py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">User Dashboard</h1>
          <p className="text-muted-foreground">View and manage your email analysis history</p>
        </div>
        <Link href="/analyze">
          <Button aria-label="Analyze a new email">
            Analyze New Email
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {loading ? (
          <div className="col-span-full text-center">
            <div className="flex justify-center items-center">
              <svg className="animate-spin h-8 w-8 text-primary" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
            </div>
          </div>
        ) : error ? (
          <div className="col-span-full text-center text-destructive">{error}</div>
        ) : (
          <>
            <Card>
              <CardContent className="p-6 flex flex-row items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Scanned</p>
                  <p className="text-3xl font-bold">{stats.total_scanned}</p>
                </div>
                <Mail className="h-8 w-8 text-muted-foreground/50" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-row items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Spam</p>
                  <p className="text-3xl font-bold text-destructive">{stats.total_spam}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-destructive/50" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-row items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Ham</p>
                  <p className="text-3xl font-bold text-green-500">{stats.total_ham}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500/50" />
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Email History */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Email Analysis History</CardTitle>
            <CardDescription>View all your previously analyzed emails</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {loading ? (
                <div className="text-center">
                  <div className="flex justify-center items-center">
                    <svg className="animate-spin h-8 w-8 text-primary" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                  </div>
                </div>
              ) : error ? (
                <div className="text-center text-destructive">{error}</div>
              ) : paginatedEmails.length > 0 ? (
                paginatedEmails.map((email) => (
                  <EmailListItem key={email.id} email={email} onViewDetails={handleViewDetails} />
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No emails found matching your search.</p>
                </div>
              )}
            </div>
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </CardContent>
        </Card>
      </div>

      <EmailDetailsModal
        email={selectedEmail}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}