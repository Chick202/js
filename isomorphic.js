//Given two strings find out if they are isomorphic to each other

isomorphic(s, t);
function isomorphic(s, t){
  var key = '';
  var list = {};
  var bool = false;
  
  if(s.length != t.length){
    console.log("False");
  }
  
  else{
   
    for(i=0;i<s.length;i++){
       key = s.charAt(i);
      
      //console.log(list.lenght);
      
      if(key in list){
        if(list[key] != t.charAt(i)){
            
            bool = false;
            break;
        }
        
        else{
           bool = true;
        }
      }
      
      else{
        list[key] = t.charAt(i);
        
      }
      
    } 
    
    if(!bool){
      console.log('fail');
    }
     else{
       console.log('cool');
     }
  }
}
​
​
var s = 'egg';
var t = 'add';
//var s = 'aabbaa';
//var t = 'bbddcc';
//var s = "aab"
//var t = "xyz"
isomorphic(s, t);
Console Run  Clear
"cool"
Bin info
just now
