//=============JS CODE FOR LEAP YEAR CHECKER
 
function LeapOrNot(){
    var year = document.getElementById("year").value;
    
if (year <= 1581){
    alert("Year must be greater than 1581.");
     }	
    
else if ((year % 4 == 0) && (year % 100 != 0)){
    document.getElementById("result").textContent = " a leap!";
    }
else {
        document.getElementById("result").textContent=("its not a leap year")
    }
}

function leap(){
    var yearr=document.getElementById("year").textContent;

 
}
