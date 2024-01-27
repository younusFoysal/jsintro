/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


let childAge = 65;
let ticket = 100;

if (childAge < 10){
    console.log("Free");

    // 50% discount
    let discount = ticket - ((50/ticket)*100);
    console.log("Pay:" + discount);
}else if (childAge >= 60){
    // 15% discount
    let discount = ticket - ((15/ticket)*100);
    console.log("Pay:" + discount);
}else {
    console.log("Pay:" + ticket);
}
