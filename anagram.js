//Given a list of words, arrange anagrams as groups
function anagram(li){
  
  var key = '';
  var list = {};
  
  for(i=0;i<li.length;i++){
    
    key = li[i].split('').sort().join('');
    
    if(key in list){
      list[key].push(li[i]);
    }
    
    else{
      list[key] = [li[i]];
    }
   
  }
  
  for(key in list){
    console.log(list[key]);  
  }
  
  
}



var li = ["AMOR", "ARMO", "ESPONJA", "JAMON", "JAPONES", "MARO", "MONJA", "MOJAN", "MORA", "OMAR", "RAMO", "ROMA"];
anagram(li);
