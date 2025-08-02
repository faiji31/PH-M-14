let weight = 70;
let height = 1.55;
bmi = weight/(height*height);
console.log("Your bmi is:" +bmi.toFixed(2));
if (bmi<=18.5){
    console.log("you are underwight");
}else{
    if(bmi<=24.5){
        console.log("You are normal");
    }else{
        if(bmi<=29.9){
            console.log("you are overweight");
        }else{
            console.log("you are obse")
        }
    }
}