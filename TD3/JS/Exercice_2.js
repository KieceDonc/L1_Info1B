var Departement = [["Yonne","Nièvre","Côte d'Or","Saône-Et-Loire","Jura","Doubs","Haute-Saône","Terr. De Belfort"],["Manche","Calvados","Orne","Eure","Seine-Maritime"],["Pyrénées-Atlantiques","Landes","Gironde","Lot Et Garonne","Dordogne","Charente","Charente Maritime","Deux-Sèvres","Vienne","Creuse","Corrèze"]]

function ShowDepartement(){
    var CurrentRegion = parseInt(document.getElementById('region').value);
    

    switch(CurrentRegion){
        case 0:{CleanDepartement();break;}
        case 1:{CleanDepartement();AddDepartementToSelector(Departement[0]);break;} // Bourgogne Franche-Comté
        case 2:{CleanDepartement();AddDepartementToSelector(Departement[1]);break;} // Basse-Normandie
        case 3:{CleanDepartement();AddDepartementToSelector(Departement[2]);} // Nouvelle-Aquitaine
    }
}

function CleanDepartement(){
    var DefaultOpt = document.createElement('option');
    DefaultOpt.selected="selected";
    DefaultOpt.value="Default";
    DefaultOpt.appendChild(document.createTextNode("Choisissez un département"));

    var DepartementSelector = document.getElementById('departement');
    DepartementSelector.innerHTML="";
    DepartementSelector.appendChild(DefaultOpt);

}

function AddDepartementToSelector(AllDepartement){
    var DepartementSelector = document.getElementById('departement');

    for(var x= 0; x<AllDepartement.length;x++){

        var Opt = document.createElement('option');
        Opt.appendChild(document.createTextNode(AllDepartement[x]));
        Opt.value=AllDepartement[x];
        DepartementSelector.appendChild(Opt);

    }
}

function Choose(){
    var CurrentRegion = parseInt(document.getElementById('region').value);
    var CurrentDepartement = document.getElementById('departement');
    if(CurrentRegion==0){
        alert("Veuillez faire un choix de région");
    }else{
        if(CurrentDepartement.value=="Default"){
            alert("Veuillez faire un choix de département");
        }else{
            for (var x = 0; x < CurrentDepartement.options.length; x++ ) {
                var opt = CurrentDepartement.options[x];
                if ( opt.selected === true ) {
                    switch(CurrentRegion){
                        case 1:{alert("Région : Bourgogne Franche-Comté, Département :+"+opt.value);break}
                        case 2:{alert("Région : Basse-Normandie, Département :+"+opt.value);break}
                        case 3:{alert("Région : Nouvelle-Aquitaine, Département :"+opt.value);break}
                    }
                }
            }
        }
    }
}