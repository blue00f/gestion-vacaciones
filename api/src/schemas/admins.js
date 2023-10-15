import z from 'zod'

const employeeSchema = z.object({
  usuario: z.string().min(10).max(50).nonempty(),
  clave: z.record(z.string().min(1), z.number().min(1)),
  nombre: z.string().min(4).max(50).nonempty(),
  apellido: z.string().min(4).max(50).nonempty(),
  correo: z.email().max(50).nonempty(),
})

export function validateAdmin(input) {
  return employeeSchema.safeParse(input)
}

export function validatePartialAdmin(input) {
  return employeeSchema.partial().safeParse(input)
}
