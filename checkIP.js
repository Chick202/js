//Check if a given IP is valid in IPv4
function checkIP(ip){
	
	var splitIP = ip.split(".");
	if(splitIP.length !=4){
		console.log("Not valid");
	}
	
	for(var i=0; i<splitIP.length;i++){
		if(parseInt(splitIP[i])<0 && parseInt(splitIP[i])>255){
			console.log("Not Valid");
		}
		
		else{
			console.log("The ip is valid");
		}
	}
	
}

checkIP("10.2.71.139");