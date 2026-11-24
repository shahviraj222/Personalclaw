import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export function getAgentModel() {
  if (!process.env.OPENROUTER_API_KEY?.trim())
    throw new Error("OPENROUTER_API_KEY is missing from .env");
  const provider = createOpenRouter({ apiKey: process.env.OPENROUTER_API_KEY });

  const modelId = process.env.DEFAULT_MODEL;
  if (!modelId) {
    throw new Error("DEFAULT_MODEL environment variable is required");
  }

  return provider(modelId);
}
