-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-10-2018 a las 18:00:49
-- Versión del servidor: 10.1.29-MariaDB
-- Versión de PHP: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `libreria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id_libro` int(10) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `autor` varchar(50) NOT NULL,
  `precio` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id_libro`, `titulo`, `autor`, `precio`) VALUES
(1, 'Rebelión en la granja', 'Orwell', 234),
(2, 'Millennium', 'Larsson', 4565),
(3, 'La niebla', 'King', 123),
(4, 'Entrevista con el vampiro', 'Rice', 768),
(7, 'La Cúpula', 'King', 548),
(8, 'Misery', 'King', 898),
(9, 'Harry Potter 2', 'Rowling', 1923),
(10, 'Ficciones', 'Borges', 3249),
(11, 'Harry Potter 3', 'Rowling', 654),
(12, 'Carrie', 'King', 823),
(13, 'Mockingjay', 'Collins', 154),
(14, 'Harry Potter 4', 'Rowling', 4336),
(15, 'El Amante Japonés', 'Allende', 299),
(16, 'Número Cero', 'Eco', 259),
(17, 'Los Colores de la Felicidad', 'Rivero', 353),
(18, 'La Chica del Tren', 'Hawkins', 289),
(19, 'La Vida de los Elfos', 'Barbery', 562),
(20, 'Alma al Diablo', 'Birmajer', 120),
(21, 'kjashdf', '', 0),
(22, 'kljkljkjhkjhjg', '', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id_libro`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id_libro` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
