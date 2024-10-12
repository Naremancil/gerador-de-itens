CREATE DATABASE express;
USE express;

CREATE TABLE IF NOT EXISTS weapon (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome_item VARCHAR(255) NOT NULL,
    nivel INT NOT NULL,
    tier INT NOT NULL,
    dano INT NOT NULL,
    efeito VARCHAR(255),
    lore VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS protection (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome_item VARCHAR(255) NOT NULL,
    tier INT NOT NULL,
    defesa INT NOT NULL,
    efeito VARCHAR(255),
    lore VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS item (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome_item VARCHAR(255) NOT NULL,
    tier INT NOT NULL,
    efeito1 VARCHAR(255) NOT NULL,
    efeito2 VARCHAR(255),
    lore VARCHAR(255) NOT NULL
);

-- ALTER USER 'usuario'@'localhost' IDENTIFIED WITH mysql_native_password BY 'senha';