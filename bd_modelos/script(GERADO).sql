CREATE TABLE Aluno (
  idAluno INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome_aluno TEXT NULL,
  idade_aluno INTEGER UNSIGNED NULL,
  dataAcesso_aluno DATE NULL,
  PRIMARY KEY(idAluno)
);

CREATE TABLE Aluno_has_Sala (
  id_alunoSala INTEGER UNSIGNED NOT NULL,
  Aluno_idAluno INTEGER UNSIGNED NOT NULL,
  Sala_idSala INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(id_alunoSala, Aluno_idAluno, Sala_idSala),
  INDEX Aluno_has_Sala_FKIndex1(Aluno_idAluno),
  INDEX Aluno_has_Sala_FKIndex2(Sala_idSala)
);

CREATE TABLE Cidade (
  idCidade INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome_cidade TEXT NULL,
  PRIMARY KEY(idCidade)
);

CREATE TABLE Instituicao (
  idInstituicao INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome_instituicao TEXT NULL,
  telefone_insittuicao TEXT NULL,
  CEP_instituicao INTEGER UNSIGNED NULL,
  PRIMARY KEY(idInstituicao)
);

CREATE TABLE Professor (
  idProfessor INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Instituicao_idInstituicao INTEGER UNSIGNED NOT NULL,
  Cidade_idCidade INTEGER UNSIGNED NOT NULL,
  nome_professor TEXT NULL,
  formacao_professor TEXT NULL,
  grauFormacao_professor TEXT NULL,
  celfone_professor TEXT NULL,
  PRIMARY KEY(idProfessor),
  INDEX Professor_FKIndex2(Cidade_idCidade),
  INDEX Professor_FKIndex3(Instituicao_idInstituicao)
);

CREATE TABLE Sala (
  idSala INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Professor_idProfessor INTEGER UNSIGNED NOT NULL,
  nome_turma TEXT NULL,
  dataCriacao_sala INTEGER UNSIGNED NULL,
  PRIMARY KEY(idSala),
  INDEX Sala_FKIndex1(Professor_idProfessor)
);


