/*const painter = function (item){
    console.log ("The wall has been painted " + item);
};



painter ("green");
painter ("yellow");
painter (); //nu staat er ipv een kleur undefined
*/

const painter = function (wall, item){
    console.log ("The " + wall + " has been painted " + item);
};

const wall = "south-east"; 
collor = "grey";

painter (wall, collor); //ja maakt uit welke volgorde