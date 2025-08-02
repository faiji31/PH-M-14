let weight = 64;
let height = 1.67;
let bmi = weight/ (height * height);
console.log("your BMI is:"+ bmi.toFixed(2));
if (bmi>=25.5 && bmi<=29.8){
    console.log("You are Overweight");
}else if (bmi>=18.5 && bmi<=24.9){
    console.log("you are normal");

}else{
    console.log("You are underwght");
}