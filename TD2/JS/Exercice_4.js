var Input=String(prompt("Entrer la chaîne de caractère :"));
document.getElementById('Input').innerHTML+=" "+Input;

var Outpout="";
var CesarCharCode;
for(var x = 0;x<=Input.length-1;x++){
    CesarCharCode=Input.charCodeAt(x);
    CesarCharCode++;
    Outpout+=String.fromCharCode(CesarCharCode);
}
document.getElementById('Outpout').innerHTML+=Outpout;