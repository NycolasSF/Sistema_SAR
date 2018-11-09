CREATE DATABASE Sistema_sar ;

USE Sistema_sar;

/*CRIANDO USUÁRIOS TREINEIROS*/
CREATE TABLE Treineiros (id_treineiros INTEGER AUTO_INCREMENT PRIMARY KEY, nome_treineiro VARCHAR(60), senha_treineiro TEXT, email_treineiro VARCHAR(60), ft_treineiro TEXT);
/*INSERINDO USUÁRIOS TREINEIROS*/
INSERT INTO Treineiros VALUES(0, 'Teste', 'senhateste', 'teste@gmail.com', 'img/ft_sar.png');

/*CRIANDO ALUNOS -> GRUPOS*/
CREATE TABLE Alunos (id_aluno INTEGER AUTO_INCREMENT PRIMARY KEY, nome_aluno VARCHAR(60), senha_aluno TEXT, email_aluno VARCHAR(60), ft_perfil TEXT, tipo_aluno VARCHAR(20), status_aluno CHAR(2));

CREATE TABLE Grupos (id_grupo INTEGER AUTO_INCREMENT PRIMARY KEY, nome_grupo VARCHAR(60), ft_grupo TEXT);

/*INSERINDO ALUNOS -> GRUPOS*/
INSERT INTO Alunos VALUES(0, 'Fróes', 'senhaaluno' ,'froes@gmail.com', 'img/ft_sar.png', 'Líder', 'of');
INSERT INTO Alunos VALUES(0, 'silva', 'senhaaluno' ,'silva@gmail.com', 'img/ft_sar.png', 'Membro', 'of');

INSERT INTO Grupos VALUES(0, 'SAR 0.3', 'img/ft_sar.png');
INSERT INTO Grupos VALUES(0, 'SAR 0.3', 'img/ft_sar.png');

/*CRIANDO REGISTROS */
CREATE TABLE Resgistros (id_registro INTEGER AUTO_INCREMENT PRIMARY KEY, Grupos_id_grupo INTEGER NOT NULL, Alunos_id_aluno INTEGER NOT NULL, FOREIGN KEY(Grupos_id_grupo) REFERENCES Grupos(id_grupo), FOREIGN KEY(Alunos_id_aluno) REFERENCES Alunos(id_aluno));
/*INSERINDO ALUNOS -> GRUPOS*/
INSERT INTO Resgistros VALUES(0, 1, 1);
INSERT INTO Resgistros VALUES(0, 1, 2);
INSERT INTO Resgistros VALUES(0, 2, 2);


/*CRIANDO PROFESSOR*/
CREATE TABLE Professores (id_professor INTEGER AUTO_INCREMENT PRIMARY KEY, nome_professor VARCHAR(60), senha_professor TEXT, email_professor VARCHAR(60), ft_professor TEXT, status_professor CHAR(2));
/*INSERINDO PROFESSOR*/
INSERT INTO Professores VALUES(0, 'Jónison Almeida dos Santos', 'senhajonison', 'jonison.santos@ifms.edu.br', 'img/ft_sar.png', 'of');
INSERT INTO Professores VALUES(0, 'Nycolas Silva fróes', 'senhanycolas', 'nycolassilvafroes@gmail.com', 'img/ft_sar.png', 'of');

/*CRIANDO SALAS*/
CREATE TABLE Salas (id_sala INTEGER AUTO_INCREMENT PRIMARY KEY, nome_sala VARCHAR(60), qtd_alunos INT, dataCriacao_sala TEXT, Professor_id_professor INTEGER, Grupos_id_grupo INTEGER, FOREIGN KEY(Professor_id_professor) REFERENCES Professores(id_professor), FOREIGN KEY(Grupos_id_grupo) REFERENCES Grupos(id_grupo));
/*INSERINDO SALAS*/
INSERT INTO Salas VALUES(0, 'Técnico em Informática para Internet - 3º Semestre', 0, 'now()', 1, 2);
INSERT INTO Salas VALUES(0, 'Técnico em Informática para Internet - 6º Semestre', 0, 'now()', 2, 1);
