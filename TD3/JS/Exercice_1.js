window.addEventListener('load', function(){ 
    rez();
});

function exemple(){

    var TextExemple1 = document.createTextNode('Laval');
    document.getElementById('DivEx1').appendChild(TextExemple1);

    var TextExemple2 = document.createTextNode('Esope reste ici et se repose');
    document.getElementById('DivEx2').appendChild(TextExemple2);
}

function PalindromeSansEspace(){

    var mot=prompt("Entrer un mot :");
    mot = mot.replace(/ /g,'')
    var tom="";

    for(var i=0;i<mot.length;i++){

        var CurrentChar = mot.charAt(mot.length-i-1);
        if(CurrentChar!=' '==true){
            tom+=CurrentChar;
        }
    }
    if(mot.localeCompare(tom)==0){
        AddTextOutpout(mot+" est un palindrome");
    }else{
        AddTextOutpout(mot+" n'est pas un palindrome");
    }
        
}

function PalindromeAvecEspace(){

    var mot=prompt("Entrer un mot :");
    var tom="";
    
    for(var i=0;i<mot.length;i++){
        tom+=mot.charAt(mot.length-i-1);
    }
    if(mot.localeCompare(tom)==0){
        AddTextOutpout(mot+" est un palindrome parfait");
    }else{
        AddTextOutpout(mot+" n'est pas un palindrome parfait");
    }
        
}

function rez(){
    document.getElementById('Output').innerHTML="";
    document.getElementById('DivEx1').innerHTML="";
    document.getElementById('DivEx2').innerHTML="";
}

function AddTextOutpout(Text){
    var DivOutpout = document.getElementById('Output');

    if(DivOutpout.innerHTML.length==0){
        var TextToAdd = document.createTextNode(Text);
        DivOutpout.appendChild(TextToAdd);
    }else{
        var TextToAdd = document.createTextNode(Text);
        DivOutpout.innerHTML+="<br />";
        DivOutpout.appendChild(TextToAdd);
    }
}