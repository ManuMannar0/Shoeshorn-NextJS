-- CreateTable
CREATE TABLE `amertabella` (
    `indice` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` TEXT NOT NULL,
    `genere` TEXT NOT NULL,
    `nome` TEXT NOT NULL,
    `retail` TEXT NOT NULL,
    `outlet` TEXT NOT NULL,

    PRIMARY KEY (`indice`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
