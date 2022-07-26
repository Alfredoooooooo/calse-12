var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var path1;
var boy1;
function preload(){
  //loadImage de path (camino)
  path= loadImage("path.png")
  //loadAnimation de boy (niño)
  boy = loadAnimation("Jake1.png","Jake2.png")
 
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 path1=createSprite(200,200)
//agregar imagen de path
path1.addImage(path)
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path1.velocityY=4              
path1.scale=1.2;

//crear sprite de boy (niño)
boy1=createSprite(180,340,30,30)
//agregar animación para boy
boy1.addAnimation("Jake",boy)
boy1.scale=0.8;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path1.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy1.x=World.mouseX;
  edges= createEdgeSprites();
  boy1.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path1.y > 400 ){
    path1.y = height/2;
  }
  
  drawSprites();
}
