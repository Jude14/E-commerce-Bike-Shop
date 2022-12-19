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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `Product_ID` int NOT NULL AUTO_INCREMENT,
  `Category_ID` int NOT NULL,
  `Discount_Name` varchar(30) DEFAULT NULL,
  `Product_Name` varchar(30) DEFAULT NULL,
  `Product_description` varchar(100) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `modified_at` date DEFAULT NULL,
  `img_link` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Product_ID`),
  KEY `Discount_Name` (`Discount_Name`),
  KEY `Category_ID` (`Category_ID`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`Discount_Name`) REFERENCES `product_discount` (`Discount_Name`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`Category_ID`) REFERENCES `product_category` (`Category_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,1,'disc_name1','Scott MTB','used for mountain tracks',700,'2022-02-02','2022-02-02','https://images.unsplash.com/photo-1608531428470-4471739c4359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1127&q=80'),(2,1,'disc_name1','Badger Road Bike','smooth riding',620,'2020-02-02','2020-02-02','https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),(3,2,'disc_name1','Race Helmet','safe for high speeds',90,'2020-02-02','2020-02-02','https://images.unsplash.com/photo-1591511275477-88f079d88154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),(4,2,NULL,'City Helmet','for city use',75,'2020-02-02','2020-02-02','https://images.unsplash.com/photo-1596731530340-64945278d9f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1114&q=80'),(5,3,NULL,'Shimano Chain','this is the chain descrition',35,'2020-02-02','2020-02-02','https://images.unsplash.com/photo-1517263975512-e1e9172f466b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'),(6,3,'disc_name1','Renold Disk','this is the disk descrition',47,'2020-02-02','2020-02-02','https://images.unsplash.com/photo-1469535327624-436c26d1cf1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),(7,1,NULL,'Scott YZ40','used for off-roading',851,'2022-11-29','2022-11-29','https://p.vitalmtb.com/photos/products/13526/photos/13898/original_SCOTT_Voltage_YZ_0.2_Bike.jpg?VersionId=MDF_BToD_mq6iJCcwFlAw42J9.r8ALSA'),(8,1,'disc_name2','snow bike','efficient in cold weather',1199,'2022-12-01','2022-12-01','https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwb8c86591/images/specials/Fat-bike-Dude-wheels-US3.jpg?sw=1280'),(9,1,NULL,'canyon road bike','used for long distances',1599,'2022-12-01','2022-12-01','https://cyclingtips.com/wp-content/uploads/2021/01/2021-Canyon-Ultimate-CF-SL-Disc-8-road-bike-review-cyclingtips-Field-test-1-1.jpg'),(10,1,NULL,'BMX','freestyle bike',560,'2022-12-01','2022-12-01','https://www.pixelstalk.net/wp-content/uploads/2016/08/Bmx-Image-HD.jpg'),(11,2,'disc_name2','Gambit Helmet','used for off-roading',165,'2022-12-01','2022-12-01','https://images.immediate.co.uk/production/volatile/sites/21/2022/01/Specialized-Gambit-helmet-01-07385a3.jpg?quality=90&resize=620,413'),(12,3,NULL,'Fixable Pedals','provide more stability',82,'2022-12-01','2022-12-01','https://trek.scene7.com/is/image/TrekBicycleProducts/Shoes_pedals_marquee_reup?$responsive-pjpg$&cache=on,on&wid=1920');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
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
