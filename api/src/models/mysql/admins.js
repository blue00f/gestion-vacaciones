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
  
  export class AdminstratorModel {
  
    static async getAllAdmin({}) 
    {
      const [admins] = await connection.query(//consultar todos los empleados
        `CALL sp_ConsultarTodosLosAdministradores();`)
        
          return admins; 
      // :D
    }
                                                           
    static async deleteAdminstratorById({id}) { // p_id_empleado
      await connection.query(//Baja Empleados
        `CALL sp_BajaAdministrador(?);`,
        [id] );

        return 'Administrador desabilitado';
    }//:D
   
    static async createEmployee({input}, {admins}) //INSERT
    {
      const {
        nombre,
        apellido,
        usuario,
        clave,
        correo
      } = input;
      
      // crypto.randomUUID()
      
      try {
         await connection.query(`CALL sp_AltaEmpleado( ? , ?, ?, ?, ?);`,
        [nombre,  apellido, usuario, clave, correo]);        

      } catch (e) {
        throw new Error('Error creating administrator.') 
    
      }
      
      const [admins] = await connection.query(//consultar todos los empleados
        `CALL sp_ConsultarTodosLosAdministradores();`)
        
        return admins;  
      
    }//:V
  
    static async updateAdmin({ id, nombre, apellido, correo, estado }) {
      const [admins] = await connection.query(  `CALL sp_ModificarAdministrador(?,?,?,?,?);`,
      [id, nombre, apellido, correo, estado]);
  
      return admins;
    }
  
  }
  