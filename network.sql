SET time_zone = "+00:00";

DROP DATABASE IF EXISTS personal;
CREATE DATABASE IF NOT EXISTS personal;
USE music;

-- USER TABLES

CREATE TABLE `media` (
	`media_id` char(8),
	`media_path` varchar(256),
	`media_type` varchar(32),
	`media_created` timestamp DEFAULT CURRENT_TIMESTAMP,
	`user_id` char(24),
	PRIMARY KEY (`media_id`),
	UNIQUE KEY `media_id` (`media_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `post` (
	`post_id` char(8),
	`post_title` text,
	`post_content` longtext,
	`post_created` timestamp DEFAULT CURRENT_TIMESTAMP,
	`post_author` char(24),
	PRIMARY KEY (`post_id`),
	UNIQUE KEY `post_id` (`post_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
