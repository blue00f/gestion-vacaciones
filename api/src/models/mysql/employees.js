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

export class EmployeeModel {
  static async getAllEmployee({}) {
    const [employees] = await connection.query(
      `CALL usp_ConsultarTodosLosEmpleados();`,
    )

    return employees
  }

  static async deleteEmployeeById({ id }) {
    await connection.query(`CALL usp_BajaEmpleado(?);`, [id])

    return 'Empleado desabilitado'
  }

  static async createEmployee({ input }) {
    const {
      id_empleado,
      usuario_id,
      nombre,
      apellido,
      fechaNacimiento,
      documento,
      correo,
      direccion,
      estado,
    } = input

    const [uuidResult] = await connection.query('SELECT UUID() uuid;')
    const [{ uuid }] = uuidResult

    try {
      await connection.query(
        `CALL usp_AltaEmpleado( UUID_TO_BIN("${uuid}") ,?,?,?,?,?,?,?,?,?,?);`,
        [
          id_empleado,
          usuario_id,
          nombre,
          apellido,
          fechaNacimiento,
          documento,
          correo,
          direccion,
          estado,
        ],
      )
    } catch (e) {
      throw new Error('Error creating employee.')
    }

    const [employees] = await connection.query(
      `CALL usp_ConsultarTodosLosEmpleados();`,
    )

    return employees
  }

  static async updateEmployee({
    id,
    nombre,
    apellido,
    documento,
    correo,
    direccion,
    departamento,
    puesto,
    estado,
  }) {
    const [employees] = await connection.query(
      `CALL usp_ModificarEmpleado(?,?,?,?,?,?,?,?,?);`,
      [
        id,
        nombre,
        apellido,
        documento,
        correo,
        direccion,
        departamento,
        puesto,
        estado,
      ],
    )

    return employees
  }
}
