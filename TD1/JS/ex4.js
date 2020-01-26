var bol;

do{
    test_premier();
    bol = confirm("encore un test ? ");
}while(bol);

function SaisieInt(){

    var t; 
     
    do{
        t = parseInt(prompt("Entrer un nombre :"));
    }while(isNaN(t));

    return t;
}

function test_premier(){

    var premier = true;
    var number = SaisieInt();
    
    for(var x = 2; x<number;x++){
        if(number%x==0){
            premier = false;
        }
    }

    if(premier==true){
        alert(number+" est un nombre premier");
    }else{
        alert(number+" n'est pas un nombre premier");
    }
}