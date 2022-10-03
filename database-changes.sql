/*
 Date: 02/10/2022 19:44:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for imagine_article_comments
-- ----------------------------
DROP TABLE IF EXISTS `imagine_article_comments`;
CREATE TABLE `imagine_article_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `imagine_article_comments.article` (`article_id`),
  KEY `imagine_article_comments.user` (`user_id`),
  CONSTRAINT `imagine_article_comments.article` FOREIGN KEY (`article_id`) REFERENCES `imagine_articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `imagine_article_comments.user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of imagine_article_comments
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for imagine_articles
-- ----------------------------
DROP TABLE IF EXISTS `imagine_articles`;
CREATE TABLE `imagine_articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `imagine_articles.user` (`user_id`),
  CONSTRAINT `imagine_articles.user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of imagine_articles
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for imagine_config
-- ----------------------------
DROP TABLE IF EXISTS `imagine_config`;
CREATE TABLE `imagine_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_name` varchar(255) NOT NULL,
  `logo_url` varchar(255) NOT NULL,
  `nitro_url` varchar(255) NOT NULL,
  `group_badge_url` varchar(255) DEFAULT NULL,
  `discord_url` varchar(255) DEFAULT NULL,
  `discord_widget` varchar(255) DEFAULT NULL,
  `facebook_url` varchar(255) DEFAULT NULL,
  `twitter_url` varchar(255) DEFAULT NULL,
  `instagram_url` varchar(255) DEFAULT NULL,
  `snapchat_url` varchar(255) DEFAULT NULL,
  `date_format` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of imagine_config
-- ----------------------------
BEGIN;
INSERT INTO `imagine_config` VALUES (1, 'Habboon', 'https://www.habboon.pw/img/logo-pride.png', 'dd', 'https://client.habbo.ng/assets/c_images/Badgeparts/generated', 'https://discord.gg/habboon', '<iframe src=\"https://discord.com/widget?id=1013234832807034911&theme=dark\" width=\"350\" height=\"500\" allowtransparency=\"true\" frameborder=\"0\" sandbox=\"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts\"></iframe>', 'https://www.facebook.com/habboonltd/', 'https://twitter.com/habboonpw', 'https://www.instagram.com/officialhabboon/', 'https://www.snapchat.com/add/boonltd', 'MM-DD-YYYY');
COMMIT;

-- ----------------------------
-- Table structure for imagine_sessions
-- ----------------------------
DROP TABLE IF EXISTS `imagine_sessions`;
CREATE TABLE `imagine_sessions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `imagine_sessions.user` (`user_id`),
  CONSTRAINT `imagine_sessions.user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of imagine_sessions
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
