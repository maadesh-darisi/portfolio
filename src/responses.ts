export const responses: Record<string, Response> = {
  anxiety: {
    message: "I understand you're feeling anxious. Remember that anxiety is a normal human experience, but there are ways to manage it. Try taking some deep breaths with me.",
    resources: [
      "Practice mindful breathing exercises",
      "Consider talking to a mental health professional",
      "Try progressive muscle relaxation"
    ]
  },
  depression: {
    message: "I hear that you're going through a difficult time. Depression can make everything feel overwhelming, but you're not alone in this journey.",
    resources: [
      "Reach out to a trusted friend or family member",
      "Consider professional help - it's a sign of strength",
      "Maintain a regular sleep schedule"
    ]
  },
  stress: {
    message: "It sounds like you're under a lot of pressure. Remember that it's okay to take breaks and prioritize your well-being.",
    resources: [
      "Take short breaks throughout the day",
      "Practice self-care activities",
      "Try to maintain a balanced routine"
    ]
  },
  default: {
    message: "I'm here to listen and support you. While I can offer a friendly ear, please remember that I'm not a substitute for professional help. Would you like to tell me more about what's on your mind?",
    resources: [
      "Consider talking to a mental health professional",
      "Connect with supportive friends or family",
      "Practice self-care regularly"
    ]
  }
};