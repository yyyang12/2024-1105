let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle =0
let r=10
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的NotoSansTC-Medium.ttf字型
    font = loadFont("fonts/NotoSansTC-Medium.ttf") 
}
//===================================================

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  background("#ffc8dd")
  points = font.textToPoints("tws", -300, 80, 200, {
    sampleFactor:0.1
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大
      } 


function draw() {
  
background("#faedcd");
noFill()
  stroke("#fed9b7")
  strokeWeight(3)
  var rect_width=50 +mouseX/10
  var bc_width=50  +mouseY/10
  var sc_width=25+mouseX/10
  for(let j=0;j<20;j=j+1){
    for(let i=0;i<40;i=i+1){
     //if(j<10&i<10){
       //stroke("#00afb9") 
     //}else if (j<15&i<15){
     //  stroke("#0081a7") 
     //}else  {
      // stroke("#012a4a") 
     //}
    ellipse(25+50*i,25+50*j,bc_width) 
    rect(0+50*i,0+50*j,rect_width)
    ellipse(50+50*i,50+50*j,sc_width)
 }
   }
textSize(40)
text(mouseX+":"+mouseY,width/2,height/2)
translate(width/2,height/2)
rotate(frameCount%360)
for (let i=0; i<points.length-1; i++) { 
         //text(str(i),points[i].x,points[i].y)
         fill("#cdb4db")
        strokeWeight(1)
         //ellipse(points[i].x+r*sin(angle+i*10),points[i].y,points[i+1].x+r*sin(angle+i*10),points[i+1].y)
          stroke("#bde0fe")
          strokeWeight(5)
         line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),points[i+1].x+r*sin(angle+i*10),points[i+1].y+r*sin(angle+i*10))
      } 
      angle=angle+10
}

  