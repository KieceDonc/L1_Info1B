window.addEventListener("load",function(){
    Alea();
});

function Alea(){
    var NumberAlea;
    for(var x = 0;x<2;x++){
        var PositifOuNegatif = Math.round(Math.random()*2);
        if(PositifOuNegatif==0){
            NumberAlea=Math.round((Math.random()*101)*(-1));
        }else{
            NumberAlea=Math.round((Math.random()*101));
        }   

        document.getElementById("Ramdom"+x).value=NumberAlea;
    }
}

function Verifier(){
    var AllEq = document.getElementsByClassName('AB');

    var Fill = true;
    for(var x=0;x<AllEq.length;x++){
        if(AllEq[x].value.length==0){
            Fill=false;
            AllEq[x].style.borderColor="red";
        }else{AllEq[x].style.borderColor="grey";}
    }

    if(Fill==false){
        alert('Vous devez remplir chaque zones');
    }else{
        var Soluce = GetAllSoluce();
        
        for(var x=0;x<AllEq.length;x++){
            if(parseInt(AllEq[x].value)==Soluce[x]){
                AllEq[x].style.backgroundColor="green";
            }else{AllEq[x].style.backgroundColor="red";}
        }
    }
}

function Solution(){

    var AllInputText = document.getElementsByClassName('ABS');

    var Soluce = GetAllSoluce();
    for(var x=0;x<Soluce.length;x++){
        AllInputText[x].value=Soluce[x];
    }
}

function GetAllSoluce(){
    
    var RamdomA = parseInt(document.getElementById("Ramdom0").value);
    var RamdomB = parseInt(document.getElementById("Ramdom1").value);

    var Soluce = [RamdomA+RamdomB,RamdomA-RamdomB,RamdomA*RamdomB,RamdomB/RamdomB]

    return Soluce;
}