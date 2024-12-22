import { HfInference } from '@huggingface/inference'

// Initialize the Hugging Face client
const hf = new HfInference(process.env.HUGGINGFACE_API_KEY)

export async function generateFeedback(essayText: string, rubricText: string, feedbackSamplesText: string): Promise<string> {
  try {
    const response = await hf.textGeneration({
      model: 'meta-llama/Llama-2-70b-chat-hf',
      inputs: `You are an expert essay grader and instructor. Grade the following essay based on the provided rubric and give feedback in the style of the sample feedback.

Assignment Rubric:
${rubricText}

Instructor Feedback Examples:
${feedbackSamplesText}

Student Essay:
${essayText}

Provide a grade (in percentage) and detailed feedback in the instructor's style.`,
      parameters: {
        max_new_tokens: 500,
        temperature: 0.7,
        top_p: 0.95,
        repetition_penalty: 1.15,
      },
    })

    return response.generated_text || "No feedback generated.";
  } catch (error) {
    console.error('Error in generateFeedback:', error);
    throw new Error('Failed to generate feedback');
  }
}

export function gradeEssay(essay: string, rubric: string): number {
  // This is a placeholder implementation. In a real scenario, you'd want to use
  // the Llama 2 model to analyze the essay based on the rubric.
  const contentWeight = 0.4;
  const grammarWeight = 0.3;
  const structureWeight = 0.3;

  // These scores should ideally come from Llama 2 analysis
  const contentScore = 0.85;
  const grammarScore = 0.9;
  const structureScore = 0.8;

  const totalScore = (contentScore * contentWeight) + (grammarScore * grammarWeight) + (structureScore * structureWeight);
  return totalScore * 100; // Convert to percentage
}

