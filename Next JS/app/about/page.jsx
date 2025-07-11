import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, Lock, Eye, Database } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-8 px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About PhishGuard</h1>
        <p className="text-xl text-muted-foreground">
          Protecting users from phishing attacks with advanced AI technology
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <AlertTriangle className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Phishing Detection</CardTitle>
            <CardDescription>Advanced algorithms to identify phishing attempts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Our system uses machine learning to analyze email content, links, and sender information to identify
              potential phishing attempts with high accuracy.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Threat Intelligence</CardTitle>
            <CardDescription>Real-time updates on emerging threats</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              We continuously monitor and analyze new phishing techniques and campaigns to keep our detection system
              up-to-date with the latest threats.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>User Education</CardTitle>
            <CardDescription>Learn to identify and avoid phishing attempts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Beyond detection, we provide educational resources to help users understand phishing tactics and develop
              better security habits.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-medium mb-2">Data Analysis</h3>
            <p className="text-muted-foreground text-sm">
              Our system analyzes email content, headers, links, and sender information to identify suspicious patterns.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-500" />
            </div>
            <h3 className="text-xl font-medium mb-2">Threat Detection</h3>
            <p className="text-muted-foreground text-sm">
              Machine learning algorithms compare the email against known phishing patterns and suspicious indicators.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-medium mb-2">Risk Assessment</h3>
            <p className="text-muted-foreground text-sm">
              A comprehensive risk score is generated with detailed explanations of detected threats and
              recommendations.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-8 mb-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
          <p className="text-lg text-center mb-6">
            At PhishGuard, we're committed to making the internet safer by protecting users from increasingly
            sophisticated phishing attacks.
          </p>
          <p className="text-center text-muted-foreground">
            Phishing attacks remain one of the most common and effective cyber threats, with millions of attempts daily.
            Our mission is to provide accessible, powerful tools that help individuals and organizations identify and
            avoid these threats, reducing successful attacks and protecting sensitive information.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">What is phishing?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Phishing is a type of cyber attack where attackers disguise themselves as trustworthy entities to trick
                victims into revealing sensitive information such as passwords, credit card numbers, or personal data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">How accurate is the detection?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Our system achieves over 97% accuracy in detecting phishing attempts. We continuously improve our
                algorithms based on new threats and user feedback to maintain high detection rates.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Is my email content secure?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Yes. We prioritize your privacy and security. Email content is encrypted during transmission and
                analysis, and we don't store the full content of emails after analysis is complete.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Can I integrate with my email system?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Yes, we offer API access and integration options for businesses to connect our phishing detection system
                with their existing email infrastructure. Contact us for enterprise solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
