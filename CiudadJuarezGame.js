var user = prompt("You're in the middle of Ciudad Juarez, Mexico. You spot a thug peeping at you. He has a machete and his friend has a gun. What do you?", "PAY, FIGHT, or RUN").toUpperCase();

switch (user) {
    case 'PAY':
        var money = confirm("Do you have money?");
        var passport = confirm("Do you have a passport?");
        if (passport === true && money === true) {
            var howMuch = prompt("How much money do you have?", "Enter an amount.");
            var handItOver = confirm("Thug says: 'Hand over the passport!' Do you hand it over?");
            if (howMuch >= 100 || handItOver === true) {
                alert("They take what they can get but leave you unharmed.");
            }
            else if (howMuch < 100 || handItOver === false) {
                alert("The thugs kill you for the passport and take the money.");
            }
        }
        else {
            alert("The thugs kill you anyway.");
        }
        break;
    case 'FIGHT':
        var weapon = confirm("Do you have a weapon?");
        if (weapon === true) {
        	var weaponType = prompt("What kind of weapon?", "Gun, knife, FISTS OF STEEL!").toUpperCase();
        	switch (weaponType) {
        		case 'GUN':
        			alert("The thugs don't risk it. You walk away unscathed.");
        			break;
        		case 'KNIFE':
        			alert("They rob you and kill you for trying to fight back.");
        			break;
        		case 'FISTS OF STEEL':
        			alert("As you charge toward them you're shot and then decapitated. You're also robbed. Good luck having your body identified without a head or an ID.");
        			break;
        		default:
        			alert("Since you're a smart ass (or even a dumbass) you die either way.");
        	}
        }
        else if (weapon === false) {
        	alert("You better run or pay.");
        }
        break;
    case 'RUN':
        var fast = prompt("How fast are you","Enter a number between 0 and 1");
        var luggage = prompt("How much luggage are you carrying?", "Enter a number");
        var speed = fast * luggage;
        if (fast > 1 || fast < 0) {
        	alert("You want to be a funny guy? You die.");
        }
        else if (speed >= 10) {
        	alert("Too slow, you die.")
        }
        else if (speed < 10) {
        	alert("You got away!")
        }
        break;
    default:
        alert("Run the game again, This time pick between PAY, FIGHT, and RUN.");
}
