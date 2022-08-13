CREATE DATABASE NINTENDOGAME

USE NINTENDOGAME

CREATE TABLE ZELDAGAMES(
Id int primary key not null IDENTITY(1,1),
Nombre varchar(MAX),
Año int,
Consola varchar(MAX),
Visible bit)

INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda',1986,'Nintendo Entertainment System',1)
INSERT INTO ZELDAGAMES VALUES('Zelda II: The Adventure of Link',1987,'Nintendo Entertainment System',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: A Link to the Past',1991,'Super Nintendo Entertainment System',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: Links Awakening',1993,'Game Boy',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: Ocarina of Time',1998,'Nintendo 64',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: Majoras Mask',2000,'Nintendo 64',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: Oracle of Seasons and Oracle of Ages',2001,'Game Boy Color',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: The Wind Waker',2002,'GameCube',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: Four Swords Adventures',2004,'GameCube',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: The Minish Cap',2004,'Game Boy Advance',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: Twilight Princess',2006,'GameCube',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: Phantom Hourglass',2007,'Nintendo DS',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: Spirit Tracks',2009,'Nintendo DS',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: Skyward Sword',2011,'Wii',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: A Link Between Worlds',2013,'Nintendo 3DS',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: Tri Force Heroes',2015,'Nintendo 3DS',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: Breath of the Wild',2017,'Nintendo Switch',1)
INSERT INTO ZELDAGAMES VALUES('The Legend of Zelda: Breath of the Wild 2',2023,'Nintendo Switch',1)


------------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE SP_GetZeldaGames
AS
BEGIN
		SELECT * FROM ZELDAGAMES WHERE Visible = 1	
END
GO

--------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE SP_AddZeldaGame 
@Nombre varchar(MAX),
@Year int,
@Consola varchar(MAX)
AS
BEGIN
	INSERT INTO ZELDAGAMES VALUES(@Nombre, @Year, @Consola,1)
END
GO

----------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE SP_UpdZeldaGame
@Id int,
@Nombre varchar(MAX),
@Year int,
@Consola varchar(MAX),
@Visible bit
AS
BEGIN
	IF @Visible = 1
		UPDATE ZELDAGAMES SET Nombre = @Nombre, Año= @Year, Consola = @Consola WHERE Id = @Id
	ELSE
		UPDATE ZELDAGAMES SET Visible = 0 WHERE Id = @Id
END
GO


