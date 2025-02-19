-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13/11/2024 às 01:20
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `hcm`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `empresas`
--

CREATE TABLE `empresas` (
  `razao_social` varchar(150) NOT NULL,
  `nome_fantasia` varchar(100) NOT NULL,
  `cnpj` char(14) NOT NULL,
  `insc_estadual` varchar(20) NOT NULL,
  `insc_municipal` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `empresas`
--

INSERT INTO `empresas` (`razao_social`, `nome_fantasia`, `cnpj`, `insc_estadual`, `insc_municipal`) VALUES
('teste', 'teste', '123', '123', '123'),
('teste', 'teste', '123', '123', '123');

-- --------------------------------------------------------

--
-- Estrutura para tabela `funcionarios`
--

CREATE TABLE `funcionarios` (
  `matricula` varchar(12) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `cargo` varchar(35) NOT NULL,
  `setor` int(11) NOT NULL,
  `lotacao` int(11) NOT NULL,
  `remuneracao` decimal(10,2) NOT NULL,
  `dt_inicio_contrato` date NOT NULL,
  `dt_fim_contrato` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `funcionarios`
--

INSERT INTO `funcionarios` (`matricula`, `nome`, `cargo`, `setor`, `lotacao`, `remuneracao`, `dt_inicio_contrato`, `dt_fim_contrato`) VALUES
('111', 'teste', 'teste', 111, 111, 111.00, '2024-11-13', NULL),
('123', 'teste', 'teste', 0, 0, 11111.00, '2024-11-29', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `pessoas`
--

CREATE TABLE `pessoas` (
  `id` int(11) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `endereco` varchar(200) NOT NULL,
  `cep` char(8) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `cpf` char(11) NOT NULL,
  `rg` varchar(15) NOT NULL,
  `pis` char(11) NOT NULL,
  `dt_nascimento` date NOT NULL,
  `nacionalidade` varchar(50) NOT NULL,
  `genero` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `pessoas`
--

INSERT INTO `pessoas` (`id`, `nome`, `endereco`, `cep`, `telefone`, `cpf`, `rg`, `pis`, `dt_nascimento`, `nacionalidade`, `genero`) VALUES
(8, 'teste', 'teste', '1111', '111', '111', '111', '111', '2024-11-28', 'teste', 't');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  ADD PRIMARY KEY (`matricula`);

--
-- Índices de tabela `pessoas`
--
ALTER TABLE `pessoas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `pessoas`
--
ALTER TABLE `pessoas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
