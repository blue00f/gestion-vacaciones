import z from 'zod'

const adminSchema = z.object({
  usuario: z.string().min(10).max(50),
  clave: z.record(z.string().min(1)),
  nombre: z.string().min(4).max(50),
  apellido: z.string().min(4).max(50),
  correo: z.string().email().max(50),
})

export function validateAdmin(input) {
  return adminSchema.safeParse(input)
}

export function validatePartialAdmin(input) {
  return adminSchema.partial().safeParse(input)
}
