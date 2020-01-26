window.addEventListener('load', function(){ // Au démarrage de la page, ce code s'éxécute
	PageIsIndexOrNot();
    Pub(document.getElementById('PubChess').value);
    CurrentDate();
    PubSize();
    setInterval(PubPrice,1000);
    if(CurrentPageIsIndex==true){
        SetupImgSrc();
    }
});

window.addEventListener('resize', function(event){ // à chaque fois que la fenêtre de l'utilisateur change de taille, ce code s'éxécute
    PubSize();
});

function CurrentDate(){ // Si l'utilisateur appui sur le bouton nommé "Mettre à jour", ce code s'éxécute
    
    var today = new Date();
    document.getElementById('CurrentHour').innerHTML = today.getHours() + ":" + today.getMinutes() ;
    document.getElementById('CurrentDate').innerHTML = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();

}

function AllCurrentDate(){ // Si l'utilisateur appui sur le bouton nommé "affichage complet", ce code s'éxécute
    var today = new Date();

    var CurrentMonth;

    switch(today.getMonth()+1){
        case 1:{CurrentMonth="Janvier";break;}
        case 2:{CurrentMonth="Février";break;}
        case 3:{CurrentMonth="Mars";break;}
        case 4:{CurrentMonth="Avril";break;}
        case 5:{CurrentMonth="Mai";break;}
        case 6:{CurrentMonth="Juin";break;}
        case 7:{CurrentMonth="Juillet";break;}
        case 8:{CurrentMonth="Août";break;}
        case 9:{CurrentMonth="Septembre";break;}
        case 10:{CurrentMonth="Octobre";break;}
        case 11:{CurrentMonth="Novembre";break;}
        case 12:{CurrentMonth="Décembre";}
    }

    alert("La date à la quel vous avez appuyé sur le bouton était le : "+today.getDate()+" "+CurrentMonth+" "+today.getFullYear()+" à "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() );
}

function Pub(CurrentSelection){ // Le but de cette fonction est d'executer le choix de l'utilisateur
    //PageIsIndexOrNot(); // On appel cette fonction pour qu'elle change la variable CurrentPageIsIndex en fonction de si nous sommes dans l'index ou non. Elle fait sa pour palier ConstructImg() ( indiquer la bonne référance des imgs )
    if(CurrentSelection==3){ // Ex : L'utilisateur à demander a afficher le coup " fourchette ". Je nettoie d'abord l'échiquier du coup précédent et j'appel donc la fonction qui le permet
        PubClean();PubFourchette();
    }else if(CurrentSelection==1){
        PubClean();PubCoupDuBerger();
    }else if(CurrentSelection==2){
        PubClean();PubClouage();
    }else{
        PubClean();PubMiseEnPlace();
    }
}

function PubSize(){ // Gère la taille de l'échiquier dans le "bloc" pub 
    /* 
    Voici mon problème et voici pourquoi cette fonction a été crée. 
    Je souhaite que l'échiquier puisse adapter sa taille par rapport à la hauteur / largeur de la fenêtre utilisateur.
    l'échiquier fait 80 % du bloc PUB en largeur
    Le CSS ne me permet ou pas ( à ma connaissance ) de crée des cellules carrées dynamique.
    J'utilise donc cette fonction qui me permet à chaque fois que la fenêtre de l'utlisateur change de taille de changer la taille de l'échiquier

    */
   var Echiquier=document.getElementById('echiquier'); // Je récupère l'échiquier
   var Cells = Echiquier.querySelectorAll("td");   // Je récupère chaque case de l'échiquier

   var EchiquierWidth = Echiquier.clientWidth; // Je récupère la hauteur d'une case avec la taille voulu
   var CellsHeight = EchiquierWidth/8; // Je calcul la largeur / hauteur d'une cellule

       for(var x=0;x<Cells.length;x++){ // Je parcours chaque case de l'échiquier
            Cells[x].style.height = CellsHeight+"px"; // J'applique la hauteur voulu
            Cells[x].style.width = CellsHeight+"px"; // J'applique la largeur voulu
       }

}

function PubClean(){ // Le but de cette est de nettoyer l'échiquier
    var Echiquier=document.getElementById('echiquier'); // Je récupère l'échiquier
    var Cells = Echiquier.querySelectorAll("td"); // Je récupère chaque case de l'échiquier

        for(var x=0;x<Cells.length;x++){ // Je parcours chaque case de l'échiquier
            if(Cells[x].childElementCount==1){ // Je regarde si la case à une pièce. Si oui je la supprimer avec la ligne de code en dessous
                Cells[x].removeChild(Cells[x].firstChild);
            }
        }
}

function PubMiseEnPlace(){

    var Echiquier=document.getElementById('echiquier'); // Je récupère l'échiquier
    var Cells = Echiquier.querySelectorAll("td");   // Je récupère chaque case de l'échiquier

        for(var x=0;x<Cells.length;x++){ // Je parcours chaque case de l'échiquier
            switch(true){ // Je mets en place chaque pièce
                case (x==0||x==7):{Cells[x].appendChild(ConstructImg("White","Tower"));break;} // Mise en place des tours blanches
                case (x==1||x==6):{Cells[x].appendChild(ConstructImg("White","Knight"));break;} // Mise en place des cavaliers blancs
                case (x==2||x==5):{Cells[x].appendChild(ConstructImg("White","Bishop"));break;} // etc .....
                case (x==3):{Cells[x].appendChild(ConstructImg("White","King"));break;}
                case (x==4):{Cells[x].appendChild(ConstructImg("White","Queen"));break;}
                case (x>=8&&x<16):{Cells[x].appendChild(ConstructImg("White","Pawn"));break;}
                case (x==56||x==63):{Cells[x].appendChild(ConstructImg("Black","Tower"));break;}
                case (x==57||x==62):{Cells[x].appendChild(ConstructImg("Black","Knight"));break;}
                case (x==58||x==61):{Cells[x].appendChild(ConstructImg("Black","Bishop"));break;}
                case (x==59):{Cells[x].appendChild(ConstructImg("Black","King"));break;}
                case (x==60):{Cells[x].appendChild(ConstructImg("Black","Queen"));break;}
                case (x>=48&&x<56):{Cells[x].appendChild(ConstructImg("Black","Pawn"));}
            }
        }
}

function PubCoupDuBerger(){

    var Echiquier=document.getElementById('echiquier'); // Je récupère l'échiquier
    var Cells = Echiquier.querySelectorAll("td");   // Je récupère chaque case de l'échiquier

        for(var x=0;x<Cells.length;x++){ // Je parcours chaque case de l'échiquier
            switch(true){ // Je mets en place chaque pièce
                case (x==0||x==7):{Cells[x].appendChild(ConstructImg("White","Tower"));break;} // Mise en place des tours blanches
                case (x==1||x==36):{Cells[x].appendChild(ConstructImg("White","Knight"));break;} // Mise en place des cavaliers blancs
                case (x==2||x==5):{Cells[x].appendChild(ConstructImg("White","Bishop"));break;} // etc .....
                case (x==3):{Cells[x].appendChild(ConstructImg("White","King"));break;}
                case (x==4):{Cells[x].appendChild(ConstructImg("White","Queen"));break;}
                case ((x>=8&&x<10)||x>12&&x<16||x==20||x==27):{Cells[x].appendChild(ConstructImg("White","Pawn"));break;}
                case (x==56||x==63):{Cells[x].appendChild(ConstructImg("Black","Tower"));break;}
                case (x==57||x==62):{Cells[x].appendChild(ConstructImg("Black","Knight"));break;}
                case (x==61||x==37):{Cells[x].appendChild(ConstructImg("Black","Bishop"));break;}
                case (x==59):{Cells[x].appendChild(ConstructImg("Black","King"));break;}
                case (x==10):{Cells[x].appendChild(ConstructImg("Black","Queen"));break;}
                case ((x>=48&&x<51)||(x>51&&x<56)||x==35):{Cells[x].appendChild(ConstructImg("Black","Pawn"));}
            }
        }

        Cells[3].firstChild.style.transform = 'rotate(90deg)'; // On tourne le roi de 90 degres pour bien faire comprend qu'il est echec et mat
}

function PubFourchette(){
    
    var Echiquier=document.getElementById('echiquier'); // Je récupère l'échiquier
    var Cells = Echiquier.querySelectorAll("td");   // Je récupère chaque case de l'échiquier
    
    for(var x=0;x<Cells.length;x++){ // Je parcours chaque case de l'échiquier
        switch(true){ // Je mets en place chaque pièce
        
            case (x==1):{Cells[x].appendChild(ConstructImg("White","Knight"));break;} // Mise en place des cavaliers blancs
            case (x==7):{Cells[x].appendChild(ConstructImg("White","Bishop"));break;} // etc .....
            case (x==16):{Cells[x].appendChild(ConstructImg("White","King"));break;}
            case (x==59):{Cells[x].appendChild(ConstructImg("Black","King"));break;}
            case (x==6):{Cells[x].appendChild(ConstructImg("Black","Queen"));break;}
        }
    }
}

function PubClouage(){
    var Echiquier=document.getElementById('echiquier'); // Je récupère l'échiquier
    var Cells = Echiquier.querySelectorAll("td");   // Je récupère chaque case de l'échiquier
    
    for(var x=0;x<Cells.length;x++){ // Je parcours chaque case de l'échiquier
        switch(true){ // Je mets en place chaque pièce
        
            case (x==1):{Cells[x].appendChild(ConstructImg("White","Knight"));break;} // Mise en place des cavaliers blancs
            case (x==0):{Cells[x].appendChild(ConstructImg("White","King"));break;} // etc .....
            case (x==59):{Cells[x].appendChild(ConstructImg("Black","King"));break;}
            case (x==6):{Cells[x].appendChild(ConstructImg("Black","Queen"));break;}
        }
    }
}

var CurrentPageIsIndex = false;

function PageIsIndexOrNot(){
    var CurrentUrl = window.location.href;
    if(CurrentUrl.substring(CurrentUrl.length-10,CurrentUrl.length)=="index.html"){
        CurrentPageIsIndex=true;
    }else if(CurrentUrl.substring(CurrentUrl.length-1,CurrentUrl.length)=="/"){
        CurrentPageIsIndex=true;
    }else{
        CurrentPageIsIndex=false;
    }
}

function ConstructImg(color,piece){
    var img = document.createElement('img');
    img.className="ImgEchiquier";

    var Path="";
    if(CurrentPageIsIndex==true){
        Path="/media/";
    }else{
        Path="../media/"
    }

    if(color=="White"){
        switch(piece){
            case "Tower":{ img.src = Path+"Pub_White_Tower.png";break;}
            case "Knight":{ img.src = Path+"Pub_White_Knight.png";break;}
            case "Bishop":{ img.src = Path+"Pub_White_Bishop.png";break;}
            case "Queen":{ img.src = Path+"Pub_White_Queen.png";break;}
            case "King":{ img.src = Path+"Pub_White_King.png";break;}
            case "Pawn":{ img.src = Path+"Pub_White_Pawn.png";}
        }
    }else{
        switch(piece){
            case "Tower":{ img.src = Path+"Pub_Black_Tower.png";break;}
            case "Knight":{ img.src = Path+"Pub_Black_Knight.png";break;}
            case "Bishop":{ img.src = Path+"Pub_Black_Bishop.png";break;}
            case "Queen":{ img.src = Path+"Pub_Black_Queen.png";break;}
            case "King":{ img.src = Path+"Pub_Black_King.png";break;}
            case "Pawn":{ img.src = Path+"Pub_Black_Pawn.png";}
        }
    }
    
    return img;
}

var xPubPrice=0;

function PubPrice(){
    var Color=['#4c5454','#a3483a','#0008a3','#000000','#115c52','#525f38'];
    document.getElementById('PrixArnaque').style.color=Color[xPubPrice];
    if(xPubPrice==5){xPubPrice=-1;}
    xPubPrice++;
}

function OpenLink(link){
    window.open(link,"_self");
}

function ScrollToElement(ID){
    document.getElementById(ID).scrollIntoView({ behavior: 'smooth', block: 'center'});
}

function CheckQuiz(){
    var allanwser = document.getElementById('PetitQuiz').querySelectorAll("span");

    for(var x=0;x<allanwser.length;x++){
        if(x==2||x==4||x==8||x==12||x==13||x==17){
            allanwser[x].style.color='green';
        }else{
            allanwser[x].style.textDecoration='line-through';
        }
    }

    var userAnwserAllGood = true;
    var userAllAnwser = [
                        document.getElementsByName('Q1')[2].checked,
                        document.getElementsByName('Q2')[1].checked,
                        document.getElementsByName('Q3')[2].checked,
                        document.getElementsByName('Q4')[2].checked,
                        document.getElementsByName('Q5')[0].checked,
                        document.getElementsByName('Q6')[1].checked
                        ]

    for( var x = 0; x<userAllAnwser.length;x++){
        if(userAllAnwser[x]==false){
            userAnwserAllGood=false;
        }
    }

    var audio;
    if(userAnwserAllGood==true){
        audio = new Audio('../media/Sound_win.mp3');
    }else{
        audio = new Audio('../media/Sound_loose.mp3');
    }

    audio.play();


}

function FriseChronologique(CurrentTD){
    var TDFoot = document.getElementById('FriseChronologique').querySelector('tfoot').querySelector('td');
    
    switch(CurrentTD){
        case 0:{
            TDFoot.firstChild.style.borderColor="darkred";
            TDFoot.firstChild.innerHTML=
            "L'histoire des échecs peut être retracée autour de 1500 ans en arrière. Ils auront commencé dans le nord de L'Inde, se répandront jusqu'an Perse et propageront sur le continent Asiatique";
            break;
        }
        case 1:{
            TDFoot.firstChild.style.borderColor="darkorange";
            TDFoot.firstChild.innerHTML=
            "Les échecs ont fait leur chemin et continuent de s'expandre notamment grâce à l'Islam et également sur le continent Européen";
            break;
        }
        case 2:{            
            TDFoot.firstChild.style.borderColor="#bdbf0f";
            TDFoot.firstChild.innerHTML=
            "Jusqu'à la fin du 15ième siècle les échecs ont énormément évolué. Il arrive également à survivre malgré les sections imposées par l'Église chrétienne";
            break;
        }
        case 3:{            
            TDFoot.firstChild.style.borderColor="darkgreen";
            TDFoot.firstChild.innerHTML=
            "Cette période est connue pour être la ''période romantique'' des échecs. Les joueurs jouent principalement autour des sacrifices et des tactiques ce qui offrait un jeu extrêmement dynamique";
            break;
        }
        case 4:{
            TDFoot.firstChild.style.borderColor="darkcyan";
            TDFoot.firstChild.innerHTML=
            "Le premier tournoi du monde des échecs a lieu durant 1886 où Wilhelm Steinitz est officiellement devenu le premier champion du monde des échecs ";
            break;
        }
        case 5:{
            TDFoot.firstChild.style.borderColor="#bf0f8d";
            TDFoot.firstChild.innerHTML=
            "Le 20ième siècle révolutionna les échecs avec l'invention des bases de données et programmes d'échecs. En 1997, le champion du monde Garry Kasparov a perdu 6 parties contre l'ordinateur d'IBM Deep Blue";
            break;
        }
        case 6:{
            TDFoot.firstChild.style.borderColor="purple";
            TDFoot.firstChild.innerHTML=
            "Les sites en ligne d'échecs et de partie en ligne sont inventées et deviennent de plus en plus populaires.";
            break;}
    }
}25

function Nop(){
    alert("Nous n'avons pas fonctionnalité cette mais il a été décidé de la mettre car cela rendait le site encore plus joli ! ");
}
/***/
var ImgGallerie = new Array();

function SetupImgSrc(){ // Recupère le chemin de toutes les imgs

    var Init0=["CoupDuBerger.jpeg","DefenseSicilienne.jpg","Fourchette.gif","OuvertureAnglaise.jpg","OuvertureSokolsky.jpg","PartieEspagnol.jpg"]
    var Init1=["Notation.png","Pendule.JPG","TournoiALaRonde.png"];
    var Init2=["ExempleEchiquier.jpg","Quiz_Q3.jpg"];
    var Init3=["Bishop","King","Knight","Pawn","Queen","Tower"];

    var Path="";
    if(CurrentPageIsIndex==true){
        Path="/media/";
    }else{
        Path="../media/"
    }

    for(var x=0;x<25;x++){
        switch(true){
            case(x>=0&&x<6):{
                ImgGallerie[x]=Path+"DeroulementDunePartie_"+Init0[x];
                break;
            }
            case(x==6):{
                ImgGallerie[x]=Path+"HistoireDesEchecs_Exemple_de_la_legende.jpg";
                break;
            }
            case(x==7):{
                ImgGallerie[x]=Path+"Index_Wilhelm_Steinitz.jpg";
                break;
            }
            case(x>=8&&x<11):{
                var CurrentPositionToCall = x-8;
                ImgGallerie[x]=Path+"LaCompetition_"+Init1[CurrentPositionToCall];
                break;
            }
            case(x>=11&&x<=12):{
                var CurrentPositionToCall = x-11;
                ImgGallerie[x]=Path+"LesRegles_"+Init2[CurrentPositionToCall];
                break;
            }
            case(x>=13&&x<19):{
                var CurrentPositionToCall = x-13;
                ImgGallerie[x]=Path+"Pub_Black_"+Init3[CurrentPositionToCall]+".png";
                break;
            }
            case(x>=19):{
                var CurrentPositionToCall = x-19;
                ImgGallerie[x]=Path+"Pub_White_"+Init3[CurrentPositionToCall]+".png";
            }
        }
    }

    var ToShow=new Array(5);

    for(var x=0;x<5;x++){
        ToShow[x]=ImgGallerie[x];
    }

    GallerieShowThis(ToShow,true);
}

function GallerieShowThis(CurrentImgToShow,firstSetup){ // Show the new imgs 

    var menu = document.getElementById("GallerieMenu");
    for(var x = 0;x<CurrentImgToShow.length;x++){
        menu.appendChild(ConstructImgGallerie(CurrentImgToShow[x],false));
    }
    document.getElementById("GalleriePrincipal").appendChild(ConstructImgGallerie(CurrentImgToShow[2],true));

    if(!firstSetup){   
        DeleteOldImgs();
    }
}

function DeleteOldImgs(){ // Delete old imgs
    
    for(var x=0;x<5;x++){
        var GallerieMenu = document.getElementById("GallerieMenu");
        GallerieMenu.removeChild(GallerieMenu.firstElementChild);
    }

    var MenuPrincipal = document.getElementById("GalleriePrincipal");
    MenuPrincipal.removeChild(MenuPrincipal.firstElementChild);
}

function ImgPositionGallerie(){ // Get position to current principal img
    var CurrentImgP = ""+document.getElementById("GalleriePrincipal").firstElementChild.src;
    var CurrentImgPName = ""+CurrentImgP.substring(CurrentImgP.lastIndexOf('/')+1,CurrentImgP.length);
    var CurrentImgPPosition;

    for(var x=0;x<ImgGallerie.length;x++){
        
        var CurrentImgGallerie = ""+ImgGallerie[x].substring(ImgGallerie[x].lastIndexOf('/')+1,ImgGallerie[x].length);
        if(CurrentImgGallerie==CurrentImgPName){
            CurrentImgPPosition=x;
        }
    }
    return CurrentImgPPosition;
}

function GetImgsSlideRight(){ // Get imgs like if we slide to right

    var CurrentImgPosition=ImgPositionGallerie();
    CurrentImgPosition+=1; // We want next img 

    var ToShow= new Array(5);
    var To = CurrentImgPosition+3;
    var From = CurrentImgPosition-2;
    var cmpt=0;
    for(var x=From;x<To;x++){
        if(x<0){
            var CurrentNormalPosition = x+25;
            ToShow[cmpt]=ImgGallerie[CurrentNormalPosition];
        }else if(x>=25){
            var CurrentNormalPosition = x-25;
            ToShow[cmpt]=ImgGallerie[CurrentNormalPosition];
        }else{
            ToShow[cmpt]=ImgGallerie[x];
        }
        cmpt++;
    }
    return ToShow;

}

function GetImgsSlideLeft(){ // Get imgs like if we slide to left

    var CurrentImgPosition=ImgPositionGallerie();
    CurrentImgPosition-=1; // We want next img 

    var ToShow= new Array(5);
    var To = CurrentImgPosition+3;
    var From = CurrentImgPosition-2;
    var cmpt=0;
    for(var x=From;x<To;x++){
        if(x<0){
            var CurrentNormalPosition = x+25;
            ToShow[cmpt]=ImgGallerie[CurrentNormalPosition];
        }else if(x>=25){
            var CurrentNormalPosition = x-25;
            ToShow[cmpt]=ImgGallerie[CurrentNormalPosition];
        }else{
            ToShow[cmpt]=ImgGallerie[x];
        }
        cmpt++;
    }

    return ToShow;
}

function ConstructImgGallerie(Imgsrc,Principal){ // construct img
    var img = document.createElement('img');
    img.src=Imgsrc;
    if(Principal==true){
        img.className="GalleriePrincipal";
    }else{
        img.className="GallerieSecondary";
    }
    return img;
}

function CheckForm(){

    var FormOk = true;

    var formelements = document.forms[0].elements;
    for(var x=0;x<formelements.length;x++){
        var CurrentElement = formelements[x];
        if(!CurrentElement.checkValidity()){
            FormOk=false;
            ShowBorder(x);
        }
        if(CurrentElement.value.length<=0){
            FormOk=false;
            ShowBorder(x);
        }
    }

    var AllRadio = document.getElementsByName('Entry');
    var OneRadioCheck = false;
    document.getElement
    for(var x=0;x<AllRadio.length;x++){
        if(AllRadio[x].checked){
            OneRadioCheck=true;
        }
    }
    if(!OneRadioCheck){
        FormOk=false;
        alert("Vous devez choisir votre ouverture préférée");
    }

    var AllBox = document.getElementsByName('Play');
    var OneBoxCheck = false;
    for(var x=0;x<AllBox.length;x++){
        if(AllBox[x].checked){
            OneBoxCheck=true;
        }
    }
    if(!OneBoxCheck){
        FormOk=false;
        alert("Vous devez choisir un coup préférée");
    }
    return FormOk;
}

function ShowBorder(CurrentElement){
    document.forms[0].elements[CurrentElement].style.border="2px solid red";
}

function DeleteBorder(CurrentElement){
    document.forms[0].elements[CurrentElement].style.border="0px solid red";
}