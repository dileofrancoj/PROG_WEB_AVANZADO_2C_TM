-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-10-2019 a las 03:55:40
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecommerce`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id_carrito` int(11) NOT NULL,
  `id_usuario_carrito` int(11) NOT NULL,
  `id_compra_carrito` int(11) DEFAULT NULL,
  `id_producto_carrito` int(11) NOT NULL,
  `fecha_carrito` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id_carrito`, `id_usuario_carrito`, `id_compra_carrito`, `id_producto_carrito`, `fecha_carrito`) VALUES
(4, 1, 7, 16, '2019-10-14 17:08:17'),
(5, 1, 7, 16, '2019-10-14 17:13:54'),
(6, 1, 8, 16, '2019-10-14 22:51:21'),
(7, 1, 8, 16, '2019-10-14 22:51:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL,
  `nombre_cliente` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `fechaRegistro_cliente` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado_cliente` int(11) NOT NULL DEFAULT '1',
  `usuario_cliente` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `password_cliente` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `mail_cliente` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `password_mail_cliente` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `telefono_cliente` varchar(255) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `nombre_cliente`, `fechaRegistro_cliente`, `estado_cliente`, `usuario_cliente`, `password_cliente`, `mail_cliente`, `password_mail_cliente`, `telefono_cliente`) VALUES
(1, 'Alejo', '2019-10-05 14:52:25', 1, 'ysya', '81dc9bdb52d04dc20036dbd8313ed055', 'ysya@ysya.com.ar', 'passwordCliente', '15631234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `id_compra` int(11) NOT NULL,
  `id_usuario_compra` int(11) NOT NULL,
  `monto_compra` float NOT NULL,
  `fecha_compra` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado_compra` int(11) NOT NULL DEFAULT '0',
  `token_compra` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `direccion_compra` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`id_compra`, `id_usuario_compra`, `monto_compra`, `fecha_compra`, `estado_compra`, `token_compra`, `direccion_compra`) VALUES
(7, 1, 8402, '2019-10-14 22:36:03', 0, '47d123b6-b4d4-4cb0-903c-98d2e2b40bc5', NULL),
(8, 1, 8402, '2019-10-14 22:52:39', 0, '1b4394ec-cb9d-45d2-aa5a-89a1fd41c234', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `configuracion`
--

CREATE TABLE `configuracion` (
  `id_configuracion` int(11) NOT NULL,
  `id_cliente_configuracion` int(11) NOT NULL,
  `mercadopago_configuracion` int(11) NOT NULL DEFAULT '0' COMMENT 'se habilita mercadopago',
  `mail_configuracion` int(11) NOT NULL DEFAULT '0' COMMENT 'se habilita mail',
  `contenido_configuracion` int(11) NOT NULL DEFAULT '0' COMMENT 'habiltia contenido'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contenido`
--

CREATE TABLE `contenido` (
  `id_contenido` int(11) NOT NULL,
  `id_cliente_contenido` int(11) NOT NULL,
  `titulo_contenido` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `descripcion_contenido` text COLLATE utf8_spanish2_ci,
  `precio_contenido` float DEFAULT NULL,
  `link_contenido` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `multimedia_contenido` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL COMMENT 'multimedia relacionado',
  `fecha_contenido` date DEFAULT NULL COMMENT 'fecha de aparicion el sitio',
  `fecha_historial_contenido` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'cuando se subio el contenido',
  `id_tipo_contenido` int(11) NOT NULL,
  `estado_contenido` int(11) NOT NULL DEFAULT '1' COMMENT 'si el contenido está disponible o no'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `contenido`
--

INSERT INTO `contenido` (`id_contenido`, `id_cliente_contenido`, `titulo_contenido`, `descripcion_contenido`, `precio_contenido`, `link_contenido`, `multimedia_contenido`, `fecha_contenido`, `fecha_historial_contenido`, `id_tipo_contenido`, `estado_contenido`) VALUES
(11, 1, 'asd', 'asd', 224, 'asdas', '12.png', '2019-10-12', '2019-10-12 19:24:25', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `id_cliente_producto` int(11) NOT NULL,
  `nombre_producto` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion_producto` text COLLATE utf8_spanish2_ci NOT NULL,
  `foto_producto` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `visibilidad_producto` tinyint(1) NOT NULL,
  `precio_producto` float DEFAULT NULL,
  `stock_producto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `id_cliente_producto`, `nombre_producto`, `descripcion_producto`, `foto_producto`, `visibilidad_producto`, `precio_producto`, `stock_producto`) VALUES
(16, 1, 'CHAIN DR', 'Cadena para sectores exclusivos', 'fotochain.png', 1, 4201, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_contenido`
--

CREATE TABLE `tipo_contenido` (
  `id_tc` int(11) NOT NULL,
  `tc` int(11) NOT NULL,
  `estado_tc` int(11) NOT NULL DEFAULT '1' COMMENT 'sirve para habilitar o deshabilitar',
  `descripcion_tc` int(11) NOT NULL,
  `id_contenido_tc` int(11) NOT NULL COMMENT 'campo que relaciona la tabla contenido con tc'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `id_cliente_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `apellido_usuario` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `mail_usuario` varchar(150) COLLATE utf8_spanish2_ci NOT NULL,
  `telefono_usuario` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `codigo_mail_usuario` varchar(150) COLLATE utf8_spanish2_ci NOT NULL,
  `cuenta_confirmada_usuario` tinyint(1) NOT NULL,
  `password_usuario` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `permisos_usuario` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `id_cliente_usuario`, `nombre_usuario`, `apellido_usuario`, `mail_usuario`, `telefono_usuario`, `codigo_mail_usuario`, `cuenta_confirmada_usuario`, `password_usuario`, `permisos_usuario`) VALUES
(1, 1, 'Franco', 'Di Leo', 'dileo.francoj@gmail.com', '1144739222', 'abahyuhamsoAfD923', 1, '81dc9bdb52d04dc20036dbd8313ed055', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id_carrito`),
  ADD KEY `FK_COMPRA_CARRITO` (`id_compra_carrito`),
  ADD KEY `FK_PRODUCTO_CARRITO` (`id_producto_carrito`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id_compra`);

--
-- Indices de la tabla `configuracion`
--
ALTER TABLE `configuracion`
  ADD PRIMARY KEY (`id_configuracion`),
  ADD KEY `FK_CLIENTE_CONFIGURACION` (`id_cliente_configuracion`);

--
-- Indices de la tabla `contenido`
--
ALTER TABLE `contenido`
  ADD PRIMARY KEY (`id_contenido`),
  ADD KEY `FK_CONTENIDO_CLIENTE` (`id_cliente_contenido`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `tipo_contenido`
--
ALTER TABLE `tipo_contenido`
  ADD PRIMARY KEY (`id_tc`),
  ADD KEY `FK_CONTENIDO_TC` (`id_contenido_tc`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `FK_CLIENTE_USUARIO` (`id_cliente_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id_carrito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `id_compra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `configuracion`
--
ALTER TABLE `configuracion`
  MODIFY `id_configuracion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `contenido`
--
ALTER TABLE `contenido`
  MODIFY `id_contenido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `tipo_contenido`
--
ALTER TABLE `tipo_contenido`
  MODIFY `id_tc` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `FK_COMPRA_CARRITO` FOREIGN KEY (`id_compra_carrito`) REFERENCES `compra` (`id_compra`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_PRODUCTO_CARRITO` FOREIGN KEY (`id_producto_carrito`) REFERENCES `productos` (`id_producto`);

--
-- Filtros para la tabla `configuracion`
--
ALTER TABLE `configuracion`
  ADD CONSTRAINT `FK_CLIENTE_CONFIGURACION` FOREIGN KEY (`id_cliente_configuracion`) REFERENCES `clientes` (`id_cliente`);

--
-- Filtros para la tabla `contenido`
--
ALTER TABLE `contenido`
  ADD CONSTRAINT `FK_CONTENIDO_CLIENTE` FOREIGN KEY (`id_cliente_contenido`) REFERENCES `clientes` (`id_cliente`);

--
-- Filtros para la tabla `tipo_contenido`
--
ALTER TABLE `tipo_contenido`
  ADD CONSTRAINT `FK_CONTENIDO_TC` FOREIGN KEY (`id_contenido_tc`) REFERENCES `contenido` (`id_contenido`) ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `FK_CLIENTE_USUARIO` FOREIGN KEY (`id_cliente_usuario`) REFERENCES `clientes` (`id_cliente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
