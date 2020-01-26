var Today = new Date();
/**/

var MonthUntilChristmas = 11-Today.getMonth();/* new Date(Today.getFullYear(), Today.getMonth() + 1, 0).getDate()-Today.getDate();*/

var DayUntilChristmas=new Date(Today.getFullYear(), Today.getMonth()+1, 0).getDate()-Today.getDate();
for(var x=1;x<=MonthUntilChristmas;x++){
    DayUntilChristmas += new Date(Today.getFullYear(), Today.getMonth() + x+1, 0).getDate();
}
DayUntilChristmas-=7;
alert(DayUntilChristmas);
if(Today.getMonth()==11&&Today.getDate()>=25){
    alert(parseInt(Today.getDate()-25));
}else{
    var CurrentY=Today.getFullYear;
    var bi = false;
    var ChristmasPasted=false;
    if((CurrentY%400==0) || ((CurrentY%4==0) && (CurrentYc%100!=0))){
        alert(parseInt(366-DayUntilChristmas-1));
    }else{alert(parseInt(365-DayUntilChristmas-1));}
}