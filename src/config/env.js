import dotenv from "dotenv"
dotenv.config()

export const env = {
    PORT: process.env.PORT || 3000,
    GEMINI_KEY: process.env.GEMINI_KEY,
    GROQ_API_KEY: process.env.GROQ_API_KEY,
    JIO_SAAVN_API: process.env.JIO_SAAVN_API
}