import z from 'zod'
import dotenv from 'dotenv';

// Carregar variáveis do arquivo .env
dotenv.config();

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
