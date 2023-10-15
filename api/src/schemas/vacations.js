import z from 'zod'

const vacationSchema = z.object({
  diasTomados: z.string().min(1).max(2),
  fechaInicio: z.date(),
  fechaFin: z.date(),
  fechaSolicitud: z.string().datetime() ,
})

export function validateVacation(input) {
  return vacationSchema.safeParse(input)
}

export function validatePartialVacation(input) {
  return vacationSchema.partial().safeParse(input)
}
