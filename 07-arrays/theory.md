
// Array ==> Array ordered list hoti hain jisme multiple values ak sath store kar sakty hain .

    let number = [10, 20, 30];
    console.log(number);

// Array Element ko Access Karna ;;;

let firstElement = number[0];
console.log(firstElement);
// Explanation ==> 
// Array name ky sath square bracket mein Element ka index nmbr pass kr dety hain ;;;

// Array Element ko Modify/Change karna ==> Kisi bhi Element ky value ko Change kr sakty hain ..
let ChangeValue = number[1] = 40;
// Explanation ==> 
// Array name ky sath square bracket mein Element ka index nmbr pass kr ky equal sign laga kr value lakh lety hain ;;;

console.log(ChangeValue);
 
//Array Element ko Delete karna ;;; ==> As ko 2 method se kar sakty hain ... 
//1st ==> Delete keyword ka use kar ky ,, Delete keyword ky sath ak problem ha ky Element to remove ho jata ha lakin empty space reh jaty ha
delete number[1] ;
console.log(number); 
// Explanation ==> 
// delete kewword laga kr array name ky sath square bracket mein Element ka index nmbr pass kr dety hain ;;;

// 2nd ==> splice() Method ka use kr ky 

const removeValue = number.splice(2, 1);
console.log(removeValue);
 // Explanation ==> splice method mein 2 parameters pass karty hain 1st Element index nmbr (kon sy element ko remove kran ha ), 2nd element quantity 

console.log(number);
