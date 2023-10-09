import mysql from 'mysql2/promise';

const DEFAULT_CONFIG = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'ETN7dolores',
    database: 'bd_gestion_vacaciones',
  }

  const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG
  
  const connection = await mysql.createConnection(connectionString)
  
  export class EmployeeModel {
  
    static async getAllEmployee({}) 
    {
      const [employees] = await connection.query(//consultar todos los empleados
        `CALL sp_ConsultarTodosLosEmpleados();`)
        
          return employees; 
      // :D
    }
                                                           
    static async deleteEmployeeById({id}) { // p_id_empleado
      await connection.query(//Baja Empleados
        `CALL sp_BajaEmpleado(?);`,
        [id] );

        return 'Empleado desabilitado'
    }//:D
   
    static async createEmployee({input}, {employees}) //INSERT
    {

      const {
        id_empleado,
        usuario_id,
        nombre,
        apellido,
        fechaNacimiento ,
        documento,
        correo,
        direccion,
        estado  ,
      } = input;
      
      // crypto.randomUUID()
      const [uuidResult] = await connection.query('SELECT UUID() uuid;')
      const [{ uuid }] = uuidResult;
  
      try {
         await connection.query(`CALL sp_AltaEmpleado( UUID_TO_BIN("${uuid}") ,?,?,?,?,?,?,?,?,?,?);`,
        [id_empleado, usuario_id,nombre,apellido,fechaNacimiento,documento,correo,direccion,estado])
      
        

      } catch (e) {
        throw new Error('Error creating employee.') 
    
      }
      
      const [employees] = await connection.query(//consultar todos los empleados
        `CALL sp_ConsultarTodosLosEmpleados();`)
        
        return employees;  
      
    }//:V
  
    static async updateEmployee({ id, nombre, apellido, documento, correo, direccion, departamento, puesto, estado }) {
      const [employees] = await connection.query(  `CALL usp_ModificarEmpleado(?,?,?,?,?,?,?,?,?);`,
      [id, nombre, apellido, documento, correo, direccion, departamento, puesto, estado]);
  
      return employees;
    }
  
  }
  