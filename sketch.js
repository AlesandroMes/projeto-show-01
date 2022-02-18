// Variaveis do Menu
var xMinBotao = 150
var LargBotao = 200
var xMaxBotao = xMinBotao + LargBotao
var yMinBotao1 = 200
var AlturaBotao = 60
var yMaxBotao1 = AlturaBotao + yMinBotao1

var yMinBotao2 = 280
var yMaxBotao2 = yMinBotao2 + AlturaBotao

var yMinBotao3 = 360
var yMaxBotao3 = yMinBotao3 + AlturaBotao

// Variaveis para o botão voltar
var xMinBotaoVoltar = 430
var LargBotaoVoltar = 55
var xMaxBotaoVoltar = xMinBotaoVoltar + LargBotaoVoltar

var yMinBotaoVoltar = 452
var AlturaBotaoVoltar = 40
var yMaxBotaoVoltar = yMinBotaoVoltar + AlturaBotaoVoltar

//Variaveis do jogo.
var xNave = 220
var yNave = 300
//Variaveis dos objetos caindo.
var Xr, Yr;
var NumeroCerto = 13;
var DeltaS;
var QuantObjts = 5;
var vetorXo = [];
var vetorYo = [];
var ValorObjt = [];
var RaioDeColisao = 45;
//disparo da nave
var EstadoDoDisparo = false;
var XdoDisparo;
var YdoDisparo;
var VelocDoDisparo = 6;
var RaioDeColisaoBalaObjt = 30
//variaveis vidas e pontos
var vida = 10
var imgVida = []
var points = 0
var ContPontosCertos = 0
//Variaveis pergutas e respostas
var perguntas = []
var respostas = []
var indiceDasPerguntas = 0

var PararCodDoJogo = 10


var tela = 0
  //tela = 0: Menu
  //tela = 1: Jogo
  //tela = 2: Instruções
  //tela = 3: Créditos



function preload(){
  imagfundo = loadImage('Background-3.png');
  imagfundo2 = loadImage('Background-1.png');
  imagfundo3 = loadImage('espaço.jpg');
  imagfundo4 = loadImage('Background-4.png')
  imagplanetRed = loadImage('PlanetRed.png');
  imagplanetShadow = loadImage('planetshadow.png');
  imagNaveRed = loadImage('nave vermelha.png');
  imagTituloMenu = loadImage("titulo2Red-sem.png");
  imagLivia = loadImage('Livia Creditos.jpeg');
  imagFundoCred = loadImage('FundoCreditos.jpg');
  imagNave = loadImage('nave vermelha2.png');
  imag13 = loadImage('13sem.png');
  imagGameOver = loadImage('GameOver.png');
  imagParabens = loadImage('Parabens1.png');
  //imagens da vida
  imgVida[10] = loadImage('VIDA_10.png');
  imgVida[9] = loadImage('VIDA_9.png');
  imgVida[8] = loadImage('VIDA_8.png');
  imgVida[7] = loadImage('VIDA_7.png');
  imgVida[6] = loadImage('VIDA_6.png');
  imgVida[5] = loadImage('VIDA_5.png');
  imgVida[4] = loadImage('VIDA_4.png');
  imgVida[3] = loadImage('VIDA_3.png');
  imgVida[2] = loadImage('VIDA_2.png');
  imgVida[1] = loadImage('VIDA_1.png');
  imgVida[0] = loadImage('VIDA_0.png');
  
  //imagVida = loadImage('VIDA_10.png')

}


function setup() {
  createCanvas(500, 500);
  RandomDaRespCerta();
  DeltaS = 2
  
  for( i = 0;i < QuantObjts; i++){
      RandomObjsErrados(i);
      valorSort = parseInt( random(99) );
      while(valorSort == NumeroCerto){
          valorSort = parseInt( random(99));
       }
      ValorObjt[i] = valorSort;
   }
  //Perguntas e Respostas
  perguntas[0] = "27 + 31 ?"
  respostas[0] = 58
  perguntas[1] = "41 - 27 ?"
  respostas[1] = 14
  perguntas[2] = "8 * 3 ?"
  respostas[2] = 24
  perguntas[3] = "180 / 10 ?"
  respostas[3] = 10
  perguntas[4] = "59 + 13 ?"
  respostas[4] = 72
  perguntas[5] = "13 - 5 ?"
  respostas[5] = 8
  perguntas[6] = "3 * 13 ?" 
  respostas[6] = 39
  perguntas[7] = "75 / 5 ?"
  respostas[7] = 15
  perguntas[8] = "42/7 ?"
  respostas[8] = 6
  perguntas[9] = "88 + 5 ?"
  respostas[9] = 93
  perguntas[10] = "87 - 51 ?"
  respostas[10] = 36
  perguntas[11] =  "9 * 2 ?"
  respostas[11] = 18
  perguntas[12] = "49 / 7 ?"
  respostas[12] = 7
  
}

function TelaInstrucoes(){
  
    background(imagFundoCred);
    stroke(1);
    textFont('sans-serif');
    textSize(50);
    fill(255);
    text("Instruções", 135, 100);
    
    textSize(20);
    fill(255);
    text("O jogo Sera basicamente problemas matemáticos",50 , 210);
    text(" simples, envolvendo as 4 operações básicas. Quando ",10 , 230);
    text(" o jogador de play no jogo, irá se deparar com uma na-",10 , 250);
    text("ve, alguns números caindo do 'céu' e um pequeno pro- ",10 , 270);
    text("blema matemático. A resposta para esse problema es-",10 , 290);
    text("tará entre esses vários números caindo do 'céu', basta",10 , 310); 
    text("atirar no número correto...A medida que vc acerta ou",10 , 330);
    text("erra, ganha pontos ou perde. Se vc colidir com um nú-",10 , 350);
    text("mero você perderá uma vida, exceto no correto(Total",10 , 370);
    text("de 10 vidas).", 10, 390)
    text("CONTROLE DA NAVE: botão seta para esquerda,di-", 10, 430)
    text("reita,cima e baixo.", 10, 450)
    text("DISPARO DO PROJÉTIL: botão Ctrl(Control) ", 10, 470 )
  
  
    //Botão voltar
    if(mouseX > xMinBotaoVoltar && mouseX < xMaxBotaoVoltar && mouseY > yMinBotaoVoltar && mouseY     < yMaxBotaoVoltar){
      fill(250)
        if(mouseIsPressed){
          tela = 0
        }
    }
    else{
      noFill()
    }
    stroke(1);
    strokeWeight(2);
    rect(xMinBotaoVoltar, yMinBotaoVoltar, LargBotaoVoltar, AlturaBotaoVoltar, 15);
    textSize(16);
    fill(255);
    text("Voltar", xMinBotaoVoltar + 6, yMinBotaoVoltar + 26);
    
}
function TelaCreditos(){

    background(imagFundoCred)
    //Textos
    textFont('sans-serif')
    stroke(1)
    textSize(50)
    fill(255)
    text("Créditos", 160, 80) 
    textSize(29)
    fill(255)
    text("Lívia Gabriela Viana", 185, 210)
    textSize(21)
    fill(255)
    text("Função: Estudante", 230, 240)
    textSize(20)
    fill(255)
    text("Estudante do Bacharelado em Ma -", 180, 300)
    text("temática na Universidade Federal do Rio Grande ", 50, 340)
    text("do Norte.", 50, 370)
    //Traços em volta da foto
    strokeWeight(4)
    stroke(255)
    line(20, 170, 60, 170);
    stroke(255);
    line(20, 170, 20, 215);
    stroke(255);
    line(100, 312, 150, 312);
    stroke(255)
    line(150, 312, 150, 260);
    image(imagLivia, 30, 180, 110, 120 )
  
    //Botão Voltar
    if(mouseX > xMinBotaoVoltar && mouseX < xMaxBotaoVoltar && mouseY > yMinBotaoVoltar && mouseY < yMaxBotaoVoltar){
        fill(250)
        if(mouseIsPressed){
            tela = 0
            console.log("clicou v")
       }
    }
    else{
        noFill()
    }
    stroke(1)
    strokeWeight(2)
    rect(xMinBotaoVoltar, yMinBotaoVoltar, LargBotaoVoltar, AlturaBotaoVoltar, 15)
    textSize(16)
    fill(255)
    text("Voltar", xMinBotaoVoltar + 6, yMinBotaoVoltar + 26)
  
  
}

function TelaDoJogo(){
    if(vida <= 10 && vida > 0 && PararCodDoJogo == 10){   
        noStroke()
        background(imagfundo4)
        image(imgVida[vida], 380, 485, 110 ,10)
  
  
        //Obstaculos em vetores.
        for(i = 0; i < QuantObjts; i++){
            Objetos(vetorXo[i],vetorYo[i],ValorObjt[i]);
            vetorYo[i] = vetorYo[i] + DeltaS;
    
            //colisao com os obstaculos errados
            if(dist(vetorXo[i],vetorYo[i],xNave,yNave) < RaioDeColisao){
                console.log("colidiu errrado");
                RandomObjsErrados(i);
                vida = vida - 1
            
            }
            //colisão do disparo com os objetos errados 
            if(EstadoDoDisparo){
                if( dist(vetorXo[i],vetorYo[i],XdoDisparo,YdoDisparo) < RaioDeColisaoBalaObjt ){
                    RandomObjsErrados(i);
                    console.log("colidiu com a bala");
                    points = points - 10
                }
            }      
            if( vetorYo[i] > 500 ){
                RandomObjsErrados(i);
            }   
      
            //Colisão do disparo com os objetos certos
            if(EstadoDoDisparo){
                if( dist(Xr,Yr,XdoDisparo,YdoDisparo) < RaioDeColisaoBalaObjt ){
                    RandomDaRespCerta();
                    console.log("colidiu com a bola Certa")
                    points = points + 100
                    indiceDasPerguntas = indiceDasPerguntas + 1
                    ContPontosCertos++
                }
            }   
            if( Yr > 500 ){
                RandomDaRespCerta(); 
            }   
      
        } 
  
        Objetos(Xr,Yr,respostas[indiceDasPerguntas])
        Yr = Yr + DeltaS
        if(Yr > 500) {
            RandomDaRespCerta();    
        } 
        //Colisao com o resultado certo.
        if(dist(Xr,Yr,xNave,yNave) < RaioDeColisao){
            console.log("colidiu")
            RandomDaRespCerta();
        }
      
        //Disparo da nave
        if(keyIsDown(CONTROL) && EstadoDoDisparo == false ){
            XdoDisparo = xNave;
            YdoDisparo = yNave;
            EstadoDoDisparo = true;
        }
        if(EstadoDoDisparo){
            fill(255)
            ellipse(XdoDisparo, YdoDisparo, 4, 4);
            YdoDisparo = YdoDisparo - VelocDoDisparo;
            if(YdoDisparo < 0){
                EstadoDoDisparo = false;
            }
        }
        //Controle da nave
        if (keyIsDown(LEFT_ARROW)) {
            xNave -= 3;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            xNave += 3;
        }
        if (keyIsDown(UP_ARROW)) {
            yNave -= 3;
        }
        if (keyIsDown(DOWN_ARROW)) {
            yNave += 3;
        }
    
        //Desenho da Nave:
        fill(0)
        //ellipse(xNave, yNave, 35, 35)
        image(imagNave, xNave - 35, yNave -35 , 70, 70 )
  
        //textos: pontos
        textSize(20)
        fill(255)
        text("Pontos: " + points, 15, 492)
    
        //Perguntas
        textSize(30)
        strokeWeight(5)
        stroke(20)
        fill(0,150,0)
        text(perguntas[indiceDasPerguntas], 20, 28)

    }
  
    
}
function TelaParabens(){
  background(150)
  image(imagParabens, 65, -10, 400, 200)
  image(imagParabens, 65, 110, 400, 200)
  image(imagParabens, 65, 220, 400, 200)
  image(imagParabens, 65, 330, 400, 200)
  
  //Botão Voltar
  if(mouseX > xMinBotaoVoltar && mouseX < xMaxBotaoVoltar && mouseY > yMinBotaoVoltar && mouseY < yMaxBotaoVoltar){
    fill(250)
       if(mouseIsPressed){
         vida = 10
         points = 0
         ContPontosCertos = 0
         console.log("cliclou") 
         tela = 0
        }
    }
    else{
      noFill()
    }
    stroke(1)
    strokeWeight(2)
    rect(xMinBotaoVoltar, yMinBotaoVoltar, LargBotaoVoltar , AlturaBotaoVoltar, 15)
    textSize(16)
    fill(255)
    text("Menu", xMinBotaoVoltar +9 , yMinBotaoVoltar + 26)

}
function GameOver(){
  background(0)
  image(imagGameOver, 40, -50, 400, 500)
    
  //Botao reiniciar
  if(mouseX > 130 && mouseX < 335 && mouseY > 242 && mouseY < 302){
      fill(150)
      if(mouseIsPressed){
          vida = 10
          //novo sorteio do objeto certo
          RandomDaRespCerta();
          //Objetos errados
          RandomObjsErrados(i);
          //Nave
          xNave = 220
          yNave = 300
          vida = 10
          points = 0
          indiceDasPerguntas = 0
          ContPontosCertos = 0
          tela = 1

        }
    }
  else{
      noFill()
   }
  rect(130, 242, 205, 60, 1)
  textSize(40)
  fill(color(255))
  text("Reiniciar", 135, 290)
    
  //Botao Menu
  if(mouseX > 5 && mouseX < 110 && mouseY > 455 && mouseY < 490){
    fill(150)
        if(mouseIsPressed){
            tela = 0
            vida = 10
            points = 0
        }
    }
  else{
    noFill()
  }  
  rect(5, 455, 105, 35, 1)
  textSize(30)
  fill(color(255))
  text("Menu", 20, 485)
  

} 



function draw() {
  
  if( tela == 0){
      background(imagfundo2);
      image(imagplanetRed, 350, 350, 200, 200 )
      image(imagNaveRed, 30, 170, 200, 200)
      image(imagTituloMenu, 70, 50 ,400 ,150)
    
      //Titulo
      strokeWeight(2)
      stroke(1)
      textFont('monospace');
      textSize(40)
      fill(255)
      //text("Nave Estelar", 150, 110);
  
  
      //Botão iniciar
      if(mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao1 && mouseY < yMaxBotao1){
          fill(0,0,0)
          if(mouseIsPressed){
              //novo sorteio do objeto certo
              RandomDaRespCerta();
              //Objetos errados
              RandomObjsErrados(i);
              //Nave
              xNave = 220;
              yNave = 300;
              vida = 10;
              points = 0;
              indiceDasPerguntas = 0;
              ContPontosCertos = 0;
              PararCodDoJogo = 10; 
              tela = 1
            }
        }
        else{
            noFill()
        }
        rect(xMinBotao, yMinBotao1, LargBotao, AlturaBotao, 5)
        textSize(26)
        fill(color(255,0,0))
        text("Iniciar", xMinBotao + 53, yMinBotao1 + 40)
  
  
        //Botão instruções
        if(mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao2 && mouseY < yMaxBotao2){
            fill(0,0,0)
            if(mouseIsPressed){
                tela = 2;
            }
        }   
        else {
            noFill()
        }
        rect(xMinBotao, yMinBotao2, LargBotao , AlturaBotao, 5)
        textSize(26)
        fill(color(255,0,0))
        text("Instruções", xMinBotao + 30, yMinBotao2 + 40)
  
  
        //Botão Créditos
        if(mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao3 && mouseY < yMaxBotao3){
            fill(0,0,0)
            if(mouseIsPressed){
                tela = 3
            }
        }  
        else{
            noFill()
        }
        rect(xMinBotao, yMinBotao3, LargBotao , AlturaBotao, 5)
        textSize(26)
        fill(color(255,0,0))
        text("Créditos", xMinBotao + 45, yMinBotao3 + 40)
    }
  
    if(tela == 1){
        TelaDoJogo();
    }
    if(tela == 2){
        TelaInstrucoes();
    }
    if(tela == 3){
        TelaCreditos();
    }
    if(points >= 800 || ContPontosCertos == 12){
        PararCodDoJogo = 0;
        TelaParabens();
    }
    if(vida == 0){
        GameOver();
    }


}

function Objetos(Xo,Yo, valor){
    noFill();
    ellipse(Xo,Yo,30,30);
    textSize(25);
    fill(0,255,0);
    text(valor,Xo - 11,Yo + 6);
}
function RandomDaRespCerta(){
   Xr = random(497)
   Yr = - random(100,500);  
}
function RandomObjsErrados(i){
  vetorXo[i] = random(497);
  vetorYo[i] = - random(100,400); 
}

