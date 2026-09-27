import { Response, Message } from './types';
import { responses } from './responses';

export const generateResponse = (input: string): Response => {
  const lowercaseInput = input.toLowerCase();
  
  if (lowercaseInput.includes('anxious') || lowercaseInput.includes('anxiety')) {
    return responses.anxiety;
  }
  if (lowercaseInput.includes('depress') || lowercaseInput.includes('sad')) {
    return responses.depression;
  }
  if (lowercaseInput.includes('stress') || lowercaseInput.includes('overwhelm')) {
    return responses.stress;
  }
  
  return responses.default;
};

export const generateId = () => Math.random().toString(36).substring(7);