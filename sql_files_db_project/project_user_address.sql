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
-- Table structure for table `user_address`
--

DROP TABLE IF EXISTS `user_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_address` (
  `address_ID` int NOT NULL AUTO_INCREMENT,
  `user_ID` int NOT NULL,
  `governate` varchar(50) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `address_line1` varchar(100) DEFAULT NULL,
  `floorNB` decimal(4,0) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `type` varchar(20) NOT NULL DEFAULT 'home',
  PRIMARY KEY (`address_ID`),
  KEY `user_ID` (`user_ID`),
  CONSTRAINT `user_address_ibfk_1` FOREIGN KEY (`user_ID`) REFERENCES `user` (`user_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_address`
--

LOCK TABLES `user_address` WRITE;
/*!40000 ALTER TABLE `user_address` DISABLE KEYS */;
INSERT INTO `user_address` VALUES (1,1,'lebanon','jbeil','street 22',11,'1234567','work'),(2,1,'lebanon','jbeil','street 22',11,'1234567','home'),(3,2,'lebanon','tripoli','street 27',11,'1234567','home'),(4,2,'lebanon','batroun','street 7',11,'1234567','work'),(5,3,'lebanon','batroun','street 7',11,'1234567','work'),(6,4,'lebanon','beirut','street 7',11,'1234567','work'),(7,3,'lebanon','saida','street 217',5,'1234567','home'),(8,4,'lebanon','saida','street 217',5,'1234567','home'),(10,5,'lebanon','blat','street 13',5,'1234567','home'),(11,5,'lebanon','blat','street 13',5,'1234567','work'),(12,6,'lebanon','jbeil','street 75',5,'1234567','work'),(13,6,'lebanon','amchit','street 5',5,'1234567','home'),(14,7,'lebanon','amchit','street 38',1,'1234567','home'),(15,7,'lebanon','amchit','street 38',1,'1234567','work'),(16,8,'mount-lebanon','jounieh','street 1',21,'1234567','work'),(17,8,'mount-lebanon','jounieh','street 1',21,'1234567','home'),(18,9,'mount-lebanon','jounieh','street 13',1,'1234567','home'),(19,9,'mount-lebanon','zouk','street 73',2,'1234567','work'),(20,10,'sicily','palermo','street 43',3,'1200000','work'),(21,10,'torino','pmilan','street 3',1,'1200000','home'),(22,11,'b','b',NULL,2,'76543','home'),(23,11,'a','a',NULL,3,'76543','home'),(24,12,'g','h','k',2,'76543','Home'),(25,12,'l','ddddd','4',6,'76543','Work'),(26,13,'jbeil','jbeil','B2/4',2,'76543','Home'),(27,13,'anthony','jbeil','hi my name',-12,'76543','Work'),(28,14,'beirut','down town','street 2',3,'876543','Home'),(29,14,'jbeil','amchit','lola',-4,'86754534','Work'),(30,15,'Beirut','Beirut','street 55',2,'01234567','Home'),(31,15,'Jbeil','blat','street 4',2,'04123456','Work'),(32,16,'beirut','beirut','street 4',2,'234567','Home'),(33,16,'beirut','beirut','street 2',5,'786543','Work'),(34,17,'mount-lebanon','jounieh','street 4 building 15',3,'09736252','Home'),(35,17,'beirut','beirut','street 4',2,'73726364','Work'),(36,18,'milan','porto','street 4',3,'123456','Home'),(37,18,'milan','porto','block 17',6,'123456','Work');
/*!40000 ALTER TABLE `user_address` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-19  3:37:35
