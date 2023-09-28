import z from 'zod'

const employeeSchema = z.object({
  nombreUsuario: z.string().min(10).max(50).nonempty(),
  clave: z.record(z.string().min(1), z.number().min(1)),
  nombre: z.string().min(4).max(50).nonempty(),
  apellido: z.string().min(4).max(50).nonempty(),
  fechaNacimiento: z.date().nonempty(),
  documento: z.number().length(10).nonempty(),
  correo: z.email().max(50).nonempty(),
  direccion: z.string().min(10).max(100).nonempty(),
  antiguedad: z.number().nonnegative().nonempty(),
  departamento: z.string().min(5).max(50).nonempty(),
  puesto: z.string().min(5).max(50).nonempty(),
})

export function validateEmployee(input) {
  return employeeSchema.safeParse(input)
}

export function validatePartialEmployee(input) {
  return employeeSchema.partial().safeParse(input)
}
