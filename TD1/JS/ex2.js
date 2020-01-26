/**
 * 
 * Rectangle
 * 
 **/
var Rectangle = new Array(2); // Rectangle[0] = Longeur, Rectangle[1] = Largeur

do{
    Rectangle[0] = parseInt(prompt("Entrer la longeur du rectangle "));
}while(isNaN(Rectangle[0]));

do{
    Rectangle[1] = parseInt(prompt("Entrer la longeur du rectangle "));
}while(isNaN(Rectangle[1]));

alert("Les dimensions du rectangle sont de "+Rectangle[0]+"cm et de "+Rectangle[1]+"cm");
alert("Périmètre du rectangle : "+(Rectangle[0]+Rectangle[1])*2+"cm");
alert("Aire du rectangle : "+Rectangle[0]*Rectangle[1]+"cm²");

/**
 * 
 * Disque  
 * 
 **/

 var Disque;

 do{
    Disque = parseInt(prompt("Entrer le rayon du disque"));
}while(isNaN(Disque));

alert("Le périmètre du disque est de "+(Disque*2*Math.PI)+"cm");
alert("L'aire du disque est de "+(Disque*Disque*Math.PI)+"cm²");


/**
 * 
 * Triangle 
 * 
 **/

var Triangle = new Array(3); // Triangle[0] = Hypoténuse, Triangle[1] et Triangle[2] = côté du triangle
var perim;
var demiperim;

do{
    Triangle[0] = parseInt(prompt("Entrer l'hypoténuse du triangle"));
}while(isNaN(Triangle[0]));

do{
    Triangle[1] = parseInt(prompt("Entrer la mesure d'un des côté du triangle"));
}while(isNaN(Triangle[1]));

do{
    Triangle[2] = parseInt(prompt("Entrer la mesure du dernier côté du triangle"));
}while(isNaN(Triangle[2]));

if(Triangle[0]>Triangle[1]+Triangle[2]){
    alert("Le triangle n'est pas constructible");
}else if(Math.pow(Triangle[0],2)==(Math.pow(Triangle[1],2)+Math.pow(Triangle[2],2))){
    alert("Les dimensions du triangle sont de "+Triangle[0]+"cm, "+Triangle[1]+"cm et de "+Triangle[2]+"cm");
    alert("Le périmètre du triangle est de "+(Triangle[0]+Triangle[1]+Triangle[2]+"cm "));
    alert("L'aire du triangle est de "+((Triangle[1]*Triangle[2])/2)+"cm² ")
}else{
    alert("Les dimensions du triangle sont de "+Triangle[0]+"cm, "+Triangle[1]+"cm et de "+Triangle[2]+"cm");
    perim = Triangle[0]+Triangle[1]+Triangle[2];
    demiperim = perim/2;
    alert("Le périmètre du triangle est de "+perim+"cm ");
    alert("L'aire du triangle est de "+(Math.sqrt(demiperim*(demiperim-Triangle[0])*(demiperim-Triangle[1])*(demiperim-Triangle[2])))+"cm²");
}

