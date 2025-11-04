import z from 'zod'

export const newSessionSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1)
})

export type NewSessionValues = z.infer<typeof newSessionSchema>
