

// console.log(5<10);
// console.log(5 === 10);

console.log(15 >= 10);

if (13<10){
    console.log("smaller value");
}else {
    console.log("Bigger value");
}

//

const salary = 25000;
const isBCS = true;
const height = 61;
const hasCar = true

if (salary > 20000 && height > 66){
    console.log("Su --- patro");
}else{
    console.log("onno patro khujo")
}

// Complex condition

if((salary > 25000 && hasCar === true) || isBCS === true){
    console.log("meyer 14 gusti raji")
}


// discount


const price = 5000;

if (price >= 5000){
    //10% discount
    const discount = price * 10/100;
    console.log(discount);

    const payAmount = price - discount;
    console.log(payAmount);

}else if (price > 2500){
    console.log("okk");
}
else {
    console.log(price);
}

// nested if-else

const money = 500;
if (money > 300){
    console.log("Bro you are rich !!");
}else {
    if (money > 100){
        console.log("tui goribzz");
    }else {
        if (money > 0){
            console.log("dost kola kha");
        }else {
            console.log("ghumah")
        }
    }
}




const age = 20;

// ternary op simple
age > 18 ? console.log("yes") : console.log("no");

// complex
let bill = 500;
const isLeader = true;

((bill > 100) && (isLeader == true)) ? console.log("will pay") : console.log("Will not pay");

















