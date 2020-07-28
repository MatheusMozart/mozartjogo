var tela = 1;
var largura = 200;
var altura = 50;
var xmenu = 145;
var ymenu = 145;
var ymenu1 = 205;
var ymenu2 = 265;
var ymenu3 = 400;
var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var vidas = 3;
var pontos = 0;
var x = 220;
var y = 380;
var tiro;
var disparo = false;
var xd, yd, yo = 0, xo = 50;
var a, b, c = " + ";
var r0, r1, r2, r3;
var yr = 190
var xr = 65, xr1 = 186, xr2 = 307, xr3 = 428;
var a1, a2, a3;
var q = 0;

function preload() {
  img = loadImage('https://static.vecteezy.com/system/resources/previews/000/265/089/non_2x/seamless-tropical-beach-landscape-for-ui-game-vector.jpg');
  img2 = loadImage('foto2.png');
  img3 = loadImage('foto3.png');
  img4 = loadImage('foto4.png');
  img5 = loadImage('tiro1.png');
  img6 = loadImage('gameover.png');
  img7 = loadImage('win.png');
}

function setup() {
  createCanvas(500, 500);
  background(img);

  x = 220;
  xd = x;

  y = 380;
  yd = y;

  a = parseInt(random(50))
  b = parseInt(random(50))
  a1 = parseInt(random(10))
  a2 = parseInt(random(10))
  a3 = parseInt(random(10))
  q = parseInt(random(4))
  
}

function questoes() {
  fill(155, 239, 5);
  ellipse(xr, yr, 100, 50)
  ellipse(xr1, yr, 100, 50)
  ellipse(xr2, yr, 100, 50)
  ellipse(xr3, yr, 100, 50)
  r0 = a + b
  r1 = (a + b) + a1 + 1
  r2 = (a + b) - a2 - 1
  r3 = (a + b) + a3 + 1
  if (c == " - ") {
    r0 = a - b
    r1 = (a - b) + a1 + 1
    r2 = (a - b) - a2 - 1
    r3 = (a - b) + a3 + 1

  }
  if (c == " x ") {
    r0 = a * b
    r1 = (a * b) + a1 + 1
    r2 = (a * b) - a2 - 1
    r3 = (a * b) + a3 + 1

  }
  if (c == " / ") {
    if (a > b && b != 0) {
      r0 = (a / b).toFixed(1)
      r1 = ((a / b) + a1 + 1).toFixed(1)
      r2 = ((a / b) - a2 - 1).toFixed(1)
      r3 = ((a / b) + a3 + 1).toFixed(1)
    } else {
      a = parseInt(random(50))
      b = parseInt(random(50))
    }

  }
  fill(20);


  if (q == 0) {
    text(r0, 50, 200);
    text(r1, 170, 200);
    text(r2, 290, 200);
    text(r3, 410, 200);
  } else if (q == 1) {
    text(r1, 50, 200);
    text(r0, 170, 200);
    text(r2, 290, 200);
    text(r3, 410, 200);
  } else if (q == 2) {
    text(r2, 50, 200);
    text(r1, 170, 200);
    text(r0, 290, 200);
    text(r3, 410, 200);
  } else if (q == 3) {
    text(r3, 50, 200);
    text(r1, 170, 200);
    text(r2, 290, 200);
    text(r0, 410, 200);
  }

}

function tiro() {
  ellipse(xo, yo, 1, 1) // Bloco de cima
  if (keyIsDown(32) && (!disparo)) { // Para sair do personagem
    disparo = true;
    xd = x + 2;
    yd = y + 2;
  }

  if (disparo) {
    yd = yd - 5;
    if (dist(xd, yd, xr - 20, yr - 40) < 50) { // condição para a bala sumir 
      disparo = false;
    } else if (dist(xd, yd, xr1 - 20, yr - 40) < 50) {
      disparo = false;
    } else if (dist(xd, yd, xr2 - 20, yr - 40) < 50) {
      disparo = false;
    } else if (dist(xd, yd, xr3 - 20, yr - 40) < 50) {
      disparo = false;
    } else if (yd < yo) { // quando a bala atingir o topo, sumir
      disparo = false;
    }

  }

  // limpa o cenário 
  background(img);
  text("Vidas: " + vidas, 380, 30)
  text("Pontos: " + pontos, 20, 30)
  fill(20);
  text(a + c + b + " = ?", 189, 60)


  // Jogador 
  image(img4, x, y, 100, 100);
  // Disparo 
  // Se o disparo estiver ativo 
  if (disparo) {
    image(img5, xd, yd, 50, 60);
  }
}

function resposta() {

  if ((dist(xd, yd, xr - 20, yr - 40) < 50) && q == 0) {
    pontos++
    yd = 1000
    xd = 1000
    a = parseInt(random(10))
    b = parseInt(random(10))
    a1 = parseInt(random(10))
    a2 = parseInt(random(10))
    a3 = parseInt(random(10))
    q = parseInt(random(4))


  }
  if ((dist(xd, yd, xr1 - 20, yr - 40) < 50) && q == 1) {
    pontos++
    yd = 1000
    xd = 1000
    a = parseInt(random(10))
    b = parseInt(random(10))
    a1 = parseInt(random(10))
    a2 = parseInt(random(10))
    a3 = parseInt(random(10))
    q = parseInt(random(4))


  }
  if ((dist(xd, yd, xr2 - 20, yr - 40) < 50) && q == 2) {
    pontos++
    yd = 1000
    xd = 1000
    a = parseInt(random(10))
    b = parseInt(random(10))
    a1 = parseInt(random(10))
    a2 = parseInt(random(10))
    a3 = parseInt(random(10))
    q = parseInt(random(4))

  }
  if ((dist(xd, yd, xr3 - 20, yr - 40) < 50) && q == 3) {
    pontos++
    yd = 1000
    xd = 1000
    a = parseInt(random(10))
    b = parseInt(random(10))
    a1 = parseInt(random(10))
    a2 = parseInt(random(10))
    a3 = parseInt(random(10))
    q = parseInt(random(4))
  }


  if ((dist(xd, yd, xr - 20, yr - 40) < 50) && q != 0) {
    vidas--
    yd = 1000
    xd = 1000
  }
  if ((dist(xd, yd, xr1 - 20, yr - 40) < 50) && q != 1) {
    vidas--
    yd = 1000
    xd = 1000
  }
  if ((dist(xd, yd, xr2 - 20, yr - 40) < 50) && q != 2) {
    vidas--
    yd = 1000
    xd = 1000
  }
  if ((dist(xd, yd, xr3 - 20, yr - 40) < 50) && q != 3) {
    vidas--
    yd = 1000
    xd = 1000
  }
  if (vidas == 0) {
    tela = 6;
  }
  if (pontos >= 5) {
    c = " - "
  }
  if (pontos >= 10) {
    c = " x "
  }
  if (pontos >= 15) {
    c = " / "
  }
  if (pontos >= 20) {
    tela = 7
  }


}

function telas() {
  // MENU
  if (tela == 1) {
    // Menu 3 opções
    stroke(200);
    fill(0, 180, 255);
    rect(xmenu, ymenu, largura, altura, 15)

    textSize(30)
    fill(20);
    noStroke();
    text("Iniciar", 205, 180)
    if (mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu && mouseY < ymenu + altura) {
      if (mouseIsPressed) {
        tela = 4;
      }
    }

    // Informações do jogo
    stroke(200);
    fill(0, 180, 255);
    rect(xmenu, ymenu1, largura, altura, 15)

    fill(20);
    noStroke();
    text("Informações", 162, 240)
    if (mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu1 && mouseY < ymenu1 + altura) {
      if (mouseIsPressed) {
        tela = 2;
      }
    }

    // Créditos
    stroke(200);
    fill(0, 180, 255);
    rect(xmenu, ymenu2, largura, altura, 15)

    fill(20);
    noStroke();
    text("Créditos", 190, 300)
    if (mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu2 && mouseY < ymenu2 + altura) {
      if (mouseIsPressed) {
        tela = 3;
      }
    }

  }
  if (tela == 2) {
    background(img);
    textSize(20);
    fill(0);
    text(" - (EF04MA03) Resolver e elaborar problemas com \nnúmeros naturais envolvendo adição e subtração, \nutilizando estratégias diversas, como cálculo, cálculo \nmental e algoritmos, além de fazer estimativas \ndo resultado. \n - (EF04MA04) Utilizar as relações entre adição e \nsubtração, bem como entre multiplicação e divisão, \npara ampliar as estratégias de cálculo. ", 15, 50)

    // BOTAO PARA VOLTAR
    textSize(30)
    stroke(200);
    fill(20);
    rect(300, ymenu3, 150, 50, 15)

    fill(240);
    noStroke();
    text("Voltar", 335, 435)
    if (mouseX > 300 && mouseX < 300 + largura && mouseY > ymenu3 && mouseY < ymenu3 + altura) {
      if (mouseIsPressed) {
        tela = 1;
        background(img);
      }
    }
  }


  if (tela == 3) {
    background(img);
    textSize(20)
    fill(0)
    text("Matheus Mozart: Programador \nGraduando em Ciências e Tecnologia ", 10, 50);
    text("Sérgio: Educador \nGraduando em Licenciatura em Matemática ", 10, 210);
    image(img2, 10, 85);
    image(img3, 10, 250);

    // BOTAO PARA VOLTAR
    textSize(30)
    stroke(200);
    fill(20);
    rect(300, ymenu3, 150, 50, 15)

    fill(240);
    noStroke();
    text("Voltar", 335, 435)
    if (mouseX > 300 && mouseX < 300 + largura && mouseY > ymenu3 && mouseY < ymenu3 + altura) {
      if (mouseIsPressed) {
        tela = 1;
        background(img);
      }
    }
  }
  if (tela == 4) {
    background(img);
    textSize(20)
    fill(0)
    text(" Para controlar o personagem, deve-se usar as setas \n do teclado (<- e ->) e o (espaço) para atirar na opção \n correta. ", 10, 50);
    vidas = 3;
    pontos = 0;

    textSize(30)
    stroke(200);
    fill(20);
    rect(100, 400, 150, 50, 15)

    fill(240);
    noStroke();
    text("Iniciar", 130, 435)
    if (mouseX > 100 && mouseX < 100 + largura && mouseY > 400 && mouseY < 400 + altura) {
      if (mouseIsPressed) {
        tela = 5;
        background(img);
      }
    }

    // BOTAO PARA VOLTAR
    textSize(30)
    stroke(200);
    fill(20);
    rect(300, ymenu3, 150, 50, 15)

    fill(240);
    noStroke();
    text("Voltar", 335, 435)
    if (mouseX > 300 && mouseX < 300 + largura && mouseY > ymenu3 && mouseY < ymenu3 + altura) {
      if (mouseIsPressed) {
        tela = 1;
        background(img);
      }
    }

  }
  if (tela == 5) {
    background(img);
    textSize(30)
    fill(255, 0, 0)
    text("Vidas: " + vidas, 400, 30)
    text("Pontos: " + pontos, 20, 30)

    if (keyIsDown(LEFT_ARROW)) {
      if (x > 1) { // Impede do jogador se mover pra fora da tela
        x -= 5;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      if (x < (width - 50)) { // Impede do jogador se mover pra fora da tela
        x += 5;
      }
    }
    image(img4, x, y, 100, 100)
    tiro();
    questoes();
    resposta();
  }
  if (tela == 6) {
    background(img6);

    // BOTAO PARA VOLTAR
    textSize(30)
    stroke(200);
    fill(20);
    rect(90, 415, 319, 50, 15);

    fill(240);
    noStroke();
    text(" Eu revisei, vamos lá !", 100, 450);
    if (mouseX > 90 && mouseX < 90 + 319 && mouseY > 415 && mouseY < 415 + 50) {
      if (mouseIsPressed) {
        tela = 1;
        background(img);

      }
    }

  }
  if (tela == 7) {
    background(img7);
    stroke(200);
    fill(0, 0, 0);
    rect(170, 400, 150, altura, 15)

    textSize(30)
    fill(255);
    noStroke();
    text("Sair", 220, 435)
    if (mouseX > 170 && mouseX < 170 + 150 && mouseY > 400 && mouseY < 400 + altura) {
      if (mouseIsPressed) {
        tela = 1;
        background(img);
      }
    }
    
    c = " + "
    x = 220;
    y = 380
    pontos = 0
    vidas = 3
  }
}



function draw() {
  telas();

}