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

  static async getAllVacation({vacations}) 
  {
    const [vacations] = await connection.query(
      `SELECT id_vacacion, legajo_id , gerente_id, diasTomados, fechaInicio, fechaFin, fechaSolicitud, estado, comentarios
        FROM vacaciones;`)
        return vacations; 
    // :D
  }
                                                         
  static async getByIdVacation({id}) {
    const [vacations] = await connection.query(
      `SELECT id_vacacion, legajo_id , gerente_id, diasTomados, fechaInicio, fechaFin, fechaSolicitud, estado, comentarios 
        FROM vaciones WHERE id_vacacion = UUID_TO_BIN(?);`,
      [id] );
    
    if (vacations.length === 0) {return null}
    else {return vacations[0]}
  }//:D
 
  static async createVacation({ input }) //INSERT
  {
    const {
      id_vacacion, 
      legajo_id ,
      gerente_id, 
      diasTomados,
      fechaInicio,
      fechaFin,
      fechaSolicitud, 
      estado,
      comentarios 
    } = input

    // crypto.randomUUID()
    const [uuidResult] = await connection.query('SELECT UUID() uuid;')
    const [{ uuid }] = uuidResult

    try {
      await connection.query(
        `INSERT INTO movie (id_vacacion, legajo_id , gerente_id, diasTomados, fechaInicio, fechaFin, fechaSolicitud, estado, comentarios )
          VALUES (UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?, ?, ?, ?);`,
        [id_vacacion, legajo_id ,gerente_id, diasTomados,fechaInicio,fechaFin,fechaSolicitud, estado, comentarios],
      )
    } catch (e) {
      // puede enviarle información sensible
      throw new Error('Error creating vacation')
      // enviar la traza a un servicio interno
      // sendLog(e)
      
    }//:V

  //  const [movies] = await connection.query(
  //     `SELECT title, year, director, duration, poster, rate,     BIN_TO_UUID(id) id
  //       FROM movie WHERE id = UUID_TO_BIN(?);`,
  //     [uuid],
  //   )

    return movies[0]
  }

  
  static async updateVacation({ estado, id }) {
    // ejercicio fácil: crear el update
    const [vacations] = await connection.query( `UPDATE vacaciones SET estado = ? WHERE id_vacacion = UUID_TO_BIN(?)`,
    [estado, id]);

    return vacations;
  }

}
