// identifica o estado do disparo: false, não está acontecendo um disparo
// e true quando está acontecendo  
var disparo = false; 
var xd, yd; // coordendas do disparo
var x, y; // coordendas do jogador
  

// os códigos de "setup" só executam uma vez 
function setup() {
  x = 100;
  xd = x; 
  
  y = 380;
  yd = y; 
}

// os códigos de "draw" executam constantemente 
function draw() { 
  // Tratamento das teclas 
  if (keyIsDown(32) && (! disparo) ){ 
    disparo = true;
    xd = x;
    yd = y;     
  }
  // movimentação do disparo 
  // se o disparo estiver ativo 
  if (disparo) {
    // movimenta o disparo / tiro 
    xd = xd +5;
    // se o disparo sumir na tela 
    if (xd > width) {
      // habilida a ocorrência de um novo disparo 
      disparo = false; 
    }
  }
  
  // limpa o cenário 
  background(img); 
  
  // --------------- Desenha o cenário -----------------
  // desenha jogador 
  ellipse(x, y, 20, 50);
  // desenha disparo 
  // se o disparo estiver ativo 
  if (disparo) {
    // desenha a elipse / disparo 
    ellipse(xd,yd,8,8);
    
  }
}