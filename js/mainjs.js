
var inputday=document.getElementById("day");
var inputmonth=document.getElementById("month");
function horoScope(){   
   aries();  
   taurus();
   gemini();
   cancer();
   Leo();
   Virgo();
   Libra();
   Scorpius();
   Sagittarius();
   Capricorn();
   Aquarius();
   Pisces();
    }

            function aries(){

                var x=inputday.value;
                var y=inputmonth.value;
                    if( (x>=21 && y=="3") || (x<=20 && y=="4") ){
                       document.getElementById("yourHoroScope").innerHTML="Aries";
                    }
            }       
           function taurus(){
            var x=inputday.value;
            var y=inputmonth.value;
                if( (x>=21 && y=="4") || (x<=21 && y=="5") ){
                   document.getElementById("yourHoroScope").innerHTML="Taurus";
                }    
           }  
           function gemini(){
            var x=inputday.value;
            var y=inputmonth.value;
                if( (x>=22 && y=="5") || (x<=21 && y=="6") ){
                   document.getElementById("yourHoroScope").innerHTML="Gemini";
                }
           }   
           function cancer(){
            var x=inputday.value;
            var y=inputmonth.value;
                if( (x>=22 && y=="6") || (x<=22 && y=="7") ){
                   document.getElementById("yourHoroScope").innerHTML="Cancer";
                }
           }   
           function Leo(){
            var x=inputday.value;
            var y=inputmonth.value;
                if( (x>=23 && y=="7") || (x<=22 && y=="8") ){
                   document.getElementById("yourHoroScope").innerHTML="Leo";
                }
           }  
           function Virgo(){
            var x=inputday.value;
            var y=inputmonth.value;
                if( (x>=23 && y=="8") || (x<=22 && y=="9") ){
                   document.getElementById("yourHoroScope").innerHTML="Virgo";
                }
           }   
           function Libra(){
            var x=inputday.value;
            var y=inputmonth.value;
                if( (x>=23 && y=="9") || (x<=22 && y=="10") ){
                   document.getElementById("yourHoroScope").innerHTML="Libra";
                }
           }     
           function Scorpius(){
            var x=inputday.value;
            var y=inputmonth.value;
                if( (x>=23 && y=="10") || (x<=21 && y=="11") ){
                   document.getElementById("yourHoroScope").innerHTML="Scorpius";
                }
           }  
           function Sagittarius(){
            var x=inputday.value;
            var y=inputmonth.value;
                if( (x>=22 && y=="11") || (x<=21 && y=="12") ){
                   document.getElementById("yourHoroScope").innerHTML="Sagittarius";
                }
           }  
           function Capricorn(){
            var x=inputday.value;
            var y=inputmonth.value;
                if( (x>=22 && y=="12") || (x<=20 && y=="1") ){
                   document.getElementById("yourHoroScope").innerHTML="Capricorn";
                }
           }   
           function Aquarius(){
            var x=inputday.value;
            var y=inputmonth.value;
                if( (x>=21 && y=="1") || (x<=19 && y=="2") ){
                   document.getElementById("yourHoroScope").innerHTML="Aquarius";
                }
           }    
           function Pisces(){
            var x=inputday.value;
            var y=inputmonth.value;
                if( (x>=20 && y=="2") || (x<=20 && y=="3") ){
                   document.getElementById("yourHoroScope").innerHTML="Pisces";
                }
           }               
           