// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import { Progress } from "@/components/ui/progress"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Loader2, AlertTriangle, CheckCircle, Info, LinkIcon, User, Mail, Shield } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"

// export default function AnalyzePage() {
//   const [emailContent, setEmailContent] = useState("")
//   const [isAnalyzing, setIsAnalyzing] = useState(false)
//   const [result, setResult] = useState(null)

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!emailContent.trim()) return

//     setIsAnalyzing(true)

//     // Simulate API call for analysis
//     setTimeout(() => {
//       // Mock result - in a real app, this would come from your backend
//       const mockResult = {
//         score: 85, // 0-100, higher means more likely to be phishing
//         verdict: "High Risk",
//         confidence: 92,
//         indicators: [
//           { type: "Suspicious Link", description: "Contains URL with misleading domain", severity: "high" },
//           {
//             type: "Spoofed Sender",
//             description: "Email claims to be from PayPal but sent from different domain",
//             severity: "high",
//           },
//           { type: "Urgency", description: "Creates false sense of urgency to act quickly", severity: "medium" },
//           { type: "Grammar", description: "Contains multiple grammatical errors", severity: "low" },
//         ],
//         details: {
//           links: [
//             {
//               url: "http://paypa1.com/secure",
//               status: "malicious",
//               description: "Typosquatting domain (paypa1 instead of paypal)",
//             },
//             {
//               url: "http://tracking.example.com/r?id=123",
//               status: "suspicious",
//               description: "Redirect link with tracking parameters",
//             },
//           ],
//           sender: {
//             claimed: "service@paypal.com",
//             actual: "noreply@mail-services.net",
//             mismatch: true,
//           },
//           keywords: ["urgent", "account suspended", "verify immediately", "unusual activity"],
//         },
//       }

//       setResult(mockResult)
//       setIsAnalyzing(false)
//     }, 2500)
//   }

//   const getSeverityColor = (severity) => {
//     switch (severity) {
//       case "high":
//         return "bg-destructive text-destructive-foreground hover:bg-destructive/80"
//       case "medium":
//         return "bg-yellow-500 text-white hover:bg-yellow-600"
//       case "low":
//         return "bg-blue-500 text-white hover:bg-blue-600"
//       default:
//         return "bg-primary"
//     }
//   }

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "malicious":
//         return "text-destructive"
//       case "suspicious":
//         return "text-yellow-500"
//       case "safe":
//         return "text-green-500"
//       default:
//         return "text-muted-foreground"
//     }
//   }

//   const getScoreColor = (score) => {
//     if (score >= 75) return "bg-destructive"
//     if (score >= 40) return "bg-yellow-500"
//     return "bg-green-500"
//   }

//   return (
//     <div className="container py-8 max-w-4xl m-auto">
//       <div className="mb-8 text-center">
//         <h1 className="text-3xl font-bold mb-2">Email Phishing Analyzer</h1>
//         <p className="text-muted-foreground">
//           Paste the suspicious email content below to analyze it for phishing attempts
//         </p>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Analyze Email Content</CardTitle>
//           <CardDescription>Copy and paste the full email body text to check for phishing indicators</CardDescription>
//         </CardHeader>
//         <form onSubmit={handleSubmit}>
//           <CardContent>
//             <Textarea
//               placeholder="Paste email content here..."
//               className="min-h-[200px] font-mono text-sm"
//               value={emailContent}
//               onChange={(e) => setEmailContent(e.target.value)}
//               disabled={isAnalyzing}
//             />
//           </CardContent>
//           <CardFooter>
//             <Button type="submit" disabled={isAnalyzing || !emailContent.trim()} className="w-full">
//               {isAnalyzing ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Analyzing...
//                 </>
//               ) : (
//                 "Analyze Email"
//               )}
//             </Button>
//           </CardFooter>
//         </form>
//       </Card>

//       {isAnalyzing && (
//         <Card className="mt-8">
//           <CardContent className="pt-6">
//             <div className="space-y-4 text-center">
//               <Loader2 className="h-8 w-8 animate-spin mx-auto" />
//               <div>
//                 <p className="font-medium">Analyzing email content...</p>
//                 <p className="text-sm text-muted-foreground">Checking for phishing indicators</p>
//               </div>
//               <Progress value={45} className="h-2" />
//             </div>
//           </CardContent>
//         </Card>
//       )}

//       {result && (
//         <div className="mt-8 space-y-6">
//           <Alert variant={result.score >= 75 ? "destructive" : result.score >= 40 ? "default" : "success"}>
//             {result.score >= 75 ? (
//               <AlertTriangle className="h-5 w-5" />
//             ) : result.score >= 40 ? (
//               <Info className="h-5 w-5" />
//             ) : (
//               <CheckCircle className="h-5 w-5" />
//             )}
//             <AlertTitle>
//               {result.score >= 75
//                 ? "High Risk - Likely Phishing"
//                 : result.score >= 40
//                   ? "Medium Risk - Suspicious"
//                   : "Low Risk - Probably Safe"}
//             </AlertTitle>
//             <AlertDescription>
//               Our analysis indicates this email is {result.verdict.toLowerCase()} with {result.confidence}% confidence.
//             </AlertDescription>
//           </Alert>

//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center">
//                 <Shield className="mr-2 h-5 w-5" />
//                 Analysis Results
//               </CardTitle>
//               <CardDescription>Detailed breakdown of phishing indicators found in the email</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="mb-6">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm font-medium">Risk Score</span>
//                   <span className="text-sm font-bold">{result.score}/100</span>
//                 </div>
//                 <Progress value={result.score} className={`h-2 ${getScoreColor(result.score)}`} />
//               </div>

//               <Tabs defaultValue="indicators">
//                 <TabsList className="grid w-full grid-cols-3">
//                   <TabsTrigger value="indicators">Indicators</TabsTrigger>
//                   <TabsTrigger value="links">Links</TabsTrigger>
//                   <TabsTrigger value="sender">Sender</TabsTrigger>
//                 </TabsList>

//                 <TabsContent value="indicators" className="space-y-4 pt-4">
//                   {result.indicators.map((indicator, index) => (
//                     <div key={index} className="flex items-start gap-4 p-3 border rounded-lg">
//                       <Badge className={getSeverityColor(indicator.severity)}>{indicator.severity}</Badge>
//                       <div className="flex-1">
//                         <h4 className="font-medium">{indicator.type}</h4>
//                         <p className="text-sm text-muted-foreground">{indicator.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </TabsContent>

//                 <TabsContent value="links" className="space-y-4 pt-4">
//                   {result.details.links.map((link, index) => (
//                     <div key={index} className="flex items-start gap-4 p-3 border rounded-lg">
//                       <LinkIcon className={`h-5 w-5 mt-0.5 ${getStatusColor(link.status)}`} />
//                       <div className="flex-1">
//                         <h4 className="font-medium break-all">{link.url}</h4>
//                         <p className="text-sm text-muted-foreground">{link.description}</p>
//                         <Badge
//                           className={`mt-2 ${
//                             link.status === "malicious"
//                               ? "bg-destructive text-destructive-foreground"
//                               : link.status === "suspicious"
//                                 ? "bg-yellow-500 text-white"
//                                 : "bg-green-500 text-white"
//                           }`}
//                         >
//                           {link.status}
//                         </Badge>
//                       </div>
//                     </div>
//                   ))}
//                 </TabsContent>

//                 <TabsContent value="sender" className="pt-4">
//                   <div className="space-y-4">
//                     <div className="p-3 border rounded-lg">
//                       <div className="flex items-center gap-2 mb-2">
//                         <Mail className="h-5 w-5 text-blue-500" />
//                         <h4 className="font-medium">Claimed Sender</h4>
//                       </div>
//                       <p className="text-sm break-all">{result.details.sender.claimed}</p>
//                     </div>

//                     <div className="p-3 border rounded-lg">
//                       <div className="flex items-center gap-2 mb-2">
//                         <User className="h-5 w-5 text-blue-500" />
//                         <h4 className="font-medium">Actual Sender</h4>
//                       </div>
//                       <p className="text-sm break-all">{result.details.sender.actual}</p>
//                     </div>

//                     {result.details.sender.mismatch && (
//                       <Alert variant="destructive">
//                         <AlertTriangle className="h-4 w-4" />
//                         <AlertTitle>Sender Mismatch Detected</AlertTitle>
//                         <AlertDescription>
//                           The actual sender email address doesn't match the claimed sender, which is a common phishing
//                           tactic.
//                         </AlertDescription>
//                       </Alert>
//                     )}
//                   </div>
//                 </TabsContent>
//               </Tabs>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Security Recommendations</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="flex items-start gap-4">
//                 <div className="bg-destructive/10 p-2 rounded-full">
//                   <AlertTriangle className="h-5 w-5 text-destructive" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Do Not Click Links</h4>
//                   <p className="text-sm text-muted-foreground">
//                     Never click on links in suspicious emails. If you need to visit the website, manually type the
//                     address in your browser.
//                   </p>
//                 </div>
//               </div>

//               <Separator />

//               <div className="flex items-start gap-4">
//                 <div className="bg-blue-500/10 p-2 rounded-full">
//                   <Info className="h-5 w-5 text-blue-500" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Verify the Sender</h4>
//                   <p className="text-sm text-muted-foreground">
//                     Contact the organization directly using their official contact information, not the details provided
//                     in the email.
//                   </p>
//                 </div>
//               </div>

//               <Separator />

//               <div className="flex items-start gap-4">
//                 <div className="bg-green-500/10 p-2 rounded-full">
//                   <Shield className="h-5 w-5 text-green-500" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Report Phishing</h4>
//                   <p className="text-sm text-muted-foreground">
//                     Forward suspicious emails to your IT department or to the organization being impersonated.
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       )}
//     </div>
//   )
// }

// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import { Progress } from "@/components/ui/progress"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Loader2, AlertTriangle, CheckCircle, Info, LinkIcon, User, Mail, Shield } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"

// export default function AnalyzePage() {
//   const [emailContent, setEmailContent] = useState("")
//   const [isAnalyzing, setIsAnalyzing] = useState(false)
//   const [result, setResult] = useState(null)
//   const [error, setError] = useState(null)

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!emailContent.trim()) return

//     setIsAnalyzing(true)
//     setError(null)

//     try {
//       // Make the real API request to your backend (replace with the correct endpoint)
//       const response = await fetch("http://localhost:5000/predict", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email_text: emailContent,
//           user_id: 13, // Replace with actual user ID if necessary
//           threshold: 0.75, // Optional threshold value
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("Failed to analyze the email")
//       }

//       const data = await response.json()
//       setResult(data)  // Set the API response data
//     } catch (error) {
//       setError(error.message)  // Handle error
//     } finally {
//       setIsAnalyzing(false)  // Stop loading state
//     }
//   }

//   // Helper functions to format severity, status, and score colors
//   const getSeverityColor = (severity) => {
//     switch (severity) {
//       case "high":
//         return "bg-destructive text-destructive-foreground hover:bg-destructive/80"
//       case "medium":
//         return "bg-yellow-500 text-white hover:bg-yellow-600"
//       case "low":
//         return "bg-blue-500 text-white hover:bg-blue-600"
//       default:
//         return "bg-primary"
//     }
//   }

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "malicious":
//         return "text-destructive"
//       case "suspicious":
//         return "text-yellow-500"
//       case "safe":
//         return "text-green-500"
//       default:
//         return "text-muted-foreground"
//     }
//   }

//   const getScoreColor = (score) => {
//     if (score >= 0.75) return "bg-destructive"
//     if (score >= 0.40) return "bg-yellow-500"
//     return "bg-green-500"
//   }

//   return (
//     <div className="container py-8 max-w-4xl m-auto">
//       <div className="mb-8 text-center">
//         <h1 className="text-3xl font-bold mb-2">Email Phishing Analyzer</h1>
//         <p className="text-muted-foreground">
//           Paste the suspicious email content below to analyze it for phishing attempts
//         </p>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Analyze Email Content</CardTitle>
//           <CardDescription>Copy and paste the full email body text to check for phishing indicators</CardDescription>
//         </CardHeader>
//         <form onSubmit={handleSubmit}>
//           <CardContent>
//             <Textarea
//               placeholder="Paste email content here..."
//               className="min-h-[200px] font-mono text-sm"
//               value={emailContent}
//               onChange={(e) => setEmailContent(e.target.value)}
//               disabled={isAnalyzing}
//             />
//           </CardContent>
//           <CardFooter>
//             <Button type="submit" disabled={isAnalyzing || !emailContent.trim()} className="w-full">
//               {isAnalyzing ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Analyzing...
//                 </>
//               ) : (
//                 "Analyze Email"
//               )}
//             </Button>
//           </CardFooter>
//         </form>
//       </Card>

//       {isAnalyzing && (
//         <Card className="mt-8">
//           <CardContent className="pt-6">
//             <div className="space-y-4 text-center">
//               <Loader2 className="h-8 w-8 animate-spin mx-auto" />
//               <div>
//                 <p className="font-medium">Analyzing email content...</p>
//                 <p className="text-sm text-muted-foreground">Checking for phishing indicators</p>
//               </div>
//               <Progress value={45} className="h-2" />
//             </div>
//           </CardContent>
//         </Card>
//       )}

//       {error && <div className="mt-4 text-red-500 text-center">{error}</div>}

//       {result && (
//         <div className="mt-8 space-y-6">
//           <Alert variant={result.score >= 0.75 ? "destructive" : result.score >= 0.40 ? "default" : "success"}>
//             {result.score >= 0.75 ? (
//               <AlertTriangle className="h-5 w-5" />
//             ) : result.score >= 0.40 ? (
//               <Info className="h-5 w-5" />
//             ) : (
//               <CheckCircle className="h-5 w-5" />
//             )}
//             <AlertTitle>
//               {result.score >= 0.75
//                 ? "High Risk - Likely Phishing"
//                 : result.score >= 0.40
//                 ? "Medium Risk - Suspicious"
//                 : "Low Risk - Probably Safe"}
//             </AlertTitle>
//             <AlertDescription>
//               Our analysis indicates this email is {result.label.toLowerCase()} with {result.risk} risk.
//             </AlertDescription>
//           </Alert>

//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center">
//                 <Shield className="mr-2 h-5 w-5" />
//                 Analysis Results
//               </CardTitle>
//               <CardDescription>Detailed breakdown of phishing indicators found in the email</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="mb-6">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm font-medium">Risk Score</span>
//                   <span className="text-sm font-bold">{result.score}/100</span>
//                 </div>
//                 <Progress value={result.score} className={`h-2 ${getScoreColor(result.score)}`} />
//               </div>
//               {/* Display Indicators */}
//               {/* {result.indicators.map((indicator, index) => (
//                 <div key={index} className="flex items-start gap-4 p-3 border rounded-lg">
//                   <Badge className={getSeverityColor(indicator.severity)}>{indicator.severity}</Badge>
//                   <div className="flex-1">
//                     <h4 className="font-medium">{indicator.type}</h4>
//                     <p className="text-sm text-muted-foreground">{indicator.description}</p>
//                   </div>
//                 </div>
//               ))} */}
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Security Recommendations</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {/* Security Recommendations */}
//               <div className="flex items-start gap-4">
//                 <div className="bg-destructive/10 p-2 rounded-full">
//                   <AlertTriangle className="h-5 w-5 text-destructive" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Do Not Click Links</h4>
//                   <p className="text-sm text-muted-foreground">
//                     Never click on links in suspicious emails. If you need to visit the website, manually type the
//                     address in your browser.
//                   </p>
//                 </div>
//               </div>
//               <Separator />
//               <div className="flex items-start gap-4">
//                 <div className="bg-blue-500/10 p-2 rounded-full">
//                   <Info className="h-5 w-5 text-blue-500" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Verify the Sender</h4>
//                   <p className="text-sm text-muted-foreground">
//                     Contact the organization directly using their official contact information, not the details provided
//                     in the email.
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       )}
//     </div>
//   )
// }

// ==============================================

// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import { Progress } from "@/components/ui/progress"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Loader2, AlertTriangle, CheckCircle, Info, LinkIcon, User, Mail, Shield } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"

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
//     const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT token
//     return decoded.user_id; // Assuming the user_id is in the token
//   }
//   return null; // Return null if token is not available
// }

// export default function AnalyzePage() {
//   const [emailContent, setEmailContent] = useState("")
//   const [isAnalyzing, setIsAnalyzing] = useState(false)
//   const [result, setResult] = useState(null)
//   const [error, setError] = useState(null)

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!emailContent.trim()) return

//     setIsAnalyzing(true)
//     setError(null)

//     const userId = getUserIdFromToken(); // Get user_id from the token

//     if (!userId) {
//       setError("User is not logged in.")
//       setIsAnalyzing(false)
//       return
//     }

//     try {
//       // Make the real API request to your backend (replace with the correct endpoint)
//       const response = await fetch("http://localhost:5000/predict", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email_text: emailContent,
//           user_id: userId, // Pass dynamic user_id here
//           threshold: 0.75, // Optional threshold value
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("Failed to analyze the email")
//       }

//       const data = await response.json()
//       setResult(data)  // Set the API response data
//     } catch (error) {
//       setError(error.message)  // Handle error
//     } finally {
//       setIsAnalyzing(false)  // Stop loading state
//     }
//   }

//   // Helper functions to format severity, status, and score colors
//   const getSeverityColor = (severity) => {
//     switch (severity) {
//       case "high":
//         return "bg-destructive text-destructive-foreground hover:bg-destructive/80"
//       case "medium":
//         return "bg-yellow-500 text-white hover:bg-yellow-600"
//       case "low":
//         return "bg-blue-500 text-white hover:bg-blue-600"
//       default:
//         return "bg-primary"
//     }
//   }

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "malicious":
//         return "text-destructive"
//       case "suspicious":
//         return "text-yellow-500"
//       case "safe":
//         return "text-green-500"
//       default:
//         return "text-muted-foreground"
//     }
//   }

//   const getScoreColor = (score) => {
//     if (score >= 0.75) return "bg-destructive"
//     if (score >= 0.40) return "bg-yellow-500"
//     return "bg-green-500"
//   }

//   return (
//     <div className="container py-8 max-w-4xl m-auto">
//       <div className="mb-8 text-center">
//         <h1 className="text-3xl font-bold mb-2">Email Phishing Analyzer</h1>
//         <p className="text-muted-foreground">
//           Paste the suspicious email content below to analyze it for phishing attempts
//         </p>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Analyze Email Content</CardTitle>
//           <CardDescription>Copy and paste the full email body text to check for phishing indicators</CardDescription>
//         </CardHeader>
//         <form onSubmit={handleSubmit}>
//           <CardContent>
//             <Textarea
//               placeholder="Paste email content here..."
//               className="min-h-[200px] font-mono text-sm"
//               value={emailContent}
//               onChange={(e) => setEmailContent(e.target.value)}
//               disabled={isAnalyzing}
//             />
//           </CardContent>
//           <CardFooter>
//             <Button type="submit" disabled={isAnalyzing || !emailContent.trim()} className="w-full">
//               {isAnalyzing ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Analyzing...
//                 </>
//               ) : (
//                 "Analyze Email"
//               )}
//             </Button>
//           </CardFooter>
//         </form>
//       </Card>

//       {isAnalyzing && (
//         <Card className="mt-8">
//           <CardContent className="pt-6">
//             <div className="space-y-4 text-center">
//               <Loader2 className="h-8 w-8 animate-spin mx-auto" />
//               <div>
//                 <p className="font-medium">Analyzing email content...</p>
//                 <p className="text-sm text-muted-foreground">Checking for phishing indicators</p>
//               </div>
//               <Progress value={45} className="h-2" />
//             </div>
//           </CardContent>
//         </Card>
//       )}

//       {error && <div className="mt-4 text-red-500 text-center">{error}</div>}

//       {result && (
//         <div className="mt-8 space-y-6">
//           <Alert variant={result.score >= 0.75 ? "destructive" : result.score >= 0.40 ? "default" : "success"}>
//             {result.score >= 0.75 ? (
//               <AlertTriangle className="h-5 w-5" />
//             ) : result.score >= 0.40 ? (
//               <Info className="h-5 w-5" />
//             ) : (
//               <CheckCircle className="h-5 w-5" />
//             )}
//             <AlertTitle>
//               {result.score >= 0.75
//                 ? "High Risk - Likely Phishing"
//                 : result.score >= 0.40
//                 ? "Medium Risk - Suspicious"
//                 : "Low Risk - Probably Safe"}
//             </AlertTitle>
//             <AlertDescription>
//               Our analysis indicates this email is {result.label.toLowerCase()} with {result.risk} risk.
//             </AlertDescription>
//           </Alert>

//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center">
//                 <Shield className="mr-2 h-5 w-5" />
//                 Analysis Results
//               </CardTitle>
//               <CardDescription>Detailed breakdown of phishing indicators found in the email</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="mb-6">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm font-medium">Risk Score</span>
//                   <span className="text-sm font-bold">{result.score}/100</span>
//                 </div>
//                 <Progress value={result.score} className={`h-2 ${getScoreColor(result.score)}`} />
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Security Recommendations</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="flex items-start gap-4">
//                 <div className="bg-destructive/10 p-2 rounded-full">
//                   <AlertTriangle className="h-5 w-5 text-destructive" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Do Not Click Links</h4>
//                   <p className="text-sm text-muted-foreground">
//                     Never click on links in suspicious emails. If you need to visit the website, manually type the
//                     address in your browser.
//                   </p>
//                 </div>
//               </div>
//               <Separator />
//               <div className="flex items-start gap-4">
//                 <div className="bg-blue-500/10 p-2 rounded-full">
//                   <Info className="h-5 w-5 text-blue-500" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Verify the Sender</h4>
//                   <p className="text-sm text-muted-foreground">
//                     Contact the organization directly using their official contact information, not the details provided
//                     in the email.
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       )}
//     </div>
//   )
// }



"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation" // Use useRouter from 'next/navigation' instead of 'next/router' to avoid the error
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, AlertTriangle, CheckCircle, Info, LinkIcon, User, Mail, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Function to get token from cookies
const getTokenFromCookies = () => {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('token='));
  return cookie ? cookie.split('=')[1] : null;
}

// Function to get User ID from token
const getUserIdFromToken = () => {
  const token = getTokenFromCookies();
  if (token) {
    const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT token
    return decoded.user_id; // Assuming the user_id is in the token
  }
  return null; // Return null if token is not available
}

export default function AnalyzePage() {
  const [emailContent, setEmailContent] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const router = useRouter()  // Get router to redirect if user is not logged in

  // useEffect to check for the token on page load and redirect to login if not logged in
  useEffect(() => {
    const userId = getUserIdFromToken();
    if (!userId) {
      // If the user is not logged in, redirect to login page
      router.push("/login");
    }
  }, [router])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!emailContent.trim()) return

    setIsAnalyzing(true)
    setError(null)

    const userId = getUserIdFromToken(); // Get user_id from the token

    if (!userId) {
      setError("User is not logged in.")
      setIsAnalyzing(false)
      return
    }

    try {
      // Make the real API request to your backend (replace with the correct endpoint)
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_text: emailContent,
          user_id: userId, // Pass dynamic user_id here
          threshold: 0.75, // Optional threshold value
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to analyze the email")
      }

      const data = await response.json()
      setResult(data)  // Set the API response data
    } catch (error) {
      setError(error.message)  // Handle error
    } finally {
      setIsAnalyzing(false)  // Stop loading state
    }
  }

  // Helper functions to format severity, status, and score colors
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "bg-destructive text-destructive-foreground hover:bg-destructive/80"
      case "medium":
        return "bg-yellow-500 text-white hover:bg-yellow-600"
      case "low":
        return "bg-blue-500 text-white hover:bg-blue-600"
      default:
        return "bg-primary"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "malicious":
        return "text-destructive"
      case "suspicious":
        return "text-yellow-500"
      case "safe":
        return "text-green-500"
      default:
        return "text-muted-foreground"
    }
  }

  const getScoreColor = (score) => {
    if (score >= 0.75) return "bg-destructive"
    if (score >= 0.40) return "bg-yellow-500"
    return "bg-green-500"
  }

  return (
    <div className="container py-8 max-w-4xl m-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Email Phishing Analyzer</h1>
        <p className="text-muted-foreground">
          Paste the suspicious email content below to analyze it for phishing attempts
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Analyze Email Content</CardTitle>
          <CardDescription>Copy and paste the full email body text to check for phishing indicators</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Textarea
              placeholder="Paste email content here..."
              className="min-h-[200px] font-mono text-sm"
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              disabled={isAnalyzing}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isAnalyzing || !emailContent.trim()} className="w-full">
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze Email"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {isAnalyzing && (
        <Card className="mt-8">
          <CardContent className="pt-6">
            <div className="space-y-4 text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto" />
              <div>
                <p className="font-medium">Analyzing email content...</p>
                <p className="text-sm text-muted-foreground">Checking for phishing indicators</p>
              </div>
              <Progress value={45} className="h-2" />
            </div>
          </CardContent>
        </Card>
      )}

      {error && <div className="mt-4 text-red-500 text-center">{error}</div>}

      {result && (
        <div className="mt-8 space-y-6">
          <Alert variant={result.score >= 0.75 ? "destructive" : result.score >= 0.40 ? "default" : "success"}>
            {result.score >= 0.75 ? (
              <AlertTriangle className="h-5 w-5" />
            ) : result.score >= 0.40 ? (
              <Info className="h-5 w-5" />
            ) : (
              <CheckCircle className="h-5 w-5" />
            )}
            <AlertTitle>
              {result.score >= 0.75
                ? "High Risk - Likely Phishing"
                : result.score >= 0.40
                ? "Medium Risk - Suspicious"
                : "Low Risk - Probably Safe"}
            </AlertTitle>
            <AlertDescription>
              Our analysis indicates this email is {result.label.toLowerCase()} with {result.risk} risk.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Analysis Results
              </CardTitle>
              <CardDescription>Detailed breakdown of phishing indicators found in the email</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Risk Score</span>
                  <span className="text-sm font-bold">{result.score}/100</span>
                </div>
                <Progress value={result.score} className={`h-2 ${getScoreColor(result.score)}`} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-destructive/10 p-2 rounded-full">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium">Do Not Click Links</h4>
                  <p className="text-sm text-muted-foreground">
                    Never click on links in suspicious emails. If you need to visit the website, manually type the
                    address in your browser.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-2 rounded-full">
                  <Info className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-medium">Verify the Sender</h4>
                  <p className="text-sm text-muted-foreground">
                    Contact the organization directly using their official contact information, not the details provided
                    in the email.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
