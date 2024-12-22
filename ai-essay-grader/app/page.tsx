import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, CheckCircle, ArrowRight } from 'lucide-react'
import { BackgroundVisuals } from './components/BackgroundVisuals'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
      <BackgroundVisuals />
      <div className="relative z-10">
        <header className="container mx-auto px-4 py-8">
          <nav className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-blue-800">AI Essay Grader</h1>
            <Link href="/grade">
              <Button variant="outline" className="bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-300">
                Start Grading
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-5xl font-bold text-blue-900 mb-6 animate-float">Grade Essays with AI Precision</h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Streamline your grading process with our AI-powered essay grading tool. 
            Get consistent, objective feedback in the style of your choice.
          </p>
          <Link href="/grade">
            <Button size="lg" className="text-lg px-8 py-6 bg-pink-500 hover:bg-pink-600 text-white transition-all duration-300 transform hover:scale-105">
              Try It Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </main>
        <section className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-blue-800 mb-12 text-center">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Upload", description: "Submit your assignment instructions and rubric", icon: BookOpen, color: "text-blue-500" },
              { title: "Analyze", description: "Our AI processes the essays based on your criteria", icon: GraduationCap, color: "text-purple-500" },
              { title: "Review", description: "Get detailed feedback and grades in your preferred style", icon: CheckCircle, color: "text-green-500" }
            ].map((step, index) => (
              <div key={index} className="glass-effect p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex justify-center mb-4">
                  {<step.icon className={`w-16 h-16 ${step.color}`} />}
                </div>
                <h4 className="text-2xl font-semibold mb-2 text-blue-700">{step.title}</h4>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

