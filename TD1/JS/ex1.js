var Entrerfraction = new Array();

for(var x = 0; x<4;x++){
   var temp;
   if(x==0){
        do{
            temp =prompt("Entrer le dividende de la "+Math.trunc((x+2)/2)+"ième fraction : ")     
        }while(isNaN(temp)); 
   }else{
        do{
            temp = prompt("Entrer le diviseur de la "+Math.trunc((x+2)/2)+"ième fraction : ")
        }while(isNaN(temp)&&parseInt(temp)==0); 
   }

   Entrerfraction[x]=parseInt(temp);
}


var SommeFraction = new Array();
SommeFraction[0]=Entrerfraction[0]*Entrerfraction[3]+Entrerfraction[2]*Entrerfraction[1];
SommeFraction[1]=Entrerfraction[3]*Entrerfraction[1];

var PGCD_N = pgcd(SommeFraction[0],SommeFraction[1]);
SommeFraction[0]=SommeFraction[0]/PGCD_N;
SommeFraction[1]=SommeFraction[1]/PGCD_N;

alert(SommeFraction[0]+"\n ─ \n"+SommeFraction[1]);

var SoustractionFraction = new Array();
SoustractionFraction[0]=Entrerfraction[0]*Entrerfraction[3]-Entrerfraction[2]*Entrerfraction[1];
SoustractionFraction[1]=Entrerfraction[3]*Entrerfraction[1];

PGCD_N = pgcd(SoustractionFraction[0],SoustractionFraction[1]);
SoustractionFraction[0]=SoustractionFraction[0]/PGCD_N;
SoustractionFraction[1]=SoustractionFraction[1]/PGCD_N;

alert(SoustractionFraction[0]+"\n ─ \n"+SoustractionFraction[1]);

var MultiplicationFraction = new Array();
MultiplicationFraction[0]=Entrerfraction[0]*Entrerfraction[2];
MultiplicationFraction[1]=Entrerfraction[3]*Entrerfraction[1];

PGCD_N = pgcd(MultiplicationFraction[0],MultiplicationFraction[1]);
MultiplicationFraction[0]=MultiplicationFraction[0]/PGCD_N;
MultiplicationFraction[1]=MultiplicationFraction[1]/PGCD_N;

alert(MultiplicationFraction[0]+"\n ─ \n"+MultiplicationFraction[1]);

var DiviseurFraction = new Array(); 

DiviseurFraction[0]=Entrerfraction[0]*Entrerfraction[3];
DiviseurFraction[1]=Entrerfraction[1]*Entrerfraction[2];

PGCD_N = pgcd(DiviseurFraction[0],DiviseurFraction[1]);
DiviseurFraction[0]=DiviseurFraction[0]/PGCD_N;
DiviseurFraction[1]=DiviseurFraction[1]/PGCD_N;

alert(DiviseurFraction[0]+"\n ─ \n"+DiviseurFraction[1]);


function pgcd(a,b){

    var t;

    while(b!=0){
        t=b;
        b=a%b;
        a=t;
    }

    return a;
}