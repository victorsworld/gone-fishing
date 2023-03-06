const prompt = require ("prompt-sync")({sigint: true})

let userChoice = ""

let fishNameTracker = []

let fishTracker = []
    let totalFtReduce = fishTracker.reduce(function(total , num){return total + num ;},0)

let fishLbs = []
    let totalFlbstReduce = fishLbs.reduce(function(total, num){return total + num;}, 0 )

let fishPrice = []
    let totalFpricetReduce = fishPrice.reduce(function(total, num){return total + num;}, 0 )

let time =["6:00AM", "7:00AM", "8:00AM", "9:00AM", "10:00AM", "11:00AM", "12:00PM"];
    let tI = 1;

///////////////////////////////////       BEGINNING OF PROGRAM        //////////////////////////////////


console.log("\nYou've gone fishing! Try to maximize the value of your caught fish.\nYou can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish. \n")
console.log("==============================================\n");
console.log(`The time is 6:00AM. So far you've caught:`)
interface();

//MAIN WHILE LOOP
while (time[tI] !== "12:00PM"){
    console.log("==============================================\n");
    console.log(`The time is ${time[tI]} So far you've caught:`)
    interface();
    if
    (userChoice === "c" || userChoice === "r" || userChoice === ""){
        tI++
    }else
    (console.log("INVALID OPTION PLEASE ENTER [c] or [r]\n"))  
}
ending()


///////////////////////////////////             FUNCTIONS            ////////////////////////////////////

function interface(){

    console.log(`${totalFtReduce} fish, ${totalFlbstReduce} lbs, $${totalFpricetReduce} \n`)

    let a = generateRWeight();
    let b = generateRPrice();
    let r1 = ["Slimy", "Deepsea", "Red", "Purple", "Green", "Adult"];
    let r1M = r1[Math.floor(Math.random() * r1.length)];
    let r2 = ["Vibrant", "Scaly", "Finned", "Luminescent", "Great", "Bigmouthed"];
    let r2M = r2[Math.floor(Math.random() * r2.length)];
    let fish = ["Salmon", "Trout"];
    let fishM = fish[Math.floor(Math.random() * fish.length)];
    let c = `* ${r1M} ${r2M} ${fishM}, ${a} lbs, $${b}`
    let overWeight = totalFlbstReduce + a 
    console.log(`You caught a ${r1M} ${r2M} ${fishM} weighing ${a} lbs \nand valued at $${b}\n`)
    
    if( overWeight > 10 ){
        console.log("This fish would put you over 10 lbs, so you release it.\n")
        console.log("Press [enter] to continue.")
    }else{
        console.log("Your action: [c]atch or [r]elease?")
    }
    userChoice = String(prompt("> "))
    if(userChoice === "c" && overWeight < 10){
        fishLbs.push(a)
        fishPrice.push(b)
        fishNameTracker.push(c)
        fishTracker.push(1)
    } else if(userChoice === "r" && overWeight < 10){
        console.log("You chose to release the fish.")
    } 
    totalFpricetReduce = fishPrice.reduce(function(total, num){return total + num;}, 0 )
    totalFlbstReduce = fishLbs.reduce(function(total, num){return total + num;}, 0 )
    totalFtReduce = fishTracker.reduce(function(total, num){return total + num;},0)
}
function ending(){
    console.log("\nThe time is 12:00pm. Times up!\n")
    console.log (`You caught ${totalFtReduce} fish:`)
    console.log(fishNameTracker)
    console.log(`\nTotal weight; ${totalFlbstReduce} lbs \nTotal value $${totalFpricetReduce}`)
}
function generateRWeight(){
    return Number((Math.random()*5).toFixed(2));
}
function generateRPrice(){
    return (Number((Math.random()*100).toFixed(0)));
}


