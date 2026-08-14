import { GoogleGenAI } from "@google/genai";

// API key ko directly code me mat likho.
// .env file me VITE_GEMINI_API_KEY rakho.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const MODEL_NAME = "gemini-3.6-flash";

const ai = new GoogleGenAI({
    apiKey: API_KEY,
});

// Chat session create karna
const chat = ai.chats.create({
    model: MODEL_NAME,

    config: {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
    },
});

// Gemini se response lene ka function
async function runChat(prompt) {
    try {
        if (!prompt || !prompt.trim()) {
            return "";
        }

        const response = await chat.sendMessage({
            message: prompt,
        });

        console.log("Gemini Response:", response.text);

        return response.text;

    } catch (error) {
        console.error("Gemini API Error:", error);

        return "Sorry, I couldn't generate a response. Please try again.";
    }
}

export default runChat;