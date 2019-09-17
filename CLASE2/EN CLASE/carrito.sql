-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-09-2019 a las 17:24:49
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
-- Base de datos: `carrito`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id_c` int(11) NOT NULL,
  `id_p_c` int(11) NOT NULL,
  `id_u_c` int(11) NOT NULL,
  `fecha_c` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cantidad_c` int(11) NOT NULL,
  `medioPago_c` int(11) NOT NULL,
  `urlMercadoPago_c` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_p` int(11) NOT NULL,
  `nombre_p` varchar(111) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion_p` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `stock_p` int(11) NOT NULL,
  `precio_p` float NOT NULL,
  `imagen_p` varchar(111) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_p`, `nombre_p`, `descripcion_p`, `stock_p`, `precio_p`, `imagen_p`) VALUES
(1, 'Malbec', 'Vino suave, tomable, no está picado y tiene 5 años de reserva.', 10, 100, 'malbec1.jpg'),
(2, 'Pinot noir', 'Igual que el malbec pero más caro y más ácido', 28, 190, 'pinotnoir.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id_r` int(11) NOT NULL,
  `id_p_r` int(11) NOT NULL,
  `id_u_r` int(11) NOT NULL,
  `cantidad_r` int(11) NOT NULL,
  `fecha_r` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id_r`, `id_p_r`, `id_u_r`, `cantidad_r`, `fecha_r`) VALUES
(1, 1, 1, 1, '2019-09-17 11:07:22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_u` int(11) NOT NULL,
  `mail_u` varchar(60) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `password_u` varchar(60) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `nombre_u` varchar(60) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `apellido_u` varchar(60) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `codigo_confirmacion` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `cuenta_confirmada` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_u`, `mail_u`, `password_u`, `nombre_u`, `apellido_u`, `codigo_confirmacion`, `cuenta_confirmada`) VALUES
(1, 'dileo.francoj@gmail.com', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 'Franco', 'Di Leo', 'abcdefghi', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id_c`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_p`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id_r`),
  ADD KEY `FK_PRODUCTOS-RESERVAS` (`id_p_r`),
  ADD KEY `FK_RESERVAS_USUARIO` (`id_u_r`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_u`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id_c` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_p` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id_r` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_u` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `FK_PRODUCTOS-RESERVAS` FOREIGN KEY (`id_p_r`) REFERENCES `productos` (`id_p`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_RESERVAS_USUARIO` FOREIGN KEY (`id_u_r`) REFERENCES `usuarios` (`id_u`) ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
