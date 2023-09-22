create database bd_vacaciones;
use bd_vacaciones;

create table usuarios(
	id_usuario int auto_increment not null,
    usuario varchar(50) not null,
    clave varchar(100) not null,
    constraint pk_usuario primary key (id_usuario)
);

create table empleados(
	id_empleado int auto_increment not null,
    usuario_id int not null,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    fecha_nacimiento date not null,
    cargo varchar(50) not null,
    documento varchar(10) not null,
    area varchar(50) not null,
    constraint pk_empleado primary key (id_empleado),
    constraint fk_usuario_empleado foreign key (usuario_id) references usuarios (id_usuario)
);

create table gerentes(
	id_gerente int auto_increment not null,
    usuario_id int not null,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    fecha_nacimiento date not null,
    documento varchar(10) not null,
    constraint pk_gerente primary key (id_gerente),
    constraint fk_usuario_gerente foreign key (usuario_id) references usuarios (id_usuario)
);

create table planilla_vacaciones(
	id_planilla_vacacion int auto_increment not null,
	empleado_id int not null,
    gerente_id int not null,
    estado varchar(20) not null,
    diasTomados int not null,
    antiguedad int not null,
    fechaCreacion datetime not null default now(),
    constraint id_planilla_vacacion primary key (id_planilla_vacacion),
    constraint fk_empleado_vacacion foreign key (empleado_id) references empleados (id_empleado),
    constraint fk_gerente_vacacion foreign key (gerente_id) references gerentes (id_gerente)
);
