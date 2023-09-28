import z from 'zod'

const vacationSchema = z.object({
  diasTomados: z.number().min(1).max(2).nonempty(),
  fechaInicio: z.date().nonempty(),
  fechaFin: z.date().nonempty(),
  fechaSolicitud: z.datetime().nonempty(),
})

export function validateVacation(input) {
  return vacationSchema.safeParse(input)
}

export function validatePartialVacation(input) {
  return vacationSchema.partial().safeParse(input)
}
