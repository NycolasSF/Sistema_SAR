class Robo {
  constructor(connection) {
    this.connection = connection;
    this.frente = 'comando_robo/FRENTE/';
    this.tras = 'comando_robo/TRAS/';
    this.virarEsquerda = 'comando_robo/ANTIHORARIO/';
    this.virarDireita = 'comando_robo/HORARIO/';
    this.stop = 'comando_robo/STOP/'
    this.xhttp = new XMLHttpRequest();
  }
  stopRobo(){
    let url = this.stop;
    this.xhttp.open("GET", "http://"+this.connection+"/"+url, true);
    this.xhttp.send();
  }
  moveFrente(){
    let url = this.frente;
    this.xhttp.open("GET", "http://"+this.connection+"/"+url, true);
    this.xhttp.send();
  }
  moveTras(){
    let url = this.tras;
    this.xhttp.open("GET", "http://"+this.connection+"/"+url, true);
    this.xhttp.send();
  }
  viraDireita(){
    let url = this.virarDireita;
    this.xhttp.open("GET", "http://"+this.connection+"/"+url, true);
    this.xhttp.send();
  }
  viraEsquerda(){
    let url = this.virarEsquerda;
    this.xhttp.open("GET", "http://"+this.connection+"/"+url, true);
    this.xhttp.send();
  }
}
