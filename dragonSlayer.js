var youHit = Math.floor(Math.random() * 2);
var slaying = true;
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;
var roundNumber = 1;

while(slaying) {

    console.log("*********** Round " + roundNumber + "***********");
    if (youHit) {
        console.log("Good!! You hit the dragon for " + damageThisRound + " damage!");
        totalDamage += damageThisRound;
        console.log("The total damage to the dragon so far is " + totalDamage);

        if (totaleDamage >= 4) {
            slaying = false;
            console.log("C-C-C-C-CRITCAL")
        }
        else {
            console.log("The Dragon is still alive! New round beings")
            youHit = Math.floor(Math.random() * 2);
            damageThisRound = Math.floor(Math.random()*5 + 1);
            roundNumber++;
        }
    }
    else {
        console.log("Dragon Killed You!")
        slaying = false;
    }
}