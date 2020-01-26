do{
    AsciiStandardOuEtendu = parseInt(prompt("Entrer la table Ascii que vous souhaitez : ( 0 = standard, 1 = étendu )"));
}while(AsciiStandardOuEtendu!=0&&AsciiStandardOuEtendu!=1||isNaN(AsciiStandardOuEtendu));

var tableau = document.createElement('table');
if(AsciiStandardOuEtendu==0){
    CreateTable(0,127);
}else{
    CreateTable(128,255);
}

function CreateTable(xstart,xend){
    document.body.appendChild(tableau);
    colonne = document.createElement('tr');
    tableau.appendChild(colonne);
    for(var x=xstart;x<=xend;x++){
        
        var cellule = document.createElement('td'); 
        colonne.appendChild(cellule);
        var CelluleText = document.createTextNode(String.fromCharCode(x));
        cellule.appendChild(CelluleText);
        
        if((x+1)%8==0){
            
            colonne = document.createElement('tr');
            tableau.appendChild(colonne);
        }
    }
}