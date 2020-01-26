

function Pause(){
    if( document.getElementById('vid').paused==true){
        document.getElementById('vid').play();
    }else{
        document.getElementById('vid').pause();
    }
}

function Grand(){
    document.getElementById('vid').style.width="95%";
}

function Moyen(){
    document.getElementById('vid').style.width="50%";
}

function Petit(){
    document.getElementById('vid').style.width="20%";
}

