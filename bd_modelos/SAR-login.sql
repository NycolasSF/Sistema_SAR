CREATE TABLE Cidade(
  id_cidade INTEGER NOT NULL AUTO_INCREMENT,
  nome_cidade VARCHAR(60),
  PRIMARY KEY(id_cidade)
);

INSERT INTO Cidade VALUES(1, 'Dourados');
INSERT INTO Cidade VALUES(2, 'Campo Grande');

CREATE TABLE Instituicao(
  id_instituicao INTEGER NOT NULL AUTO_INCREMENT,
  nome_instituicao VARCHAR(80),
  telefone_instituicao CHAR(11),
  CEP_instituicao CHAR(8),
  PRIMARY KEY(id_instituicao)
);

INSERT INTO  Instituicao VALUES(1, 'IFMS - Campus Dourados', '6734108500', '79833-520');
INSERT INTO  Instituicao VALUES('UFGD', '6734102002', '79825-070');

CREATE TABLE Professor(
  id_professor INTEGER NOT NULL AUTO_INCREMENT,
  nome_professor VARCHAR(60),
  CPF_professor CHAR(11),
  formacao_professor VARCHAR(60),
  telfone_professor CHAR(11),
  email_professor VARCHAR(60),
  senha_professor CHAR(10),
  dataAcesso_professor date,
  Instituicao_id_instituicao INTEGER NOT NULL,
  Cidade_id_cidade INTEGER NOT NULL,
  PRIMARY KEY(id_professor),
  FOREIGN KEY(Instituicao_id_instituicao) REFERENCES Instituicao(id_instituicao),
  FOREIGN KEY(Cidade_id_cidade) REFERENCES Cidade(id_cidade)
);

INSERT INTO Professor VALUES(1, 'Jónison', '12345678910', 'Bacharelado em Ciências da Computação', '67122224444', 'jonison.santos@ifms.edu.br', '1234567891', now(), 1, 1);

CREATE TABLE Aluno(
  id_aluno INTEGER NOT NULL AUTO_INCREMENT,
  nome_aluno VARCHAR(60),
  CPF_aluno CHAR(11),
  email_aluno VARCHAR(60),
  anoNascimento_aluno date,
  dataAcesso_aluno date,
  PRIMARY KEY(id_aluno)
);

INSERT INTO Aluno VALUES(1, 'NycolasSF', '05456103117', 'nycolassilvafroes@gmail.com', '17/08/2000', now());

CREATE TABLE Sala(
  id_sala INTEGER NOT NULL AUTO_INCREMENT,
  nome_turma VARCHAR(30),
  dataCriacao_sala date,
  PRIMARY KEY(id_sala)
);

INSERT INTO Sala VALUES(1, '1D', now());.

CREATE TABLE Sala_Aluno(
  id_salaAluno INTEGER NOT NULL AUTO_INCREMENT,
  Aluno_id_aluno INTEGER NOT NULL,
  Sala_id_sala INTEGER NOT NULL,
  PRIMARY KEY(id_salaAluno),
  FOREIGN KEY(Aluno_id_aluno) REFERENCES Aluno(id_aluno),
  FOREIGN KEY(Sala_id_sala) REFERENCES Sala(id_sala)
);

INSERT INTO Sala_Aluno VALUES(1, 1, 1);
