
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) DEFAULT '',
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;


INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`)
VALUES
	(1,'bob@node.se','$2b$10$7s4yfYXT.9ElDSEzW0xw6uv1gE99u45HlK9ESjjbshfAnRhbhqqce','Bob','Node'),
	(2,'ben@node.se','$2b$10$9HqnbybYby9JQI1o0srtMe4p4ip4PtEhVoUlNNpbKcgTZvufWpOEG','Ben','Node');

UNLOCK TABLES;


CREATE TABLE `playlists` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `playlists` WRITE;

INSERT INTO `playlists` (`user_id`, `name`)
VALUES
    (1,'test_playlist'),
    (1,'test_playlist'),

UNLOCK TABLES;


CREATE TABLE `songs` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `title` varchar(255) DEFAULT NULL   ,
  `artist` varchar(255) DEFAULT NULL,
  `album` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `songs` WRITE;

INSERT INTO `songs` (`user_id`, `id`, `title`, `artist`, `album`)
VALUES
	(1,'xcdTeSt9','test_title', 'test_artist', 'test_album'),
	(2,'xcdTeSt7','test_title', 'test_artist', 'test_album'),

UNLOCK TABLES;


CREATE TABLE `ytm_cache` (
  `request_url` varchar(256) NOT NULL DEFAULT '',
  `response_body` json DEFAULT NULL,
  PRIMARY KEY (`request_url`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `ytm_cache` WRITE;
);

UNLOCK TABLES;