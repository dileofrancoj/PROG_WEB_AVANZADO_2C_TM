-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Servidor: 3.18.6.71:3306
-- Tiempo de generación: 21-11-2019 a las 13:39:48
-- Versión del servidor: 5.6.40-log
-- Versión de PHP: 5.6.40-1+ubuntu16.04.1+deb.sury.org+2+will+reach+end+of+life+in+april+2019

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
  `id_cliente_carrito` int(11) NOT NULL,
  `id_compra_carrito` int(11) DEFAULT NULL,
  `id_producto_carrito` int(11) NOT NULL,
  `fecha_carrito` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id_carrito`, `id_usuario_carrito`, `id_cliente_carrito`, `id_compra_carrito`, `id_producto_carrito`, `fecha_carrito`) VALUES
(62, 33, 1, 32, 17, '2019-11-11 14:28:57'),
(64, 33, 1, 33, 16, '2019-11-11 20:05:52'),
(65, 33, 1, 34, 16, '2019-11-11 20:07:26'),
(66, 33, 1, NULL, 16, '2019-11-11 20:19:47'),
(67, 34, 1, 35, 16, '2019-11-11 20:57:53'),
(68, 35, 1, 36, 16, '2019-11-12 20:02:57'),
(69, 35, 1, 36, 17, '2019-11-12 20:03:07'),
(70, 35, 1, 37, 16, '2019-11-12 20:07:28'),
(72, 35, 1, 38, 16, '2019-11-17 22:01:54'),
(75, 35, 1, 39, 16, '2019-11-17 22:47:25'),
(76, 35, 1, 40, 17, '2019-11-17 22:49:26'),
(77, 35, 1, 41, 16, '2019-11-17 22:50:27'),
(78, 35, 1, 42, 16, '2019-11-18 00:05:01'),
(79, 37, 1, 43, 16, '2019-11-18 00:12:57'),
(80, 37, 1, 44, 16, '2019-11-18 00:17:29'),
(82, 37, 1, 45, 16, '2019-11-18 00:26:01'),
(83, 37, 1, 46, 16, '2019-11-18 00:27:43'),
(84, 37, 1, 47, 16, '2019-11-18 00:29:41'),
(85, 37, 1, 48, 16, '2019-11-18 00:34:41'),
(86, 37, 1, 49, 16, '2019-11-18 00:35:40');

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
  `telefono_cliente` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `url_cliente` varchar(255) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `nombre_cliente`, `fechaRegistro_cliente`, `estado_cliente`, `usuario_cliente`, `password_cliente`, `mail_cliente`, `password_mail_cliente`, `telefono_cliente`, `url_cliente`) VALUES
(1, 'Alejo', '2019-10-05 14:52:25', 1, 'ysya', '81dc9bdb52d04dc20036dbd8313ed055', 'dileo.francoj@gmail.com', 'seretonystark1512', '15631234', '');

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
  `direccion_compra` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `url_compra` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id_compra_d` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`id_compra`, `id_usuario_compra`, `monto_compra`, `fecha_compra`, `estado_compra`, `token_compra`, `direccion_compra`, `url_compra`, `id_compra_d`) VALUES
(32, 33, 1500, '2019-11-11 20:01:36', 0, '77a75972-a8df-4e45-b3ad-f800c237ddc8', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-2c7305d6-f840-4f5c-8713-7a3945c73dbe', NULL),
(33, 33, 2500, '2019-11-11 20:06:10', 0, '7bd6a903-38ed-4bc8-b146-695cfb0ad8ee', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-abaac651-5c31-445f-9555-d85aeccf1e73', NULL),
(34, 33, 2590, '2019-11-11 20:16:06', 0, 'e9e7d36d-57df-4818-8fce-b78343f3d434', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-9922ca70-e738-4550-81c1-f270ce312b2f', 1),
(35, 34, 2590, '2019-11-11 21:08:24', 0, '1328de9f-3a2a-4e11-8a7d-8fd5e8df20d0', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-05ea22ec-c9c5-4d58-8dc7-68a9c1d60c95', 1),
(36, 35, 2400, '2019-11-12 20:03:45', 0, '2ea99606-f8e2-407e-87f5-b5f8229f2e17', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-be481442-f8da-49dd-bc9d-8cde9be16740', 1),
(37, 35, 1400, '2019-11-14 19:19:57', 0, 'bdedd3ae-c346-43b2-abf0-f5d7cf29ed13', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-563934eb-046f-4a26-8ce9-dd3bbb23bcea', 1),
(38, 35, 2, '2019-11-17 22:44:18', 0, '3d44a87d-63b1-4346-8424-ab9effbf0625', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-4e0753c0-df47-4bd8-b258-43209018754b', 1),
(39, 35, 2, '2019-11-17 22:47:37', 0, 'a9e390f3-cc83-47ff-8428-edf18d238b5e', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-43c620a4-ae16-4a47-9759-7f0eda8cc5ad', 1),
(40, 35, 2, '2019-11-17 22:49:38', 0, '36304ece-6eca-431f-b2f7-f2166e311410', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-10e8b159-a308-4b4c-ba34-be39fb783871', 1),
(41, 35, 2, '2019-11-17 22:50:37', 0, 'f08e2111-42e3-4296-8822-da76a06dce06', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-071d8e2a-fc6a-4cd1-a442-19fbf44678ae', 1),
(42, 35, 2, '2019-11-18 00:06:13', 0, '15a4a7fc-30ab-439d-b980-dd18a7f12a5a', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-541fe95a-26c1-4f8f-935a-bda79e20869b', 1),
(43, 37, 2, '2019-11-18 00:13:41', 0, '44f5f37c-11da-46e0-898c-2c3edfc94b81', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-536cdd83-970d-4e15-80c9-b5d92a4794d6', 1),
(44, 37, 2, '2019-11-18 00:20:47', 0, '6e0f71f4-4f9f-4da2-9614-d7027c5a06ea', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-d77c16c7-c8b4-4377-aba6-a0a60d98af0d', 1),
(45, 37, 2, '2019-11-18 00:26:40', 0, 'f7423a7b-20f9-4007-81c6-d4090459a514', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-b63fb814-f1c9-472a-86e0-a4a75d13bd41', 1),
(46, 37, 2, '2019-11-18 00:27:55', 0, '3a817815-09f5-4bdf-8bc4-cc50a73cb9b3', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-465cdc31-1441-4ab3-9d37-ad33300f7e62', 1),
(47, 37, 2, '2019-11-18 00:29:53', 0, '5a0343a6-e1b6-4f52-95e5-4c78afcb33fb', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-1a0a49d9-f2c0-4527-8c90-46fd9ef37a8d', 1),
(48, 37, 2, '2019-11-18 00:34:55', 0, '691903d2-68ef-4ad7-adf2-83671f248971', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-e81cf6e2-317f-4f69-b580-03b85c4cf939', 1),
(49, 37, 2, '2019-11-18 00:35:52', 0, '11001854-120e-4be4-afbf-1ee734339b64', NULL, 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=45517724-3aa211a8-7d67-4190-ba58-923ce9aa936b', 1);

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
  `titulo_contenido` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `ubicacion_contenido` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `precio_contenido` float DEFAULT NULL,
  `link_contenido` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha_contenido` date DEFAULT NULL COMMENT 'fecha de aparicion el sitio',
  `descripcion_contenido` text COLLATE utf8_spanish2_ci,
  `multimedia_contenido` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL COMMENT 'multimedia relacionado',
  `fecha_historial_contenido` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'cuando se subio el contenido',
  `estado_contenido` int(11) NOT NULL DEFAULT '1' COMMENT 'si el contenido está disponible o no',
  `id_tipo_contenido` int(11) NOT NULL,
  `id_cliente_contenido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `contenido`
--

INSERT INTO `contenido` (`id_contenido`, `titulo_contenido`, `ubicacion_contenido`, `precio_contenido`, `link_contenido`, `fecha_contenido`, `descripcion_contenido`, `multimedia_contenido`, `fecha_historial_contenido`, `estado_contenido`, `id_tipo_contenido`, `id_cliente_contenido`) VALUES
(11, 'Lollapalooza\n', 'Buenos Aires', 0, 'https://www.allaccess.com.ar/event/ysy-a-el-varon-del-trap', '2020-03-30', 'Lollapalooza', 'ysycolores.jpg', '2019-10-12 19:24:25', 1, 0, 1),
(12, 'Cosquin Rock', 'Córdoba', 0, 'https://www.eventbrite.es/e/entradas-ysy-a-el-varon-del-trap-en-vivo-73484651571', '2020-02-09', 'Cosquin Rock', 'ysycolores.jpg', '2019-10-15 00:32:41', 1, 0, 1),
(14, 'Lollapallooza ', 'Chile', 0, NULL, NULL, 'Lollapalloza Chile', 'ysycolores.jpg', '2019-11-12 16:28:02', 1, 0, 1),
(27, 'asd', '', 1, 'a', '2019-11-18', 'asd', '115d06bf-1285-4bc9-afc5-39968c15b472.jpg', '2019-11-18 21:52:04', 1, 0, 1),
(28, 'asd', '', 1, 'a', '2019-11-18', 'a', 'c93412c2-c2b3-4541-aa8b-0a1611d83acf.jpg', '2019-11-18 21:53:14', 1, 0, 1),
(29, 'asd', '', 1, '1', '2019-11-18', 'a', '35c500b4-8437-4847-bf94-a2c15993a558.jpg', '2019-11-18 21:53:34', 1, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direcciones`
--

CREATE TABLE `direcciones` (
  `id_d` int(11) NOT NULL,
  `id_c_d` int(11) NOT NULL,
  `id_u_d` int(11) NOT NULL,
  `calle_d` varchar(255) NOT NULL,
  `altura_d` int(11) NOT NULL,
  `cp_d` int(11) NOT NULL,
  `piso_d` varchar(255) NOT NULL,
  `provincia_d` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `direcciones`
--

INSERT INTO `direcciones` (`id_d`, `id_c_d`, `id_u_d`, `calle_d`, `altura_d`, `cp_d`, `piso_d`, `provincia_d`) VALUES
(4, 1, 33, 'Bonifacio', 1752, 1406, '6A', '6'),
(5, 1, 33, 'Bonifacio', 1752, 1406, '6A', '1'),
(6, 1, 34, 'Avenida do meio', 2209, 1704, '3', '1'),
(7, 1, 33, 'Bonifacio ', 1753, 1405, '6A', '3'),
(8, 1, 35, 'Bonifacio', 1752, 1406, '6A', '1'),
(9, 1, 35, 'Bonifacio', 1752, 1406, '6A', '1'),
(10, 1, 35, 'avenida de mayo', 2209, 1704, '3', '1'),
(11, 1, 37, 'avenida de mayo', 2209, 1704, '3', '1');

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
(16, 1, 'REMERA YSY A', 'Remera reflex diseño exlusivo realizada por YSY A.', 'assets/images/ysyahechoamano.jpg', 1, 1, 10),
(17, 1, 'YSY A - ANTEZANA', 'Disco Antezana - YSY A', 'assets/images/ysyaantezana.png', 1, 1, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE `provincia` (
  `id` smallint(2) NOT NULL,
  `provincia_nombre` varchar(50) NOT NULL,
  `precio_envio` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `provincia`
--

INSERT INTO `provincia` (`id`, `provincia_nombre`, `precio_envio`) VALUES
(1, 'Buenos Aires', 1),
(2, 'Capital Federal', 200),
(3, 'Catamarca', 300),
(4, 'Chaco', 300),
(5, 'Chubut', 300),
(6, 'Cordoba', 300),
(7, 'Corrientes', 300),
(8, 'Entre RÃ­os', 300),
(9, 'Formosa', 300),
(10, 'Jujuy', 300),
(11, 'La Pampa', 300),
(12, 'La Rioja', 300),
(13, 'Mendoza', 300),
(14, 'Misiones', 300),
(15, 'NeuquÃ©n', 300),
(16, 'RÃ­o Negro', 300),
(17, 'Salta', 300),
(18, 'San Juan', 300),
(19, 'San Luis', 300),
(20, 'Santa Cruz', 300),
(21, 'Santa Fe', 300),
(22, 'Santiago del Estero', 300),
(23, 'Tierra del Fuego', 300),
(24, 'Tucuman', 300);

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
(9, 1, 'Daniel', 'Benkó', 'dani@dani.com', '', '', 1, '55b7e8b895d047537e672250dd781555', 0),
(35, 1, 'Frantuko', 'Di leo', 'dileo.francoj@gmail.com', '0111544739222', '7e8bfef0-c960-4192-b0bb-b8459293eda6', 1, '81dc9bdb52d04dc20036dbd8313ed055', 0),
(37, 1, 'Ariel', 'Silva', 'arieel.argentina@gmail.com', '01159958761', '021c1e08-3ece-4cbd-841b-a829a40f3478', 1, 'e10adc3949ba59abbe56e057f20f883e', 0);

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
-- Indices de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD PRIMARY KEY (`id_d`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id_carrito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `id_compra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
--
-- AUTO_INCREMENT de la tabla `configuracion`
--
ALTER TABLE `configuracion`
  MODIFY `id_configuracion` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `contenido`
--
ALTER TABLE `contenido`
  MODIFY `id_contenido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  MODIFY `id_d` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT de la tabla `tipo_contenido`
--
ALTER TABLE `tipo_contenido`
  MODIFY `id_tc` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
