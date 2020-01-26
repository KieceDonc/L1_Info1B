var CmptTirage =["","","","","",""];

for( var x = 0; x<CmptTirage.length;x++){
    CmptTirage[x]=0;
}
do{
    var NmbTirage = parseInt(prompt("Entrer le nombre de tirage :"));
}while(isNaN(NmbTirage));

for(var x =0;x<NmbTirage;x++){
    var Alea = parseInt(Math.random()*6+1);
    switch(Alea){
        case 1:{CmptTirage[0]+=1;break;}
        case 2:{CmptTirage[1]+=1;break;}
        case 3:{CmptTirage[2]+=1;break;}
        case 4:{CmptTirage[3]+=1;break;}
        case 5:{CmptTirage[4]+=1;break;}
        case 6:{CmptTirage[5]+=1;}
    }
}

var Str = "";
for(var x = 0;x<6;x++){
    Str+=parseInt(x+1)+" "+CmptTirage[x]+"\n";
}
alert(Str);

do{
    var Case = parseInt(prompt("Entrer le nombre de case :"));
}while(isNaN(Case));
var cmpt = 0;
var TortueWin
do{
    var Tirage = parseInt(Math.random()*6+1);
    if(!(Tirage==6)){
        cmpt+=1;
    }
    
}while(Case<cmpt&&Tirage!=6);

if(cmpt==Case){
    alert("Tortue gagne");
}else{alert("Lièvre gagne");}

do{
    var NombreTirage= parseInt(prompt("Nombre de tirage"));
}while(isNaN(NombreTirage));

var test1=false,test2=false,test4=false;

var Compteur=0;

do{
    var Tirage = parseInt(Math.random()*6+1);
    
    switch(Tirage)
    {
        case 1: test1=true;break;
        case 2: test2=true;break;
        case 4: test4=true;
    }

    Compteur++;

}while(test1==false||test2==false||test4==false && Compteur<NombreTirage);

if(test1==true&&test2==true&&test4==true){
    alert("Bravo ! tu as gagné");
}else{
    alert("Tu as perdu dommage... essaye encore !");
}

