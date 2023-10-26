-- listar usuarios y permisos para 'administrador'
select user from mysql.user;
show grants for 'administrador'@'localhost';

-- privilegios de 'administrador'
create user 'administrador'@'localhost' identified by 'ADM123';

grant select, insert, update on bd_gestion_vacaciones.empleados to 'administrador'@'localhost';
grant select, insert, update on bd_gestion_vacaciones.legajos to 'administrador'@'localhost';
grant select, insert, update on bd_gestion_vacaciones.vacaciones to 'administrador'@'localhost';
grant select, insert, update on bd_gestion_vacaciones.usuarios to 'administrador'@'localhost';
grant select, insert, update on bd_gestion_vacaciones.administradores to 'administrador'@'localhost';

grant execute on procedure usp_AltaEmpleado to 'administrador'@'localhost';
grant execute on procedure usp_BajaEmpleado to 'administrador'@'localhost';
grant execute on procedure usp_ModificarEmpleado to 'administrador'@'localhost';
grant execute on procedure usp_ConsultarTodosLosEmpleados to 'administrador'@'localhost';

grant execute on procedure usp_AltaAdministrador to 'administrador'@'localhost';
grant execute on procedure usp_BajaAdministrador to 'administrador'@'localhost';
grant execute on procedure usp_ModificarAdministrador to 'administrador'@'localhost';
grant execute on procedure usp_ConsultarTodosLosAdministradores to 'administrador'@'localhost';

grant execute on procedure usp_AltaVacacion to 'administrador'@'localhost';
grant execute on procedure usp_ModificarVacacion to 'administrador'@'localhost';
grant execute on procedure usp_ConsultarTodasLasVacaciones to 'administrador'@'localhost';

grant execute on procedure usp_ConsultarIdentificadoresUsuarios to 'administrador'@'localhost';
flush privileges;