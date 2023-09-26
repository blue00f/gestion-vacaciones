create database bd_gestion_vacaciones;
use bd_gestion_vacaciones;

create table usuarios(
	id_usuario int auto_increment not null,
    nombre varchar(50) not null,
    clave varchar(50) not null,
    constraint pk_usuario primary key (id_usuario),
    constraint uc_usuario unique (nombre)
);

create table empleados(
	id_empleado int auto_increment not null,
    usuario_id int not null,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    fechaNacimiento date not null,
    documento varchar(10) not null,
    correo varchar(50) not null,
    direccion varchar(100) not null,
    constraint pk_empleado primary key (id_empleado),
    constraint fk_usuario_empleado foreign key (usuario_id) references usuarios (id_usuario)
);

create table gerentes(
	id_gerente int auto_increment not null,
    usuario_id int not null,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    fechaNacimiento date not null,
    documento varchar(10) not null,
    correo varchar(50) not null,
    direccion varchar(100) not null,
    constraint pk_gerente primary key (id_gerente),
    constraint fk_usuario_gerente foreign key (usuario_id) references usuarios (id_usuario)
);

create table legajos(
	id_legajo int auto_increment not null,
    empleado_id int not null,
    fechaIngreso datetime not null,
    antiguedad int not null,
    departamento varchar(50) not null,
    puesto varchar(50) not null,
    estado varchar(20) not null,
    constraint pk_legajo primary key (id_legajo),
    constraint fk_empleado foreign key (empleado_id) references empleados (id_empleado)
);

create table vacaciones(
	id_vacacion int auto_increment not null,
	legajo_id int not null,
    gerente_id int not null,
    diasTomados int not null,
    fechaInicio date not null,
    fechaFin date not null,
    fechaSolicitud datetime not null default now(),
    estado varchar(20) not null,
    comentarios varchar(255),
    constraint pk_vacacion primary key (id_vacacion),
    constraint fk_legajo foreign key (legajo_id) references legajos (id_legajo),
    constraint fk_gerente foreign key (gerente_id) references gerentes (id_gerente),
    constraint chk_diasTomados check (diasTomados >= 1 and diasTomados <= 28)
);
