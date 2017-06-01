CREATE TABLE `books` (
  `ID` int(6) NOT NULL AUTO_INCREMENT,
  `title` varchar(64) DEFAULT NULL,
  `type` varchar(40) DEFAULT NULL,
  `year` int(6) DEFAULT NULL,
  `author` varchar(40) DEFAULT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  `availability` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;

INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (1,'Pet Sematary','Horror', 1983, 'Stephen King', 10.50, 'Excellent');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (2,'Moby Dick','Novel', 1851, 'Herman Melville', 92.70, 'Excellent');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (3,'The Silence of the Lambs','Horror', 1988, 'Thomas Harris', 8.50, 'Excellent');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (4,'Hamlet','Drama', 1599, 'William Shakespeare', 134.10, 'Poor');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (5,'Happyslapped by a jellyfish','Comedy', 2007, 'Karl Pilkington', 9.99, 'Poor');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (6,'The Rats','Horror', 1974, 'James Herbert', 19.99, 'None');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (7,'The Great Gatsby','Novel', 1925, 'F. Scott Fitzgerald', 20.00, 'Good');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (8,'Alices Adventures in Wonderland','Fantasy', 1862, 'Lewis Carroll', 6.78, 'None');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (9,'The Adventures of Huckleberry Finn','Satire', 1884, 'Mark Twain', 69.00, 'Excellent');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (10,'Nineteen Eighty Four','Dystopian', 1949, 'George Orwell', 34.50, 'Good');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (11,'David Copperfield','Novel', 1849, 'Charles Dickens', 42.31, 'Good');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (12,'Robinson Crusoe','Historic', 1719, 'Daniel Defoe', 10.50, 'Poor');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (13,'The Metamorphosis','Horror', 1915, 'Franz Kafka', 6.99, 'Poor');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (14,'Vanity Fair','Novel', 1847, 'William Makepeace Thackeray', 18.50, 'Excellent');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (15,'Animal Farm','Dystopian', 1945, 'George Orwell', 24.50, 'Poor');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (16,'It','Horror', 1986, 'Stephen King', 15.60, 'Good');
INSERT INTO `books` (`ID`,`title`,`type`, `year`, `author`, `price`, `availability`) VALUES (17,'War and Peace','War', 1869, 'Leo Tolstoy', 54.55, 'Good');
