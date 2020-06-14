-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 14-Jun-2020 às 14:53
-- Versão do servidor: 5.7.26
-- versão do PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `opcao_pergunta`
--

DROP TABLE IF EXISTS `opcao_pergunta`;
CREATE TABLE IF NOT EXISTS `opcao_pergunta` (
  `id_opcao` int(11) NOT NULL AUTO_INCREMENT,
  `id_pergunta_quiz` int(11) NOT NULL,
  `opcao` varchar(255) NOT NULL,
  `correto` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_opcao`),
  KEY `fk_id_pergunta_quiz_pergunta_quiz` (`id_pergunta_quiz`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `opcao_pergunta`
--

INSERT INTO `opcao_pergunta` (`id_opcao`, `id_pergunta_quiz`, `opcao`, `correto`) VALUES
(1, 1, 'Adobe Audition', 1),
(2, 1, 'Adobe Photoshop', 0),
(3, 1, 'Microsoft Visual Studio', 0),
(4, 2, 'Edição de Vídeo', 0),
(5, 2, 'Edição de Texto', 0),
(6, 2, 'Edição de Imagens Vetoriais', 1),
(7, 3, 'Sagres', 0),
(8, 3, 'Casal García', 0),
(9, 3, 'Canon', 1),
(10, 4, 'Adobe XD', 1),
(11, 4, 'Adobe After Effects', 0),
(12, 4, 'Adobe Photoshop', 0),
(13, 5, 'Programação', 0),
(14, 5, 'Marcação', 1),
(15, 5, 'Estilização', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pergunta_quiz`
--

DROP TABLE IF EXISTS `pergunta_quiz`;
CREATE TABLE IF NOT EXISTS `pergunta_quiz` (
  `id_pergunta_quiz` int(11) NOT NULL AUTO_INCREMENT,
  `id_quiz` int(11) NOT NULL,
  `pergunta` varchar(255) NOT NULL,
  PRIMARY KEY (`id_pergunta_quiz`),
  KEY `fk_id_quiz_quiz` (`id_quiz`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pergunta_quiz`
--

INSERT INTO `pergunta_quiz` (`id_pergunta_quiz`, `id_quiz`, `pergunta`) VALUES
(1, 1, 'Qual destes é um software de edição de som?'),
(2, 1, 'O Adobe Illustrator é um software de quê?'),
(3, 1, 'Qual das seguintes é uma marca de cameras fotográficas?'),
(4, 1, 'Qual dos seguintes softwares é utilizado para Web Design?'),
(5, 1, 'HTML pertence a que tipo de linguagem?');

-- --------------------------------------------------------

--
-- Estrutura da tabela `quiz`
--

DROP TABLE IF EXISTS `quiz`;
CREATE TABLE IF NOT EXISTS `quiz` (
  `id_quiz` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  PRIMARY KEY (`id_quiz`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `quiz`
--

INSERT INTO `quiz` (`id_quiz`, `titulo`) VALUES
(1, 'Multimédia');

-- --------------------------------------------------------

--
-- Estrutura da tabela `resposta_utilizador`
--

DROP TABLE IF EXISTS `resposta_utilizador`;
CREATE TABLE IF NOT EXISTS `resposta_utilizador` (
  `id_resposta` int(11) NOT NULL AUTO_INCREMENT,
  `id_pergunta_quiz` int(11) NOT NULL,
  `id_opcao` int(11) NOT NULL,
  `id_utilizador` int(11) NOT NULL,
  PRIMARY KEY (`id_resposta`),
  KEY `fk_id_pergunta_quiz2_pergunta_quiz2` (`id_pergunta_quiz`),
  KEY `fk_id_opcao_opcao_pergunta` (`id_opcao`),
  KEY `fk_id_utilizador_utilizador` (`id_utilizador`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `resposta_utilizador`
--

INSERT INTO `resposta_utilizador` (`id_resposta`, `id_pergunta_quiz`, `id_opcao`, `id_utilizador`) VALUES
(10, 1, 1, 1),
(11, 2, 5, 1),
(12, 3, 8, 1),
(13, 4, 10, 1),
(14, 5, 15, 1),
(15, 1, 2, 1),
(16, 2, 5, 1),
(17, 3, 9, 1),
(18, 4, 10, 1),
(19, 5, 14, 1),
(20, 1, 1, 1),
(21, 2, 5, 1),
(22, 3, 8, 1),
(23, 4, 10, 1),
(24, 5, 14, 1),
(25, 1, 1, 1),
(26, 2, 6, 1),
(27, 3, 9, 1),
(28, 4, 10, 1),
(29, 5, 14, 1),
(30, 1, 1, 1),
(31, 2, 5, 1),
(32, 3, 8, 1),
(33, 4, 11, 1),
(34, 5, 15, 1),
(35, 1, 1, 1),
(36, 1, 1, 1),
(37, 2, 5, 1),
(38, 3, 8, 1),
(39, 4, 10, 1),
(40, 5, 14, 1),
(41, 1, 1, 2),
(42, 2, 5, 2),
(43, 3, 8, 2),
(44, 4, 10, 2),
(45, 5, 14, 2),
(46, 1, 1, 1),
(47, 2, 5, 1),
(48, 3, 8, 1),
(49, 4, 10, 1),
(50, 5, 14, 1),
(66, 1, 1, 1),
(67, 1, 1, 1),
(68, 2, 5, 1),
(69, 3, 8, 1),
(70, 4, 11, 1),
(71, 1, 1, 1),
(72, 2, 5, 1),
(73, 3, 8, 1),
(74, 1, 1, 1),
(75, 2, 5, 1),
(82, 1, 1, 1),
(83, 2, 5, 1),
(84, 1, 1, 1),
(85, 2, 6, 1),
(86, 3, 8, 1),
(87, 4, 10, 1),
(88, 5, 14, 1),
(89, 1, 1, 1),
(90, 2, 5, 1),
(91, 3, 8, 1),
(92, 4, 10, 1),
(93, 5, 14, 1),
(94, 1, 1, 2),
(95, 2, 5, 2),
(96, 3, 9, 2),
(97, 4, 10, 2),
(98, 5, 14, 2),
(99, 1, 1, 2),
(100, 1, 1, 1),
(101, 2, 6, 1),
(102, 3, 8, 1),
(103, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `utilizador`
--

DROP TABLE IF EXISTS `utilizador`;
CREATE TABLE IF NOT EXISTS `utilizador` (
  `id_utilizador` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id_utilizador`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `utilizador`
--

INSERT INTO `utilizador` (`id_utilizador`, `nome`, `email`, `password`) VALUES
(1, 'Hugo', 'hvdias98@gmail.com', 'hugo'),
(2, 'Rodas', 'fixe@gmail.com', '12345');

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `opcao_pergunta`
--
ALTER TABLE `opcao_pergunta`
  ADD CONSTRAINT `fk_id_pergunta_quiz_pergunta_quiz` FOREIGN KEY (`id_pergunta_quiz`) REFERENCES `pergunta_quiz` (`id_pergunta_quiz`);

--
-- Limitadores para a tabela `pergunta_quiz`
--
ALTER TABLE `pergunta_quiz`
  ADD CONSTRAINT `fk_id_quiz_quiz` FOREIGN KEY (`id_quiz`) REFERENCES `quiz` (`id_quiz`);

--
-- Limitadores para a tabela `resposta_utilizador`
--
ALTER TABLE `resposta_utilizador`
  ADD CONSTRAINT `fk_id_pergunta_quiz2_pergunta_quiz2` FOREIGN KEY (`id_pergunta_quiz`) REFERENCES `pergunta_quiz` (`id_pergunta_quiz`),
  ADD CONSTRAINT `fk_id_utilizador_utilizador` FOREIGN KEY (`id_utilizador`) REFERENCES `utilizador` (`id_utilizador`) ON DELETE CASCADE,
  ADD CONSTRAINT `resposta_utilizador_ibfk_1` FOREIGN KEY (`id_opcao`) REFERENCES `opcao_pergunta` (`id_opcao`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
