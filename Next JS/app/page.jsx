import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Mail, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] px-8">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 pb-16">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Protect Yourself From Phishing Attacks
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our advanced AI system analyzes emails to detect phishing attempts and keep you safe from cyber
                  threats.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/analyze">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Analyze Email <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                {/* <Link href="/register">
                  <Button variant="outline">Create Account</Button>
                </Link> */}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-full opacity-20 blur-3xl"></div>
                <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full flex items-center justify-center">
                  <Shield className="h-32 w-32 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our system uses advanced machine learning to identify phishing attempts in real-time
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background/50">
              <Mail className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-bold">Submit Email</h3>
              <p className="text-muted-foreground text-center">Paste the suspicious email content into our analyzer</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background/50">
              <AlertTriangle className="h-12 w-12 text-yellow-500" />
              <h3 className="text-xl font-bold">Analyze Content</h3>
              <p className="text-muted-foreground text-center">
                Our AI scans for suspicious links, spoofed domains, and social engineering tactics
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background/50">
              <CheckCircle className="h-12 w-12 text-green-500" />
              <h3 className="text-xl font-bold">Get Results</h3>
              <p className="text-muted-foreground text-center">
                Receive a detailed report with risk assessment and security recommendations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
