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

export class AdminModel {
  static async getAllAdmin() {
    const [admins] = await connection.query(
      `CALL usp_ConsultarTodosLosAdministradores();`,
    )
    return admins
  }

  static async deleteAdminById({ id }) {
    await connection.query(`CALL usp_BajaAdministrador(?);`, [id])
    return 'Administrador desabilitado'
  }

  static async createAdmin({ input }) {
    const { nombre, apellido, usuario, clave, correo } = input
    try {
      await connection.query(`CALL usp_AltaEmpleado(?, ?, ?, ?, ?);`, [
        nombre,
        apellido,
        usuario,
        clave,
        correo,
      ])
    } catch (e) {
      throw new Error('Error creating administrator.')
    }

    const [admins] = await connection.query(
      `CALL usp_ConsultarTodosLosAdministradores();`,
    )
    return admins
  }

  static async updateAdmin({ id, nombre, apellido, correo, estado }) {
    const [admins] = await connection.query(
      `CALL usp_ModificarAdministrador(?,?,?,?,?);`,
      [id, nombre, apellido, correo, estado],
    )
    return admins
  }
}
