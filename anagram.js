//Given a list of words, arrange anagrams as groups
function anagram(li){
	
	var key = "";
    var newArr = new Array();
	
	for(var i=0; i<li.length; i++){
		
		key = li[i].split('').sort().join('');
		newArr[key] = li[i];
	}
  
    var keys = [];
    for(var key in newArr){
      if(newArr.hasOwnProperty(key))
      {
        keys.push(key);
      }
    }
  
    newArr.sort();
  
    for(key in newArr){
      //console.log(newArr[key]);
      console.log(key);
    }
	
}


var li = ["AMOR", "ARMO", "ESPONJA", "JAMON", "JAPONES", "MARO", "MONJA", "MOJAN", "MORA", "OMAR", "RAMO", "ROMA"];
anagram(li);


//Given a list of words, arrange anagrams as groups
function anagram(li){
	
	var key = "";
    var newArr = new Array();
    var keys = [];
	
	for(var i=0; i<li.length; i++){
		
		key = li[i].split('').sort().join('');
		//newArr[key] = li[i];
        newArr[li[i]] = key;
        keys[i] = li[i];
	}
   
    keys.sort();
    
  
    for(var j=0; j<keys.length;j++){
      var val = keys[j];
      console.log(val);
      //console.log(newArr[val]);
    }
	
}


var li = ["AMOR", "ARMO", "ESPONJA", "JAMON", "JAPONES", "MARO", "MONJA", "MOJAN", "MORA", "OMAR", "RAMO", "ROMA"];
anagram(li);