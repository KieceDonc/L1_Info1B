do{
    var note = parseInt(prompt("Entrer la note de l'élève :"));
}while(isNaN(note)&&(note>20||note<0));

if(note==0){
    ModifyText("Il faudra vraiment vous y mettre");
}else if(note<5){
    ModifyText("Manque de travail");
}else if(note>=5&&note<10){
    ModifyText("Doit faire quelques efforts");
}else if(note>=10&&note<15){
    ModifyText("C'est bien");
}else if(note>=15&&note<20){
    ModifyText("C'est très bien, maintenez vos efforts");
}else{
    ModifyText("Excellent !");
}

function ModifyText(t){
    alert(t);
    document.getElementById('note').innerHTML =""+t;
}