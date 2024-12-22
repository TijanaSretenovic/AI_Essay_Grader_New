import { NextRequest, NextResponse } from 'next/server';
import { generateFeedback, gradeEssay } from '@/lib/ai-grading';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const instructions = formData.get('instructions') as File;
  const sampleFeedback = formData.get('sampleFeedback') as string;
  const essay = formData.get('essay') as File;

  try {
    const instructionsText = await instructions.text();
    const essayText = await essay.text();

    const feedback = await generateFeedback(essayText, instructionsText, sampleFeedback);
    const grade = gradeEssay(essayText, instructionsText);

    return NextResponse.json({ feedback, grade });
  } catch (error) {
    console.error('Error in grading:', error);
    return NextResponse.json({ error: 'An error occurred during grading' }, { status: 500 });
  }
}

