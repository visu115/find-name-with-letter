// // find the value starting string character is R and ending character is N

let studentName = ['akilan','mugilan','venkatesh','ramanan','rajan','bala','raj']

let showans = studentName.filter(function(string){
return (string[0] == 'r') && (string.charAt(string.length-1)=='n')


});
console.log(showans)

