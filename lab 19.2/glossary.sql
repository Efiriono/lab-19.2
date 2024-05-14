-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 14 2024 г., 19:22
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `glossary`
--

-- --------------------------------------------------------

--
-- Структура таблицы `terms`
--

CREATE TABLE `terms` (
  `id` int NOT NULL,
  `letter` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `term` text COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `cite` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `terms`
--

INSERT INTO `terms` (`id`, `letter`, `term`, `description`, `cite`) VALUES
(1, 'А', 'Авторитетность', 'Имеющий авторитет, заслуживающий признания, доверия и уважения...', 'Н. Н. Суханов, «Записки о революции / Книга 4», 1918–1921 г.'),
(2, 'А', 'Адаптация', 'Адаптация (лат. adapto «приспособляю») — приспособление строения и функций...', 'Материал из Википедии — свободной энциклопедии'),
(3, 'А', 'Аддикция', 'Адди́кция (англ. addiction — зависимость, пагубная привычка, привыкание), в широком смысле, — ощущаемая человеком навязчивая потребность в определённой деятельности...', 'Материал из Википедии — свободной энциклопедии'),
(4, 'А', 'Альтруизм', 'Альтруи́зм (лат. Alter — другой, другие) — понятие, которым осмысляется активность, связанная с бескорыстной заботой о благополучии других; соотносится с понятием самоотверженность — то есть с приношением в жертву своих выгод в пользу блага другого человека, других людей или в целом — ради общего блага.', 'Материал из Википедии — свободной энциклопедии'),
(5, 'А', 'Атрибуция', 'Атрибуция (лат. attributio — приписывание) — психологический термин, обозначающий механизм объяснения причин поведения другого человека.', 'Материал из Википедии — свободной энциклопедии'),
(6, 'А', 'Аффилиация', 'Аффилиация (аффиляция, англ. affiliation — «соединение, связь» от позднелатинского filialis — «сыновний») — это стремление быть в обществе других людей, потребность человека в создании тёплых, доверительных, эмоционально значимых отношений с другими людьми...', 'Материал из Википедии — свободной энциклопедии'),
(7, 'Б', 'Базальные эмоции', 'Базальные эмоции — теоретический конструкт, объединяющий эмоции минимального набора, на базе которых формируется все многообразие эмоциональных процессов и состояний...', 'Материал из Википедии — свободной энциклопедии'),
(8, 'Б', 'Бионика', 'Био́ника (от др.-греч. βίον «живущее») — прикладная наука о применении в технических устройствах и системах принципов организации, свойств, функций и структур живой природы, то есть формах живого в природе и их промышленных аналогах.', 'Материал из Википедии — свободной энциклопедии'),
(9, 'В', 'Внушаемость', 'Внушаемость — степень восприимчивости к внушению, определяемая субъективной готовностью подвергнуться и подчиниться внушающему воздействию.', 'Материал из Википедии — свободной энциклопедии'),
(10, 'Г', 'Групповой нарциссизм', 'Групповой нарциссизм (или коллективный нарциссизм) — феномен, при котором индивиды преувеличивают позитивный образ и важность группы, к которой принадлежат...', 'Материал из Википедии — свободной энциклопедии'),
(11, 'Д', 'Дебрифинг', 'Дебри́финг — одноразовая слабоструктурированная психологическая беседа с человеком, пережившим экстремальную ситуацию или психологическую травму...', 'Материал из Википедии — свободной энциклопедии');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `terms`
--
ALTER TABLE `terms`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `terms`
--
ALTER TABLE `terms`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;