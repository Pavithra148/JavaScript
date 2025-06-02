let companyName1="Testleaf";

let test=companyName1.split("");

let reversed="";
for(let i=test.length-1;i>=0;i--){
 reversed+=test[i].toLowerCase();
}

console.log(reversed);
