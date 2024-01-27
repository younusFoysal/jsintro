/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let friendscore = 35;

if (friendscore > 30){
    if (friendscore > 80){
        console.log("go for a lunch.");
    }else if ((friendscore < 80) && (friendscore >= 60)){
        console.log(" good luck next time. ");
    }else if ((friendscore < 60) && (friendscore >= 40)){
        console.log("message unseen.")
    }else if (friendscore < 40){
        console.log("block your friend")
    }
}else {
    console.log("go to home and sleep and act sad");
}
