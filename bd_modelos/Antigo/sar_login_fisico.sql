--CRINDO cidade - país --> Instituicao/Pessoa_fisica
CREATE TABLE Cidade (
  id_cidade INTEGER NOT NULL,
  nome_cidade VARCHAR(60) NULL,
  PRIMARY KEY(id_cidade)
);
CREATE TABLE Pais(
  id_pais INTEGER NOT NULL,
  nome_pais VARCHAR(60) NULL,
  PRIMARY KEY(id_pais)
);

CREATE TABLE Pais_Cidade (
  id_pais_cidade INTEGER NOT NULL,
  Pais_id_pais INTEGER NOT NULL,
  Cidade_id_cidade INTEGER NOT NULL,
  PRIMARY KEY(id_pais_cidade),
  FOREIGN KEY(Pais_id_pais) REFERENCES Pais(id_pais),
  FOREIGN KEY(Cidade_id_cidade) REFERENCES Cidade(id_cidade)
);

CREATE TABLE Instituicao (
  id_instituicao INTEGER NOT NULL,
  nome_instituicao VARCHAR(80) NULL,
  PaisCidade_id_paiscidade INTEGER NOT NULL,
  PRIMARY KEY(id_instituicao),
  FOREIGN KEY(PaisCidade_id_paiscidade) REFERENCES Pais_Cidade(id_pais_cidade)
);
--INSERT cidade - Pais --> Instituicao/Pessoa_fisica
--cidades
INSERT INTO Cidade VALUES(1, 'Dourados');
INSERT INTO Cidade VALUES(2, 'Brasília');
INSERT INTO Cidade VALUES(3, 'Florença');
INSERT INTO Cidade VALUES(4, 'Roma');
INSERT INTO Cidade VALUES(5, 'New York');
INSERT INTO Cidade VALUES(6, 'Boston');
--pais
INSERT INTO Pais VALUES(1, 'Brasil');
INSERT INTO Pais VALUES(2, 'Itália');
INSERT INTO Pais VALUES(3, 'Estados Unidos da América');
--pais_cidade
INSERT INTO Pais_Cidade VALUES(1, 1, 1);
INSERT INTO Pais_Cidade VALUES(2, 1, 2);
INSERT INTO Pais_Cidade VALUES(3, 2, 3);
INSERT INTO Pais_Cidade VALUES(4, 2, 4);
INSERT INTO Pais_Cidade VALUES(5, 3, 5);
INSERT INTO Pais_Cidade VALUES(6, 3, 6);
--instituicao
INSERT INTO Instituicao VALUES(1, 'IFMS', 1);
INSERT INTO Instituicao VALUES(2, 'IFB', 2);
INSERT INTO Instituicao VALUES(3, 'SCUOLA LEONARDO DA VINCI', 3);
INSERT INTO Instituicao VALUES(4, 'NYIT', 5);

--CRIANDO PESSOA FISICA - PROFESSOR - ALUNO - CATEGORIA  --> USUARIO
CREATE TABLE Pessoa_fisica (
  id_pessoaF INTEGER NOT NULL,
  fonecel_pessoaF VARCHAR(15) NULL,
  PaisCidade_id_pais_cidade INTEGER NOT NULL,
  PRIMARY KEY(id_pessoaF),
  FOREIGN KEY(PaisCidade_id_pais_cidade) REFERENCES Pais_Cidade(id_pais_cidade)
);
--INSERINDO Pessoa_fisica
INSERT INTO Pessoa_fisica VALUES(1, '67998092788', 1);
INSERT INTO Pessoa_fisica VALUES(2, '393201234567', 4);

CREATE TABLE Professor (
  id_professor INTEGER NOT NULL AUTO_INCREMENT,
  titulacao_professor VARCHAR(60) NULL,
  area_professor VARCHAR(60) NULL,
  Instituicao_id_Instituicao INTEGER NOT NULL,
  PRIMARY KEY(id_professor),
  FOREIGN KEY(Instituicao_id_Instituicao) REFERENCES Instituicao(id_instituicao)
);
--INSERINDO Professor
INSERT INTO Professor VALUES(1, 'Doutor', 'Inteligência Artificial', 1);

CREATE TABLE Aluno (
  id_aluno INTEGER NOT NULL,
  fonecel_aluno VARCHAR(15) NULL,
  Professor_id_professor INTEGER NOT NULL,
  PRIMARY KEY(id_aluno),
  FOREIGN KEY(Professor_id_professor) REFERENCES Professor(id_professor)
);
--INSERINDO Aluno
INSERT INTO Aluno VALUES(1, '67998092788', 1);

CREATE TABLE Categoria (
  id_categoria INTEGER NOT NULL AUTO_INCREMENT,
  Aluno_id_aluno INTEGER,
  Professor_id_professor INTEGER,
  PessoaFisica_id_pessoaF INTEGER,
  PRIMARY KEY(id_categoria),
  FOREIGN KEY(PessoaFisica_id_pessoaF) REFERENCES Pessoa_fisica(id_pessoaF),
  FOREIGN KEY(Professor_id_professor) REFERENCES Professor(id_professor),
  FOREIGN KEY(Aluno_id_aluno) REFERENCES Aluno(id_aluno)
);
--INSERINDO Categoria
INSERT INTO Categoria VALUES(1, null, 1, null);
INSERT INTO Categoria VALUES(2, 1, null, null);
INSERT INTO Categoria VALUES(3, null, null, 1);
INSERT INTO Categoria VALUES(4, null, null, 2);


CREATE TABLE Usuario (
  id_usuario INTEGER NOT NULL AUTO_INCREMENT,
  nome_usuario VARCHAR(30) NULL,
  email_usuario VARCHAR(30) NULL,
  senha_usuario CHAR(10) NULL,
  dataAcesso_usuario DATE NULL,
  Categoria_id_categoria INTEGER NOT NULL,
  PRIMARY KEY(id_usuario),
  FOREIGN KEY(Categoria_id_categoria) REFERENCES Categoria(id_categoria)
);

--INSERINDO Usuario
--CURRENT_DATE
INSERT INTO Usuario VALUES(1, 'Nycolas - Professor', 'nycolasProf@gmail.com', '!Senha+dez', now(), 1);
INSERT INTO Usuario VALUES(2, 'Nycolas - aluno', 'nycolasAluno@gmail.com', '@Senha+dez', now(), 2);
INSERT INTO Usuario VALUES(3, 'Nycolas - Pessoa Física', 'nycolasPessoaF01@gmail.com', '#Senha+dez', now(), 3);
INSERT INTO Usuario VALUES(4, 'Nycolas - Pessoa Física2', 'nycolasPessoaF02@gmail.com', '$Senha+dez', now(), 4);
INSERT INTO Usuario(nome_usuario, email_usuario, senha_usuario, dataAcesso_usuario) VALUES('test', 'test', 't', now(), 4);
