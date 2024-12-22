import { Metadata } from 'next'
import InstructorForm from '../components/InstructorForm'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { BackgroundVisuals } from '../components/BackgroundVisuals'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Essay Grader - Submit Assignment',
  description: 'Submit assignments and get AI-powered grading and feedback',
}

export default function GradePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
      <BackgroundVisuals />
      <div className="relative z-10">
        <header className="container mx-auto px-4 py-8">
          <nav className="flex justify-between items-center">
            <Link href="/">
              <h1 className="text-3xl font-bold text-blue-800">AI Essay Grader</h1>
            </Link>
            <Link href="/">
              <Button variant="outline" className="bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-800 animate-float">Submit Your Assignment</h2>
          <div className="glass-effect p-8 rounded-lg">
            <InstructorForm />
          </div>
        </main>
      </div>
    </div>
  )
}

