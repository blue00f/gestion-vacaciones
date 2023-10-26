import mysql from 'mysql2/promise'

const DEFAULT_CONFIG = {
  host: 'localhost',
  user: 'administrador',
  port: 3306,
  password: 'ADM123',
  database: 'bd_gestion_vacaciones',
}

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG

const connection = await mysql.createConnection(connectionString)

export class VacationModel {
  static async getAllVacation({}) {
    const [vacations] = await connection.query(
      'CALL usp_ConsultarTodasLasVacaciones()',
    )
    return vacations[0]
  }

  static async createVacation({ input }) {
    const { fechaInicio, fechaFin, comentarios, legajo_id, administrador_id } =
      input
    try {
      await connection.query('CALL usp_AltaVacacion (?,?,?,?,?);', [
        fechaInicio,
        fechaFin,
        comentarios,
        legajo_id,
        administrador_id,
      ])
    } catch (e) {
      throw new Error('Error al crear las vacaciones')
    }
  }

  static async updateVacationById({ id, input }) {
    const { estado } = input;
    try {
      const [vacations] = await connection.query(
        'CALL usp_ModificarVacacion(?,?);',
        [id, estado],
      )
    } catch (e) {
      throw new Error('Error al modificar vacaciones')
    }
  }
}
