// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { AlertTriangle, Search, Users, BarChart3, Shield, User, Mail } from "lucide-react"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// // Mock data for admin dashboard
// const mockUsers = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "john@example.com",
//     role: "User",
//     status: "Active",
//     lastActive: "2023-04-15T10:30:00",
//     emailsAnalyzed: 12,
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     email: "jane@example.com",
//     role: "User",
//     status: "Active",
//     lastActive: "2023-04-14T14:22:00",
//     emailsAnalyzed: 8,
//   },
//   {
//     id: 3,
//     name: "Robert Johnson",
//     email: "robert@example.com",
//     role: "User",
//     status: "Inactive",
//     lastActive: "2023-03-10T09:15:00",
//     emailsAnalyzed: 3,
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     email: "emily@example.com",
//     role: "User",
//     status: "Active",
//     lastActive: "2023-04-12T16:45:00",
//     emailsAnalyzed: 15,
//   },
//   {
//     id: 5,
//     name: "Michael Wilson",
//     email: "michael@example.com",
//     role: "User",
//     status: "Active",
//     lastActive: "2023-04-13T11:20:00",
//     emailsAnalyzed: 7,
//   },
// ]

// const mockAnalyzedEmails = [
//   {
//     id: 1,
//     userId: 1,
//     userName: "John Doe",
//     subject: "Your PayPal account has been limited",
//     date: "2023-04-15T10:30:00",
//     score: 92,
//     verdict: "Phishing",
//     sender: "service@paypa1.com",
//   },
//   {
//     id: 2,
//     userId: 2,
//     userName: "Jane Smith",
//     subject: "Amazon Order Confirmation #12345",
//     date: "2023-04-14T14:22:00",
//     score: 85,
//     verdict: "Phishing",
//     sender: "orders@amazon-services.net",
//   },
//   {
//     id: 3,
//     userId: 4,
//     userName: "Emily Davis",
//     subject: "Your Netflix subscription",
//     date: "2023-04-12T09:15:00",
//     score: 78,
//     verdict: "Suspicious",
//     sender: "info@netflixbilling.com",
//   },
//   {
//     id: 4,
//     userId: 5,
//     userName: "Michael Wilson",
//     subject: "Team meeting tomorrow",
//     date: "2023-04-13T16:45:00",
//     score: 12,
//     verdict: "Safe",
//     sender: "manager@company.com",
//   },
//   {
//     id: 5,
//     userId: 1,
//     userName: "John Doe",
//     subject: "Your invoice from Dropbox",
//     date: "2023-04-15T11:20:00",
//     score: 8,
//     verdict: "Safe",
//     sender: "no-reply@dropboxmail.com",
//   },
// ]

// const stats = {
//   totalUsers: 42,
//   activeUsers: 38,
//   totalScanned: 156,
//   phishingDetected: 87,
//   suspicious: 45,
//   safe: 24,
// }

// export default function AdminDashboardPage() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [filteredUsers, setFilteredUsers] = useState(mockUsers)
//   const [filteredEmails, setFilteredEmails] = useState(mockAnalyzedEmails)

//   const handleUserSearch = (e) => {
//     const term = e.target.value.toLowerCase()
//     setSearchTerm(term)

//     if (!term.trim()) {
//       setFilteredUsers(mockUsers)
//       return
//     }

//     const filtered = mockUsers.filter(
//       (user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term),
//     )

//     setFilteredUsers(filtered)
//   }

//   const handleEmailSearch = (e) => {
//     const term = e.target.value.toLowerCase()
//     setSearchTerm(term)

//     if (!term.trim()) {
//       setFilteredEmails(mockAnalyzedEmails)
//       return
//     }

//     const filtered = mockAnalyzedEmails.filter(
//       (email) =>
//         email.subject.toLowerCase().includes(term) ||
//         email.sender.toLowerCase().includes(term) ||
//         email.userName.toLowerCase().includes(term),
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

//   const getVerdictBadge = (verdict) => {
//     if (verdict === "Phishing") {
//       return <Badge variant="destructive">Phishing</Badge>
//     } else if (verdict === "Suspicious") {
//       return <Badge className="bg-yellow-500 hover:bg-yellow-600">Suspicious</Badge>
//     } else {
//       return <Badge className="bg-green-500 hover:bg-green-600">Safe</Badge>
//     }
//   }

//   const getStatusBadge = (status) => {
//     if (status === "Active") {
//       return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
//     } else {
//       return <Badge variant="outline">Inactive</Badge>
//     }
//   }

//   return (
//     <div className="container py-8">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
//         <div>
//           <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//           <p className="text-muted-foreground">Manage users and view system analytics</p>
//         </div>
//         <div className="flex gap-2">
//           <Button variant="outline">Export Data</Button>
//           <Button>System Settings</Button>
//         </div>
//       </div>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
//         <Card>
//           <CardContent className="p-6 flex flex-row items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-muted-foreground">Total Users</p>
//               <p className="text-3xl font-bold">{stats.totalUsers}</p>
//             </div>
//             <Users className="h-8 w-8 text-muted-foreground/50" />
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-6 flex flex-row items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-muted-foreground">Active Users</p>
//               <p className="text-3xl font-bold text-green-500">{stats.activeUsers}</p>
//             </div>
//             <User className="h-8 w-8 text-green-500/50" />
//           </CardContent>
//         </Card>

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
//       </div>

//       <Tabs defaultValue="users" className="space-y-4">
//         <TabsList>
//           <TabsTrigger value="users">Users</TabsTrigger>
//           <TabsTrigger value="emails">Email Analysis</TabsTrigger>
//           <TabsTrigger value="stats">System Stats</TabsTrigger>
//         </TabsList>

//         <TabsContent value="users" className="space-y-4">
//           <div className="flex items-center gap-2">
//             <Search className="h-4 w-4 text-muted-foreground" />
//             <Input placeholder="Search users..." value={searchTerm} onChange={handleUserSearch} className="max-w-sm" />
//           </div>

//           <Card>
//             <CardHeader>
//               <CardTitle>User Management</CardTitle>
//               <CardDescription>View and manage all registered users</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Name</TableHead>
//                     <TableHead>Email</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead>Last Active</TableHead>
//                     <TableHead>Emails Analyzed</TableHead>
//                     <TableHead className="text-right">Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {filteredUsers.map((user) => (
//                     <TableRow key={user.id}>
//                       <TableCell className="font-medium">{user.name}</TableCell>
//                       <TableCell>{user.email}</TableCell>
//                       <TableCell>{getStatusBadge(user.status)}</TableCell>
//                       <TableCell>{formatDate(user.lastActive)}</TableCell>
//                       <TableCell>{user.emailsAnalyzed}</TableCell>
//                       <TableCell className="text-right">
//                         <Button variant="ghost" size="sm">
//                           View
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
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

//         <TabsContent value="emails" className="space-y-4">
//           <div className="flex items-center gap-2">
//             <Search className="h-4 w-4 text-muted-foreground" />
//             <Input
//               placeholder="Search emails..."
//               value={searchTerm}
//               onChange={handleEmailSearch}
//               className="max-w-sm"
//             />
//           </div>

//           <Card>
//             <CardHeader>
//               <CardTitle>Email Analysis History</CardTitle>
//               <CardDescription>View all analyzed emails across all users</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>User</TableHead>
//                     <TableHead>Subject</TableHead>
//                     <TableHead>Sender</TableHead>
//                     <TableHead>Date</TableHead>
//                     <TableHead>Verdict</TableHead>
//                     <TableHead className="text-right">Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {filteredEmails.map((email) => (
//                     <TableRow key={email.id}>
//                       <TableCell className="font-medium">{email.userName}</TableCell>
//                       <TableCell className="max-w-[200px] truncate">{email.subject}</TableCell>
//                       <TableCell className="max-w-[150px] truncate">{email.sender}</TableCell>
//                       <TableCell>{formatDate(email.date)}</TableCell>
//                       <TableCell>{getVerdictBadge(email.verdict)}</TableCell>
//                       <TableCell className="text-right">
//                         <Button variant="ghost" size="sm">
//                           View
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
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

//         <TabsContent value="stats" className="space-y-4">
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
//                   <Users className="mr-2 h-5 w-5" />
//                   User Activity
//                 </CardTitle>
//                 <CardDescription>User registration and activity trends</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium">New Users (This Week)</p>
//                       <p className="text-2xl font-bold">8</p>
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium">Active Users (Today)</p>
//                       <p className="text-2xl font-bold">24</p>
//                     </div>
//                   </div>

//                   <div>
//                     <p className="text-sm font-medium mb-2">Most Active Users</p>
//                     <div className="space-y-2">
//                       {mockUsers
//                         .sort((a, b) => b.emailsAnalyzed - a.emailsAnalyzed)
//                         .slice(0, 3)
//                         .map((user) => (
//                           <div key={user.id} className="flex items-center justify-between">
//                             <div className="flex items-center gap-2">
//                               <User className="h-4 w-4 text-muted-foreground" />
//                               <span className="text-sm">{user.name}</span>
//                             </div>
//                             <span className="text-sm text-muted-foreground">{user.emailsAnalyzed} emails</span>
//                           </div>
//                         ))}
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button variant="outline" className="w-full" size="sm">
//                   View Detailed Analytics
//                 </Button>
//               </CardFooter>
//             </Card>
//           </div>

//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center">
//                 <Shield className="mr-2 h-5 w-5" />
//                 System Performance
//               </CardTitle>
//               <CardDescription>System health and performance metrics</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="space-y-2">
//                   <p className="text-sm font-medium">Average Analysis Time</p>
//                   <p className="text-2xl font-bold">1.2s</p>
//                   <p className="text-xs text-muted-foreground">5% faster than last week</p>
//                 </div>

//                 <div className="space-y-2">
//                   <p className="text-sm font-medium">Detection Accuracy</p>
//                   <p className="text-2xl font-bold">97.8%</p>
//                   <p className="text-xs text-muted-foreground">1.2% improvement</p>
//                 </div>

//                 <div className="space-y-2">
//                   <p className="text-sm font-medium">System Uptime</p>
//                   <p className="text-2xl font-bold">99.99%</p>
//                   <p className="text-xs text-muted-foreground">Last 30 days</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }


// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { Search, Users } from "lucide-react"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// // Function to get token from cookies
// const getTokenFromCookies = () => {
//   const cookie = document.cookie
//     .split('; ')
//     .find(row => row.startsWith('token='))
//   return cookie ? cookie.split('=')[1] : null
// }

// // Function to get User ID from token
// const getUserIdFromToken = () => {
//   const token = getTokenFromCookies()
//   if (token) {
//     const decoded = JSON.parse(atob(token.split('.')[1]))
//     return decoded.user_id // Assuming the user_id is in the token
//   }
//   return null // Return null if token is not available
// }

// export default function AdminDashboardPage() {
//   const [users, setUsers] = useState([])
//   const [filteredUsers, setFilteredUsers] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [searchTerm, setSearchTerm] = useState("")
//   const router = useRouter()

//   // Redirect if the user is not logged in
//   const checkLoginStatus = () => {
//     const userId = getUserIdFromToken()
//     if (!userId) {
//       router.push("/login") // Redirect to login page if not logged in
//     }
//   }

//   // Fetch all users from API
//   const fetchUsers = async () => {
//     const userId = getUserIdFromToken()
//     if (userId) {
//       try {
//         const response = await fetch("http://127.0.0.1:5000/admin/users")
//         const data = await response.json()
//         setUsers(data)
//         setFilteredUsers(data)

//         // Now fetch emails for each user
//         await fetchEmailsForUsers(data)

//       } catch (error) {
//         console.error("Error fetching users:", error)
//       } finally {
//         setLoading(false)
//       }
//     }
//   }

//   // Fetch emails for each user by user_id
//   const fetchEmailsForUsers = async (usersList) => {
//     const updatedUsers = []

//     for (const user of usersList) {
//       try {
//         const response = await fetch(`http://127.0.0.1:5000/admin/user-emails/${user.id}`)
//         const emails = await response.json()

//         // Count total, spam, and ham mails
//         let totalMails = emails.length
//         let spamMails = 0
//         let hamMails = 0

//         emails.forEach((email) => {
//           if (email.label === "phishing") spamMails++
//           else if (email.label === "ham") hamMails++
//         })

//         updatedUsers.push({
//           ...user,
//           totalMails,
//           spamMails,
//           hamMails
//         })
//       } catch (error) {
//         console.error(`Error fetching emails for user ${user.id}:`, error)
//       }
//     }

//     // Update users with mail data
//     setUsers(updatedUsers)
//     setFilteredUsers(updatedUsers)
//   }

//   // Handle search for users
//   const handleUserSearch = (e) => {
//     const term = e.target.value.toLowerCase()
//     setSearchTerm(term)

//     if (!term.trim()) {
//       setFilteredUsers(users)
//       return
//     }

//     const filtered = users.filter(
//       (user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
//     )

//     setFilteredUsers(filtered)
//   }

//   // Fetch data on mount
//   useEffect(() => {
//     checkLoginStatus() // Check if logged in
//     fetchUsers() // Fetch users and email data
//   }, [])

//   return (
//     <div className="container py-8 px-8">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
//         <div>
//           <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//           <p className="text-muted-foreground">Manage users and their email analysis records</p>
//         </div>
//       </div>

//       {/* Users Table */}
//       <div className="flex items-center gap-2 mb-4">
//         <Search className="h-4 w-4 text-muted-foreground" />
//         <Input placeholder="Search users..." value={searchTerm} onChange={handleUserSearch} className="max-w-sm" />
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>User Management</CardTitle>
//           <CardDescription>View and manage all registered users with email statistics</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>User ID</TableHead>
//                 <TableHead>User Email</TableHead>
//                 <TableHead>Total Mails</TableHead>
//                 <TableHead>Spam Mails</TableHead>
//                 <TableHead>Ham Mails</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredUsers.map((user) => (
//                 <TableRow key={user.id}>
//                   <TableCell>{user.id}</TableCell>
//                   <TableCell>{user.email}</TableCell>
//                   <TableCell>{user.totalMails}</TableCell>
//                   <TableCell>{user.spamMails}</TableCell>
//                   <TableCell>{user.hamMails}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }


"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, AlertTriangle, CheckCircle, Info } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

// Utility Functions
const getTokenFromCookies = () => {
  const cookie = document.cookie.split("; ").find((row) => row.startsWith("token="))
  return cookie ? cookie.split("=")[1] : null
}

const getUserIdFromToken = () => {
  const token = getTokenFromCookies()
  if (token) {
    try {
      return JSON.parse(atob(token.split(".")[1])).user_id
    } catch (error) {
      console.error("Error decoding token:", error)
      return null
    }
  }
  return null
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} email
 * @property {string} [name]
 * @property {number} totalMails
 * @property {number} spamMails
 * @property {number} hamMails
 */

/**
 * @typedef {Object} Email
 * @property {string} id
 * @property {string} email_text
 * @property {string} sender
 * @property {string} label
 * @property {string} scanned_at
 */

/**
 * Email List Item Component
 * @param {Object} props
 * @param {Email} props.email
 */
const EmailListItem = ({ email }) => {
  const getVerdictBadge = (verdict) => {
    if (verdict === "phishing") return <Badge variant="destructive" className="ml-2">Phishing</Badge>
    if (verdict === "suspicious") return <Badge className="bg-yellow-500 hover:bg-yellow-600 ml-2">Suspicious</Badge>
    return <Badge className="bg-green-500 hover:bg-green-600 ml-2">Safe</Badge>
  }

  const getVerdictIcon = (verdict) => {
    if (verdict === "phishing") return <AlertTriangle className="h-5 w-5 text-destructive" />
    if (verdict === "suspicious") return <Info className="h-5 w-5 text-yellow-500" />
    return <CheckCircle className="h-5 w-5 text-green-500" />
  }

  return (
    <div className="flex items-start gap-4 p-4 border border-gray-700 rounded-lg hover:bg-gray-900 transition">
      {getVerdictIcon(email.label)}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="font-medium truncate text-white">{email.email_text}</h4>
          {getVerdictBadge(email.label)}
        </div>
        <p className="text-sm text-gray-400 truncate">From: {email.sender}</p>
        <p className="text-xs text-gray-400 mt-1">{formatDate(email.scanned_at)}</p>
      </div>
    </div>
  )
}

/**
 * User Emails Modal Component
 * @param {Object} props
 * @param {string} props.userId
 * @param {boolean} props.isOpen
 * @param {function} props.onClose
 */
const UserEmailsModal = ({ userId, isOpen, onClose }) => {
  const [emails, setEmails] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchEmails = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`http://127.0.0.1:5000/admin/user-emails/${userId}`)
      if (!response.ok) throw new Error("Failed to fetch user emails")
      const data = await response.json()
      setEmails(data)
    } catch (error) {
      setError("Unable to load email history. Please try again.")
    } finally {
      setLoading(false)
    }
  }, [userId])

  useEffect(() => {
    if (isOpen) fetchEmails()
  }, [isOpen, fetchEmails])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] bg-black text-white">
        <DialogHeader>
          <DialogTitle>Email Analysis History</DialogTitle>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto space-y-4 px-4">
          {loading ? (
            <div className="flex justify-center py-8">
              <svg className="animate-spin h-8 w-8 text-gray-400" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
            </div>
          ) : error ? (
            <div className="text-center text-destructive py-8">{error}</div>
          ) : emails.length > 0 ? (
            emails.map((email) => <EmailListItem key={email.id} email={email} />)
          ) : (
            <div className="text-center py-8 text-gray-400">No emails found for this user.</div>
          )}
        </div>
        <DialogClose asChild>
          <Button
            variant="outline"
            className="mt-4 border-gray-600 text-white hover:bg-gray-700"
            aria-label="Close email history modal"
          >
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

/**
 * Pagination Component
 * @param {Object} props
 * @param {number} props.currentPage
 * @param {number} props.totalPages
 * @param {function} props.onPageChange
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="border-gray-600 text-white hover:bg-gray-700"
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
          className={
            page === currentPage
              ? "bg-gray-700 text-white"
              : "border-gray-600 text-white hover:bg-gray-700"
          }
          aria-label={`Go to page ${page}`}
        >
          {page}
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="border-gray-600 text-white hover:bg-gray-700"
        aria-label="Next page"
      >
        Next
      </Button>
    </div>
  )
}

/**
 * Admin Dashboard Page Component
 */
export default function AdminDashboardPage() {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const itemsPerPage = 10
  const router = useRouter()

  const fetchUsers = useCallback(async () => {
    const userId = getUserIdFromToken()
    if (!userId) {
      router.push("/login")
      return
    }

    setLoading(true)
    setError(null)
    try {
      const response = await fetch("http://127.0.0.1:5000/admin/users")
      if (!response.ok) throw new Error("Failed to fetch users")
      const data = await response.json()
      const updatedUsers = await Promise.all(
        data.map(async (user) => {
          try {
            const emailResponse = await fetch(`http://127.0.0.1:5000/admin/user-emails/${user.id}`)
            const emails = emailResponse.ok ? await emailResponse.json() : []
            return {
              ...user,
              totalMails: emails.length,
              spamMails: emails.filter((e) => e.label === "phishing").length,
              hamMails: emails.filter((e) => e.label === "ham").length,
            }
          } catch (error) {
            console.error(`Error fetching emails for user ${user.id}:`, error)
            return { ...user, totalMails: 0, spamMails: 0, hamMails: 0 }
          }
        })
      )
      setUsers(updatedUsers)
      setFilteredUsers(updatedUsers)
    } catch (error) {
      setError("Unable to load users. Please try again.")
    } finally {
      setLoading(false)
    }
  }, [router])

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    setCurrentPage(1)
    setFilteredUsers(
      term
        ? users.filter(
            (user) =>
              user.email.toLowerCase().includes(term) ||
              (user.name && user.name.toLowerCase().includes(term))
          )
        : users
    )
  }

  const handleViewEmails = (userId) => {
    setSelectedUserId(userId)
    setIsModalOpen(true)
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="container py-8 px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage users and their email analysis records</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search users by name or email..."
          value={searchTerm}
          onChange={handleSearch}
          className="max-w-sm"
          aria-label="Search users"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>View and manage all registered users with email statistics</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <svg className="animate-spin h-8 w-8 text-muted-foreground" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
            </div>
          ) : error ? (
            <div className="text-center text-destructive py-8">{error}</div>
          ) : filteredUsers.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">No users found.</div>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User ID</TableHead>
                    <TableHead>User Email</TableHead>
                    <TableHead>Total Mails</TableHead>
                    <TableHead>Spam Mails</TableHead>
                    <TableHead>Ham Mails</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedUsers.map((user) => (
                    <TableRow key={user.id} className="hover:bg-gray-900 transition">
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.totalMails || 0}</TableCell>
                      <TableCell>{user.spamMails || 0}</TableCell>
                      <TableCell>{user.hamMails || 0}</TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewEmails(user.id)}
                          aria-label={`View emails for user ${user.email}`}
                        >
                          View Emails
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </CardContent>
      </Card>

      {selectedUserId && (
        <UserEmailsModal
          userId={selectedUserId}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}