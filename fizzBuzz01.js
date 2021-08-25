let FB = 15;
if (FB % 3 == 0 && FB % 5 == 0) {
    console.log('Fizz Buzz');
}else if (FB % 3 == 0){
    console.log('FIZZ');
}else if (fB % 5 == 0){
    console.log('BUZZ');
}
else {
    console.log('not divisible by 3 or 5');
}

switch (true) {
    case ((FB % 3=== 0) && (FB % 5 === 0)):
        console.log('Fizz Buzz');
        break;
    case (FB % 3 === 0):
        console.log('FIZZ');
 break;
 case (fb % 5 === 0):
     console.log('BUZZ');
     break;
     default:
         console.log(FB);
}

 


FB % 3 == 0 && FB % 5 == 0 ?
 console.log('Fizz Buzz') :
FB % 3 == 0 ? 
console.log('Fizz')  :
FB % 5 == 0 ?
console.log("BUZZ"):
console.log (FB);

// SWITCH code swill run w/o default case
//terninary will require default