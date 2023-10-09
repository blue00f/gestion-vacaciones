import mysql from 'mysql2/promise'

const DEFAULT_CONFIG = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'ETN7dolores',
  database: 'bd_gestion_vacaciones',
}
const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG

const connection = await mysql.createConnection(connectionString)

export class VacationModel {

  static async getAllVacation({}) 
  {
    const [vacations] = await connection.query(
      `CALL sp_ConsultarTodasLasVacaciones()`)
        return vacations; 
    // :D
  }
 
  static async createVacation({ input }) //INSERT
  {
    const {
      fechaInicio, 
      fechaFin ,
      comentarios, 
      legajo_id ,
      administrador_id,
    } = input
  
    try {
       await connection.query(
        `CALL sp_AltaVacacion (?, ?, ?, ?, ?);`,
        [fechaInicio, fechaFin , comentarios, legajo_id , administrador_id,],
      )
      
    } catch (e) {
      throw new Error('Error creating vacation')

    }//:V

    const [vacations] = await connection.query(//consultar todos los empleados
        `CALL sp_ConsultarTodasLasVacaciones();`)
        
        return vacations;  
  }

  
  static async updateVacation({ id, estado }) {
    const [vacations] = await connection.query( `CALL sp_ModificarVacacion(?, ?);`,
    [id, estado]);

    return vacations;
  }

}
