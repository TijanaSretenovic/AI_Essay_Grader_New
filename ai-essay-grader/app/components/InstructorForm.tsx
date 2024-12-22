'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import FeedbackDisplay from './FeedbackDisplay'
import { Upload, FileText, Send } from 'lucide-react'

export default function InstructorForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [grade, setGrade] = useState<number | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setFeedback('')
    setGrade(null)

    const formData = new FormData(event.currentTarget)
    try {
      const response = await fetch('/api/grade', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Grading failed')
      }

      const data = await response.json()
      setFeedback(data.feedback)
      setGrade(data.grade)
    } catch (error) {
      console.error('Error during grading:', error)
      setFeedback('An error occurred during grading. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-blue-800">Submit Assignment for Grading</CardTitle>
        <CardDescription>Enter the assignment details and student essay for AI-powered grading.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <div className="grid w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="instructions" className="text-blue-700">Assignment Instructions</Label>
              <div className="flex items-center space-x-2">
                <Input id="instructions" name="instructions" type="file" accept=".txt,.pdf,.doc,.docx" required className="flex-grow" />
                <Upload className="text-blue-500" />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="sampleFeedback" className="text-blue-700">Sample Feedback</Label>
              <div className="flex items-center space-x-2">
                <Textarea id="sampleFeedback" name="sampleFeedback" placeholder="Provide a sample of your feedback style..." required className="flex-grow" />
                <FileText className="text-blue-500" />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="essay" className="text-blue-700">Student Essay</Label>
              <div className="flex items-center space-x-2">
                <Input id="essay" name="essay" type="file" accept=".txt,.pdf,.doc,.docx" required className="flex-grow" />
                <Upload className="text-blue-500" />
              </div>
            </div>
          </div>
          <CardFooter className="flex justify-between mt-4 px-0">
            <Button type="submit" disabled={isLoading} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
              {isLoading ? "Grading..." : "Submit for Grading"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </form>
      </CardContent>
      {(feedback || grade !== null) && <FeedbackDisplay feedback={feedback} grade={grade} />}
    </Card>
  )
}

