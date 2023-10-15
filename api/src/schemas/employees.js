import z from 'zod'

const employeeSchema = z.object({
  nombreUsuario: z.string().min(10).max(50),
  clave: z.record(z.string().min(1)),
  nombre: z.string().min(4).max(50),
  apellido: z.string().min(4).max(50),
  fechaNacimiento: z.date(),
  documento: z.string().length(10),
  correo: z.string().email().max(50),
  direccion: z.string().min(10).max(100),
  antiguedad: z.number().nonnegative(),
  departamento: z.string().min(5).max(50),
  puesto: z.string().min(5).max(50),
})

export function validateEmployee(input) {
  return employeeSchema.safeParse(input)
}

export function validatePartialEmployee(input) {
  return employeeSchema.partial().safeParse(input)
}
