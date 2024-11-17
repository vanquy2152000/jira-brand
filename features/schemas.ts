import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Mininum 8 characters"),
})

export const registerSchema = z.object({
    name: z.string().trim().min(8, "Required"),
    email: z.string().email(),
    password: z.string().min(8, "Mininum 8 characters"),
})