  import z from 'zod'

  const vacationSchema = z.object({
    fechaInicio: z.date(),
    fechaFin: z.date(),
    comentarios: z.string(),
    legajo_id: z.number(),
    administrador_id: z.number(),
    estado: z.string()
  })

  export function validateVacation(input) {
    return vacationSchema.safeParse(input)
  }

  export function validatePartialVacation(input) {
    return vacationSchema.partial().safeParse(input)
  }


