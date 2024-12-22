import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

interface FeedbackDisplayProps {
  feedback: string
  grade: number | null
}

export default function FeedbackDisplay({ feedback, grade }: FeedbackDisplayProps) {
  return (
    <Card className="mt-8 transition-all duration-300 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center space-x-2">
        <CheckCircle className="text-green-500" />
        <CardTitle>AI-Generated Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        {grade !== null && (
          <p className="text-xl font-bold mb-4">Grade: {grade.toFixed(2)}%</p>
        )}
        <p className="whitespace-pre-wrap text-gray-700">{feedback}</p>
      </CardContent>
    </Card>
  )
}

