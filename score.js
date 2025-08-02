let myscore=78;
let friendscore=65;
if (myscore>=80){
    console.log("Checking friends score");
if (friendscore>=80){
    console.log("Go for lunch");
}else if (friendscore>=60 && friendscore<=80){
    console.log("better luck next time");
}else if (friendscore>=40 && friendscore<=60){
    console.log("message unseen");
}else {
    console.log("block");
}

}else{
    console.log("Go to home and sleep early");
}