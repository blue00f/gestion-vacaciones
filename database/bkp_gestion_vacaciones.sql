-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_gestion_vacaciones
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administradores` (
  `id_administrador` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `estado` varchar(20) NOT NULL DEFAULT 'Activo',
  PRIMARY KEY (`id_administrador`),
  KEY `fk_usuario_administrador` (`usuario_id`),
  CONSTRAINT `fk_usuario_administrador` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administradores`
--

LOCK TABLES `administradores` WRITE;
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
INSERT INTO `administradores` VALUES (1,3,'Bruno','Roca','brunoroca@gmail.com','Activo'),(2,8,'Sofia','Reynaga','sofi@gmail.com','Activo');
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `id_empleado` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `documento` varchar(10) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  PRIMARY KEY (`id_empleado`),
  UNIQUE KEY `uc_documento` (`documento`),
  KEY `fk_usuario_empleado` (`usuario_id`),
  CONSTRAINT `fk_usuario_empleado` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,1,'Rodrigo','Gonzalez','2005-04-21','48192857','fabigonza20@gmail.com','Av. Chiclana 2021'),(2,4,'Diego','Maradona','1960-02-12','29847189','diego10@gmail.com','Av. Libertad 291'),(3,5,'Julián','Álvarez','1996-11-21','41827948','juli@outlook.com','Av. Mundial 2022');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `legajos`
--

DROP TABLE IF EXISTS `legajos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `legajos` (
  `id_legajo` int NOT NULL AUTO_INCREMENT,
  `empleado_id` int NOT NULL,
  `fechaIngreso` date NOT NULL,
  `antiguedad` int NOT NULL,
  `departamento` varchar(50) NOT NULL,
  `puesto` varchar(50) NOT NULL,
  `estado` varchar(20) NOT NULL DEFAULT 'Activo',
  PRIMARY KEY (`id_legajo`),
  KEY `fk_empleado` (`empleado_id`),
  CONSTRAINT `fk_empleado` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id_empleado`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `legajos`
--

LOCK TABLES `legajos` WRITE;
/*!40000 ALTER TABLE `legajos` DISABLE KEYS */;
INSERT INTO `legajos` VALUES (1,1,'2023-09-21',0,'Producción','Armar notebooks','Inactivo'),(2,2,'2010-12-21',13,'Servicio Técnico','Sysadmin','Activo'),(3,3,'2017-02-12',6,'Servicio Técnico','Testing','Activo');
/*!40000 ALTER TABLE `legajos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `clave` varchar(50) NOT NULL,
  `estado` varchar(20) NOT NULL DEFAULT 'Activo',
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `uc_usuario` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'fabigonza','fabigonza','Inactivo'),(3,'bruno','bruno','Activo'),(4,'diego10','diego10','Activo'),(5,'julianAlv','julianAlv','Activo'),(6,'eldeivi','eldeivi','Activo'),(8,'sofia123','sofia123','Activo');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacaciones`
--

DROP TABLE IF EXISTS `vacaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacaciones` (
  `id_vacacion` int NOT NULL AUTO_INCREMENT,
  `legajo_id` int NOT NULL,
  `administrador_id` int NOT NULL,
  `diasTomados` int NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFin` date NOT NULL,
  `fechaSolicitud` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` varchar(20) NOT NULL,
  `comentarios` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_vacacion`),
  KEY `fk_legajo` (`legajo_id`),
  KEY `fk_administrador` (`administrador_id`),
  CONSTRAINT `fk_administrador` FOREIGN KEY (`administrador_id`) REFERENCES `administradores` (`id_administrador`),
  CONSTRAINT `fk_legajo` FOREIGN KEY (`legajo_id`) REFERENCES `legajos` (`id_legajo`),
  CONSTRAINT `chk_diasTomados` CHECK (((`diasTomados` >= 1) and (`diasTomados` <= 28)))
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacaciones`
--

LOCK TABLES `vacaciones` WRITE;
/*!40000 ALTER TABLE `vacaciones` DISABLE KEYS */;
INSERT INTO `vacaciones` VALUES (3,3,1,10,'2023-08-10','2023-08-19','2023-10-08 14:42:15','Rechazado','Problemas familiares'),(4,2,1,21,'2023-11-01','2023-11-21','2023-10-08 14:56:45','Pendiente','Vacaciones de fin de año');
/*!40000 ALTER TABLE `vacaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'bd_gestion_vacaciones'
--
/*!50003 DROP PROCEDURE IF EXISTS `usp_AltaAdministrador` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrador`@`localhost` PROCEDURE `usp_AltaAdministrador`(
    IN p_nombre VARCHAR(50),
    IN p_apellido VARCHAR(50),
    IN p_correo VARCHAR(50),
    IN p_usuario_nombre VARCHAR(50),
    IN p_usuario_clave VARCHAR(50)
)
BEGIN
    DECLARE v_usuario_id INT;

    INSERT INTO usuarios(nombre, clave)
    VALUES (p_usuario_nombre, p_usuario_clave);
    SET v_usuario_id = LAST_INSERT_ID();

    INSERT INTO administradores(usuario_id, nombre, apellido, correo)
    VALUES (v_usuario_id, p_nombre, p_apellido, p_correo);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_AltaEmpleado` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrador`@`localhost` PROCEDURE `usp_AltaEmpleado`(
    IN p_nombre VARCHAR(50),
    IN p_apellido VARCHAR(50),
    IN p_fechaNacimiento DATE,
    IN p_documento VARCHAR(10),
    IN p_correo VARCHAR(50),
    IN p_direccion VARCHAR(100),
    IN p_fechaIngreso DATE,
    IN p_departamento VARCHAR(50),
    IN p_puesto VARCHAR(50),
    IN p_usuario_nombre VARCHAR(50),
    IN p_usuario_clave VARCHAR(50)
)
BEGIN
    DECLARE v_usuario_id INT;
    DECLARE v_empleado_id INT;
    DECLARE v_antiguedad INT;
    SET v_antiguedad = YEAR(NOW()) - YEAR(p_fechaIngreso);

    INSERT INTO usuarios(nombre, clave)
    VALUES (p_usuario_nombre, p_usuario_clave);
    SET v_usuario_id = LAST_INSERT_ID();

    INSERT INTO empleados(usuario_id, nombre, apellido, fechaNacimiento, documento, correo, direccion)
    VALUES (v_usuario_id, p_nombre, p_apellido, p_fechaNacimiento, p_documento, p_correo, p_direccion);
    SET v_empleado_id = LAST_INSERT_ID();

    INSERT INTO legajos(empleado_id, fechaIngreso, antiguedad, departamento, puesto, estado)
    VALUES (v_empleado_id, p_fechaIngreso, v_antiguedad, p_departamento, p_puesto, 'Activo');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_AltaVacacion` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrador`@`localhost` PROCEDURE `usp_AltaVacacion`(
    IN p_fechaInicio DATE,
    IN p_fechaFin DATE,
    IN p_comentarios VARCHAR(255),
    IN p_legajo_id INT,
    IN p_administrador_id INT
)
BEGIN
    DECLARE v_diasTomados INT;
    SET v_diasTomados = DATEDIFF(p_fechaFin, p_fechaInicio) + 1;

    INSERT INTO vacaciones (legajo_id, administrador_id, diasTomados, fechaInicio, fechaFin, comentarios, estado)
    VALUES (p_legajo_id, p_administrador_id, v_diasTomados, p_fechaInicio, p_fechaFin, p_comentarios, 'Pendiente');

    UPDATE vacaciones
    SET diasTomados = v_diasTomados
    WHERE id_vacacion = LAST_INSERT_ID();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_BajaAdministrador` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrador`@`localhost` PROCEDURE `usp_BajaAdministrador`(
    IN p_id_administrador INT
)
BEGIN
    DECLARE v_usuario_id INT;

    SELECT usuario_id INTO v_usuario_id FROM administradores WHERE id_administrador = p_id_administrador;
    
    UPDATE administradores
    SET estado = 'Inactivo'
    WHERE id_administrador = p_id_administrador;

    UPDATE usuarios
    SET estado = 'Inactivo'
    WHERE id_usuario = v_usuario_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_BajaEmpleado` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrador`@`localhost` PROCEDURE `usp_BajaEmpleado`(
    IN p_id_empleado INT
)
BEGIN
    DECLARE v_legajo_id INT;
    DECLARE v_usuario_id INT;

    SELECT id_legajo INTO v_legajo_id FROM legajos WHERE empleado_id = p_id_empleado;
    UPDATE legajos SET estado = 'Inactivo' WHERE id_legajo = v_legajo_id;
    SELECT usuario_id INTO v_usuario_id FROM empleados WHERE id_empleado = p_id_empleado;
    UPDATE usuarios SET estado = 'Inactivo' WHERE id_usuario = v_usuario_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ConsultarTodasLasVacaciones` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrador`@`localhost` PROCEDURE `usp_ConsultarTodasLasVacaciones`()
BEGIN
	select v.id_vacacion, e.nombre, e.apellido, l.antiguedad, v.diasTomados, v.fechaInicio, v.fechaFin, v.fechaSolicitud, v.comentarios, v.estado
    from empleados e
    inner join legajos l on e.id_empleado = l.empleado_id
    inner join vacaciones v on l.id_legajo = v.legajo_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ConsultarTodosLosAdministradores` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrador`@`localhost` PROCEDURE `usp_ConsultarTodosLosAdministradores`()
BEGIN
	select a.id_administrador, u.nombre as usuario, a.nombre, a.apellido, a.correo, a.estado
    from usuarios u
    inner join administradores a on u.id_usuario = a.usuario_id
    order by a.id_administrador;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ConsultarTodosLosEmpleados` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrador`@`localhost` PROCEDURE `usp_ConsultarTodosLosEmpleados`()
BEGIN
	select e.id_empleado, u.nombre as usuario, e.nombre, e.apellido, e.fechaNacimiento, e.documento, e.correo, e.direccion, e.fechaNacimiento, l.fechaIngreso, l.antiguedad, l.departamento, l.puesto, l.estado
    from usuarios u
    inner join empleados e on u.id_usuario = e.usuario_id
    inner join legajos l on e.id_empleado = l.empleado_id
    order by e.id_empleado;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ModificarAdministrador` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrador`@`localhost` PROCEDURE `usp_ModificarAdministrador`(
    IN p_id_administrador INT,
    IN p_nombre VARCHAR(50),
    IN p_apellido VARCHAR(50),
    IN p_correo VARCHAR(50),
	IN p_estado VARCHAR(20)
)
BEGIN
    UPDATE administradores
    SET
        nombre = IF(LENGTH(p_nombre) > 0, p_nombre, nombre),
        apellido = IF(LENGTH(p_apellido) > 0, p_apellido, apellido),
        correo = IF(LENGTH(p_correo) > 0, p_correo, correo),
        estado = IF(LENGTH(p_estado) > 0, p_estado, estado)
    WHERE id_administrador = p_id_administrador;

    IF(LENGTH(p_estado) > 0) THEN
        UPDATE usuarios
        SET estado = p_estado
        WHERE id_usuario = (SELECT usuario_id FROM administradores WHERE id_administrador = p_id_administrador);
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ModificarEmpleado` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrador`@`localhost` PROCEDURE `usp_ModificarEmpleado`(
    IN p_id_empleado INT,
    IN p_nombre VARCHAR(50),
    IN p_apellido VARCHAR(50),
    IN p_documento VARCHAR(10),
    IN p_correo VARCHAR(50),
    IN p_direccion VARCHAR(100),
    IN p_departamento VARCHAR(50),
    IN p_puesto VARCHAR(50),
	IN p_estado VARCHAR(20)
)
BEGIN
    UPDATE empleados
    SET
        nombre = IF(LENGTH(p_nombre) > 0, p_nombre, nombre),
        apellido = IF(LENGTH(p_apellido) > 0, p_apellido, apellido),
        documento = IF(LENGTH(p_documento) > 0, p_documento, documento),
        correo = IF(LENGTH(p_correo) > 0, p_correo, correo),
        direccion = IF(LENGTH(p_direccion) > 0, p_direccion, direccion)
    WHERE id_empleado = p_id_empleado;

    UPDATE legajos
    SET
        departamento = IF(LENGTH(p_departamento) > 0, p_departamento, departamento),
        puesto = IF(LENGTH(p_puesto) > 0, p_puesto, puesto)
    WHERE empleado_id = p_id_empleado;
    
    IF(LENGTH(p_estado) > 0) THEN
        UPDATE usuarios
        SET estado = p_estado
        WHERE id_usuario = (SELECT usuario_id FROM empleados WHERE id_empleado = p_id_empleado);

        UPDATE legajos
        SET estado = p_estado
        WHERE empleado_id = p_id_empleado;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ModificarVacacion` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`administrador`@`localhost` PROCEDURE `usp_ModificarVacacion`(
	IN p_id_vacacion INT,
	IN p_estado VARCHAR(20)
)
BEGIN
    IF (p_estado = 'Aceptado' OR p_estado = 'Rechazado') THEN
        UPDATE vacaciones
        SET estado = p_estado
        WHERE id_vacacion = p_id_vacacion;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-08 15:20:30
