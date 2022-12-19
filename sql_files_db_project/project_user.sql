-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_ID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `passcode` varchar(100) NOT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  PRIMARY KEY (`user_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'JJ','j1234@gmail.com','$2b$10$muOuQGXnwGLYOsb8BRCoIuM6qDbx839ROiZPMsg3GVNXZ1LKp01.y','j1','j2','11111111','2022-12-18'),(2,'bara bara','kjf@gmail.com','$2b$10$frZK8EFgJXeByxup9gub3.KoYRwrD87PZBCNHUbpVeHI2mt3vByv2','zakhia','zak','','2022-12-18'),(3,'bara bara','brazilwinners@gmail.com','$2b$10$dYtK/p/ycgcIEeoKLHPju.6yK.k71XCvQH9c/NV.0uDqxwYX/1In.','cristiano','ronaldo','123456789','2022-12-18'),(4,'jjj','j123@gmail.com','$2b$10$4VAcIyR98dF7yiEGHpv5W.Jdh9wahiYDqHuuAk2F2w02GLdqsHmKe','123','123','7654321','2022-12-18'),(5,'jj','123@gmail.com','$2b$10$3h.Mr46YZf.XuSkd9zHPmOrGR3uobzb5Ot8GlF6dA6KIlAYvqaJ4m','jude','s','12312333','2022-12-18'),(6,'jlo','123@gmail.com','$2b$10$0bA8rAtbATCJ0uXZsCdkmu7YCtXX43kxjNDbItou1ArL/e1lLi/jm','JLO','jlo','123456','2022-12-18'),(7,'qwe','qwe@gmail.com','$2b$10$i8zM16N7R4jRXmqTsu1GBONesKwJFBOfCpfI8KIiL3.IcPbdEnL3O','123','123','123','2022-12-18'),(8,'123','12345@gmail.com','$2b$10$O0B9zSjdjm3Ekm4Q3TwZrOpog42ESBmMqoJuSMqU0ac0hi43Meqse','123','123','12345','2022-12-18'),(9,'ttt','ttt@gmail.com','$2b$10$7wQ1ZTV36gYTIT4KpIDR6uI64OHy8UBXkBR/.bUk7KbAQLS06uqOm','ttt','ttt','1234','2022-12-18'),(10,'italian','italian@gmail.com','$2b$10$BpdF6ur.OfrITRSlFFsOgevaA9LXe4.0.YiCOcqprZUb1L7CS8/92','italian','italian','123456789','2022-12-18'),(11,'JJ','zakhia@gmail.com','$2b$10$g0r2MCPPxBtF7Z0hmdyIiOc0lwYoT7nMcNa0JPB5y2MI0zhbZTpVe','zakhia','zakhia','123','2022-12-18'),(12,'a','b@gmail.com','$2b$10$2pbiyAnC0ES7VN8zXbUaAO4osVR8UgoeQbf1qCRcCHOeM1JAQcUN.','d','e','f','2022-12-18'),(13,'anthony','anthony@gmail.com','$2b$10$8BRIHwZrY6dKX6AFAhLRZOjQMe1UBM4xxMeQ9gFt7267RhpwA6Lly','anthony','fadel','6868','2022-12-18'),(14,'sami','sami@gmail.com','$2b$10$MuEuWI.SaP6Zc4B6Hg3lvOacKhHGDb9/eorFkZlglPJGETMALTHlm','sami','sami','123456789','2022-12-18'),(15,'Jude Soueid','jude@gmail.com','$2b$10$dmG/6RjHM/CifoQwZddQ4uMQ9bujLYJ4QGNtMXff8RGCX52dJkcc.','jude','soueid','01234567','2022-12-18'),(16,'tom','tom@hotmail.com','$2b$10$dZlLv0ljNdSGV9Zprlc/L.ijNAZ3R4zRh8frM558I/AdsZrPj6ZNO','tom','tom','123456','2022-12-18'),(17,'jimmy','jimmy@hotmail.com','$2b$10$MddrkP7Hthg3LnnrNJtWFeJCLRw5PmzeQiqvrFlJWunaYFZFk94Qm','jimmy','jimmy','8382745','2022-12-19'),(18,'maldini','maldini@gmail.com','$2b$10$Q9Wr3MtJ.6hAjAGxMZz39OurENuXLkuJ3Oa6eonu164FXOoVnk1VC','maldini','maldini','01234593','2022-12-19');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-19  3:37:34
