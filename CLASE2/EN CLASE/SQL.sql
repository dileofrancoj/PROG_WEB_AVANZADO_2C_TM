-- SQL : Lenguaje de consultas estructurado
-- SQL : Lenguaje 
-- BASE DE DATOS (ARCHIVO DE EXCEL)
	-- TABLAS (libros de excel tabla1,tabla2, tabla3)
	-- filas y columnas (registros)

-- tablas es informacion de cualquier tipo
-- varias tablas dependiendo el proyecto

-- "YA TENEMOS EL FRONTEND, "
-- "cuando tengamos el back (PHP) vamos a hacer consultas desde el front que pasen por el backend e impacten en nuestra base de datos --> responde, pasa por el backend y vuelve al frontend para que el usuario vea los resultados"
-- XAMPP (abarca todos los SO : linux, mac,windows)
-- TODXS TODES X
-- APACHE (no es ninguna tribu) the starfish and the spider
-- WEB SERVER (interprete (C,JAVA, ETC))
-- m : MySQL
-- PHP
--  PERL

-- Crear bases de datos (interfaz de gráfica)
-- crear tablas dentro de nuestra base de datos
-- OPERACIONES dentro de tablas se haran por consola
-- consultas que se hacen a las tablas es super importante para que podamos hacer un backend como la gente 

-- CRUD (CREATE, READ, UPDATE, DELETE)
-- INSERTAR REGISTROS (DAR DE ALTA UN USUARIO)
		-- ESCRIBIR UNA PUBLICACION

-- leer informacion que existe dentro de la tabla
	-- select
-- actualizar una contraseña, editar un post en insta, bla bla  -> UPDATE

-- SI QUEREMOS BORRAR UN POSTEO, ETC ETC
	-- DELETE

-- insert,select, update,delete 
-- 
-- http://localhost/phpmyadmin

-- Tipos de datos : 
-- 4 (no tiene decimales) es entero: int
-- 3.1418 (decimales) flotante
-- franco -> string (char)
-- dileofrancoj@gmail.com (varchar)
--> 0 o 1 boolean

-- id , usuario, password, permisos
-- id : relacionar tablas entre si (numero entero) int
-- usuario : varchar(5) franco -> almacena franc
-- password : varchar(40) 
					-- encriptadas:
					-- md5, sha1 (32,40)
					-- md5('contraseña')
--> minimo siempre
-- permisos : boolean -> 0 correspondientes a muggles, 1 (correspondiente a admin)

-- tipos de datos (valores maximos) 
-- <input type="number" min="1" max="20000000000000"
-- int :-20000000000 y 20000000000 (2 10)
-- varchar : 0 y 255 -> si ponemos algo de 256 -> te toma los primeros 255
-- boolean : 0 y 1
-- char : char(7) : franco" "
-- varchar(7): franco

-- mysql -u root -p
-- Enter password: enter


-- MySQL
-- show databases; muestras lase bases de datos creadas
-- CASI TODAS LAS INSTRUCCIONES TERMINAN EN ; 

-- use nombreBaseDeDatos;
-- describe nombreDeLaTabla
-- show tables; es importante que show tables se ejecute siempre que este dentro de una base de datos :D
-- Ubuntu 16.0 -> minuscula
-- windows pueden hacer lo que quieran!!!!
-- insert into tabla (columna1,column2,columnan) 
-- IMPORTANTISIMO : 
	-- DATOS NUMERICOS NO LLEVAN COMILLAS
	-- LOS DATOS VARCHAR SI LLEVAN COMILLAS
insert into usuarios (id, usuario,password,permisos) values (1, 'franquitopiola','1234',0);

-- Uknow column permisosa

-- SELECT es para ver que registros tenemos en la tablita

SELECT usuario,password from usuarios;
SELECT campo1,campo2,campo3 from usuarios;
SELECT * FROM usuarios; 


-- solwin.com.ar/templates/
-- * expresion regular para todos los campos 
-- solwin.com.ar/templates/1
-- solwin.com.ar/templates/2

-- UPDATE NOS SIRVE PARA ACTUALIZAR INFORMACION
-- WHERE ES IMPORTANTISIMO PARA APLICAR CONDICIONES A LAS CONSULTAS QUE QUIERO HACER.
-- UPDATE TABLA SET CAMPO = 'LOQUESEA' VA A PONER EN EL CAMPO DEFINIDO LOQUESEA A TODOS LOS USUARIOS A MENOS QUE SE APLIQUE UN WHERE
-- setear le damos un valor new

UPDATE usuarios set password='pastelesalataque' where usuario='jose';

UPDATE usuarios set password = '1234' where usuario='jose';

select * from usuarios where usuario='jose' and password='1234';
-- devuelve los registros que coincidan con el usuario y password :D

	
-- mysql -u root -p
-- Enter password :  

-- insert into tabla (columnas) values ('valores');
-- select campos from tabla where condiciones;
-- update tabla set 
update usuarios set usuario='josecito',password='pasteles' where id = 2; 
	-- actualizar el campo usuario y password cuando el id sea 2 

-- DELETE BORRA TODO !!!!! 
-- bases de datos son sistemas encargados de : guardar informacion y de repetir la informacion el menor numero de veces que sea posible.

-- integridad referencial (campo comun a las tablas que las relaciona entre si y que permite que no se hagan operaciones que puedan afectar a las)


-- usuarios : id,usuario,password,permisos
-- informacion : id,nombre,apellido,mail 
drop table usuarios; -- borra la estructura
DELETE FROM usuarios -- les va a borrar todo :(((( el contenido

DELETE FROM usuarios where id = 1 LIMIT 1;

SELECT * FROM usuarios where id = 1 limit 0,1 -- trae el primer registro
SELECT * FROM usuarios where id = 1 limit 1,3 -- trae los otros dos registros :D
-- CUENTA
SELECT count(usuario) from usuarios; 
SELECT count(columnaDeTabla) from tabla; 

-- Esto devuelve un numero entero !!!!

-- SQL : PHPMYADMIN -> SE PUEDE IMPORTAR UNA TABLA


entramos a terminal

mysql -u root -p

show databases;
use empleados;
show tables;
select * from empleados; 


dileo.francoj@gmail.com 

SELECT nombre,trabajo from empleados; 



Cuál es el nombre de las personas que trabajan como Programadores o Desarrolladores Web? 

-- Y and usuario y la contraseña  and
4. select nombre from empleados where edad >= 30;  
6. SELECT nombre from empleados where trabajo = 'Programador' or trabajo = 'Desarrolladores web';

SELECT * from empelados where trabajo = "PROGRAMADOR"
select * from empleados where trabajo ="Programador"


select * from empleados where (trabajo = 'Programador' or trabajo = 'Programador Senior') and  salario between 750 and 900;
