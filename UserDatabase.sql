-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 02, 2023 at 01:26 PM
-- Server version: 10.3.31-MariaDB-0+deb10u1
-- PHP Version: 7.3.31-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs230_u220132`
--

-- --------------------------------------------------------

--
-- Table structure for table `Home_Address`
--

CREATE TABLE `Home_Address` (
  `Address_ID` int(11) NOT NULL,
  `User_ID` int(11) DEFAULT NULL,
  `AddressLine1` varchar(255) NOT NULL,
  `AddressLine2` varchar(255) DEFAULT NULL,
  `Town` varchar(255) NOT NULL,
  `County` varchar(255) NOT NULL,
  `Eircode` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Home_Address`
--

INSERT INTO `Home_Address` (`Address_ID`, `User_ID`, `AddressLine1`, `AddressLine2`, `Town`, `County`, `Eircode`) VALUES
(2, 6, '584 Dane Stravenue', 'Apt. 485, 37215', 'West Clydechester', 'Pennsylvania', 'M68 K0P3'),
(3, 7, 'Unit 21 Barna Village Centre Galway', NULL, 'Barna', 'County Galway', 'H34 D3G5'),
(4, 8, '131 Beechdale', NULL, 'Dunboyne', 'County Meath', 'A86 YE37'),
(5, 9, 'Citywest Golf Club, Old Naas Road', NULL, 'South Dublin', 'County Dublin', 'D24 XE39'),
(6, 10, '15 Adrian Avenue', NULL, 'Dublin', 'County Dublin', 'D06 K767'),
(7, 11, 'Woodview, Sullivans Lane', NULL, 'Cork', 'County Cork', 'T12 V225'),
(8, 12, '10 Cabinteely Crescent', NULL, 'Dún Laoghaire-Rathdown', 'County Dublin', 'A94 P206'),
(9, 13, '5 Claremont Pines', NULL, 'Dún Laoghaire-Rathdown', ' County Dublin', 'D18 R9F3'),
(10, 14, '56 Castleknock Way', NULL, 'Blanchardstown', 'County Dublin', 'D34 H6Y9'),
(11, 15, '10 Maiden Crescent', NULL, 'Tobercurry', 'County Sligo', 'F78 H9L0'),
(12, 16, '9 Old Navan Road', NULL, 'Blanchardstown', 'County Dublin', 'D15 NX98'),
(14, 18, '655 birdland', '', 'Vegas', 'Cork', 'H76 G6J5'),
(15, 19, '3995 Fairlyland', '', 'Vegas', 'Ohio', 'W56 F7H0'),
(16, 20, '335 googleland', '', 'Blanchardstown', 'Mexico', 'D34 F5H8');

-- --------------------------------------------------------

--
-- Table structure for table `Shipping_Address`
--

CREATE TABLE `Shipping_Address` (
  `Address_ID` int(11) NOT NULL,
  `User_ID` int(11) DEFAULT NULL,
  `AddressLine1` varchar(255) NOT NULL,
  `AddressLine2` varchar(255) DEFAULT NULL,
  `Town` varchar(255) NOT NULL,
  `County` varchar(255) NOT NULL,
  `Eircode` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Shipping_Address`
--

INSERT INTO `Shipping_Address` (`Address_ID`, `User_ID`, `AddressLine1`, `AddressLine2`, `Town`, `County`, `Eircode`) VALUES
(2, 6, '584 Dane Stravenue', 'Apt. 485, 37215', 'West Clydechester', 'Pennsylvania', 'M68 K0P3'),
(3, 7, 'Unit 21 Barna Village Centre Galway', NULL, 'Barna', 'County Galway', 'H34 D3G5'),
(4, 8, '131 Beechdale', NULL, 'Dunboyne', 'County Meath', 'A86 YE37'),
(5, 9, 'Citywest Golf Club, Old Naas Road', NULL, 'South Dublin', 'County Dublin', 'D24 XE39'),
(6, 10, '15 Adrian Avenue', NULL, 'Dublin', 'County Dublin', 'D06 K767'),
(7, 11, 'Woodview, Sullivans Lane', NULL, 'Cork', 'County Cork', 'T12 V225'),
(8, 12, '10 Cabinteely Crescent', NULL, 'Dún Laoghaire-Rathdown', 'County Dublin', 'A94 P206'),
(9, 13, '5 Claremont Pines', NULL, 'Dún Laoghaire-Rathdown', ' County Dublin', 'D18 R9F3'),
(10, 14, '56 Castleknock Way', NULL, 'Blanchardstown', 'County Dublin', 'D34 H6Y9'),
(11, 15, '10 Maiden Crescent', NULL, 'Tobercurry', 'County Sligo', 'F78 H9L0'),
(12, 16, '9 Old Navan Road', NULL, 'Blanchardstown', 'County Dublin', 'D15 NX98'),
(14, 18, '655 birdland', '', 'Vegas', 'Cork', 'H76 G6J5'),
(15, 19, '3995 Fairlyland', '', 'Vegas', 'Ohio', 'W56 F7H0'),
(16, 20, '335 googleland', '', 'Blanchardstown', 'Mexico', 'D34 F5H8');

-- --------------------------------------------------------

--
-- Table structure for table `User_Information`
--

CREATE TABLE `User_Information` (
  `User_ID` int(11) NOT NULL,
  `Title` varchar(10) DEFAULT NULL,
  `FirstName` varchar(255) NOT NULL,
  `Surname` varchar(255) NOT NULL,
  `Mobile` varchar(20) NOT NULL,
  `EmailAddress` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `User_Information`
--

INSERT INTO `User_Information` (`User_ID`, `Title`, `FirstName`, `Surname`, `Mobile`, `EmailAddress`) VALUES
(6, 'Mr', 'Michael', 'Hill', '0856932456', 'Michaelh@gmail.com'),
(7, 'Mrs', 'John', 'Smith', '0867890987', 'fjdsiofjdoi@mgail.com'),
(8, 'Ms', 'Alice', 'Johnson', '+353871234568', 'alice.johnson@example.com'),
(9, 'Mrs', 'Karen', 'Taylor', '+353871234569', 'karen.taylor@example.com'),
(10, 'Mx', 'Sam', 'Brown', '+353871234570', 'sam.brown@example.com'),
(11, 'Miss', 'Olivia', 'Lee', '+353871234571', 'olivia.lee@example.com'),
(12, 'Dr', 'David', 'Jones', '+353871234572', 'david.jones@example.com'),
(13, 'Other', 'Jamie', 'Garcia', '+353871234573', 'jamie.garcia@example.com'),
(14, 'Dr', 'Michael', 'Davis', '0875678787', 'miked@hotmail.com'),
(15, 'Ms', 'Emma', 'Martinez', '+353871234575', 'emma.martinez@example.com'),
(16, 'Mrs', 'Sophia', 'Rodriguez', '+353871234576', 'sophia.rodriguez@example.com'),
(18, 'Mx', 'Mike', 'Dude', '0854787365', 'Mdude@gmail.com'),
(19, 'Dr', 'Bill', 'Murray', '0867845634', 'Bmurray@gmail.com'),
(20, 'Mr', 'Michael', 'Smith', '0484756857', 'msmith@google.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Home_Address`
--
ALTER TABLE `Home_Address`
  ADD PRIMARY KEY (`Address_ID`),
  ADD KEY `User_ID` (`User_ID`);

--
-- Indexes for table `Shipping_Address`
--
ALTER TABLE `Shipping_Address`
  ADD PRIMARY KEY (`Address_ID`),
  ADD KEY `User_ID` (`User_ID`);

--
-- Indexes for table `User_Information`
--
ALTER TABLE `User_Information`
  ADD PRIMARY KEY (`User_ID`),
  ADD UNIQUE KEY `EmailAddress` (`EmailAddress`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Home_Address`
--
ALTER TABLE `Home_Address`
  MODIFY `Address_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `Shipping_Address`
--
ALTER TABLE `Shipping_Address`
  MODIFY `Address_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `User_Information`
--
ALTER TABLE `User_Information`
  MODIFY `User_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Home_Address`
--
ALTER TABLE `Home_Address`
  ADD CONSTRAINT `home_address_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `User_Information` (`User_ID`) ON DELETE CASCADE;

--
-- Constraints for table `Shipping_Address`
--
ALTER TABLE `Shipping_Address`
  ADD CONSTRAINT `shipping_address_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `User_Information` (`User_ID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
