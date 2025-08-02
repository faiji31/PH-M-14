let age=35;
let isstudent=false;
let regularfare=800;
let Finalfare;
if (age<10){
    Finalfare=0;
    console.log("You are travel free");
}else if(isstudent){
    Finalfare= regularfare *0.5;
    console.log("Student Fare get 50% off");

}else if (age>=65){
    Finalfare=regularfare *0.85;
    console.log("Senoir citizen get 15% off");
}else{
    Finalfare=regularfare;
    console.log("you will get regulafare paid")
}
console.log("Final Ticket Fare: " + FinalFare + " tk");
