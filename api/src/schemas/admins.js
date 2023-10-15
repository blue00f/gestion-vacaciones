import z from 'zod'

const employeeSchema = z.object({
  usuario: z.string().min(10).max(50),
  clave: z.record(z.string().min(1)),
  nombre: z.string().min(4).max(50),
  apellido: z.string().min(4).max(50),
  correo: z.email().max(50),
})

export function validateAdmin(input) {
  return employeeSchema.safeParse(input)
}

export function validatePartialAdmin(input) {
  return employeeSchema.partial().safeParse(input)
}
