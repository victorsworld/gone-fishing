function randomFish(){
    let r1 = ["Slimy", "Deepsea", "Red", "Purple", "Green", "Adult"];
    let r1M = r1[Math.floor(Math.random() * r1.length)];
    let r2 = ["Vibrant", "Scaly", "Finned", "Luminescent", "Great", "Bigmouthed"];
    let r2M = r2[Math.floor(Math.random() * r2.length)];
    let fish = ["Salmon", "Trout"];
    let fishM = fish[Math.floor(Math.random() * fish.length)];
    return `You caught a ${r1M} ${r2M} ${fishM} weighing ${generateRWeight()} lbs`
}
function generateRWeight(){
    return Number((Math.random()*5).toFixed(2));
}
console.log(randomFish())