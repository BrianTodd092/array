var array =["Sunday",  "Monday",  "Tuesday",  "Wednesday",  "Thursday",  "Friday","Saturday"]
var date = new Date();
var today = date.getDay();
var msg = "";
var i = 0;




// Vertical Loop.
/*for( i=0; i <  array.length ; i++){
 msg += array[i] + "<br>";
}*/


//document.getElementById('weekday').innerHTML=array; // Horizontal.
//document.getElementById('weekday').innerHTML=array.join(', ');  // Horizontal + Space.
//document.getElementById('weekday').innerHTML=array.join(" <br> "); // Vertical.

while (i < array.length)
{
	if(i=== today){
		msg += '<p class="pa">' + array[i] + ' .... today! </p>';
	}
	else{
	 msg += '<p class="pb">' + array[i] + '</p>';	
	}
	i++;
}

document.getElementById('weekday').innerHTML=msg;

//  Loop Write Number 1-10
/*for( i=0; i < 11; i++){
     msg += i + '<br>';  
    }  
document.getElementById('weekday').innerHTML=msg;  */
