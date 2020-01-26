var a,b,c;
do{
    a = parseInt(prompt("Entrer a :"));
}while(a==0||isNaN(a));
do{
    b = parseInt(prompt("Entrer b :"));
}while(isNaN(b));
do{
    c = parseInt(prompt("Entrer c :"));
}while(isNaN(c));

var discri = Math.pow(b,2)-4*a*c;

var x1,x2;
if(discri>0){
    x1 = (-b+Math.sqrt(discri))/(2*a);
    x2 = (-b-Math.sqrt(discri))/(2*a);
    document.getElementById('Racine_1').innerHTML=x1;
    document.getElementById('Racine_2').innerHTML=x2;
}else if(discri==0){
    document.getElementById('Racine_1').innerHTML=parseInt((-b/(2*a)));
}else{
    document.getElementById('Racine_1').innerHTML=-b/(2*a)+" + i*"+Math.sqrt(Math.abs(discri))/(2*a);
    document.getElementById('Racine_2').innerHTML=-b/(2*a)+" - i*"+Math.sqrt(Math.abs(discri))/(2*a);
}