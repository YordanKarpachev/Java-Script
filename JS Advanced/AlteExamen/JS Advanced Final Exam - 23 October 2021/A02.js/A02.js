class SummerCamp {

    priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
    listOfParticipants = [];

    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
    }



    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.")
        }
        if (this.listOfParticipants.find(x => x.name == name)) {
            return `The ${name} is already registered at the camp.`
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });

        return `The ${name} was successfully registered.`
    }


    unregisterParticipant(name) {
        if (!this.listOfParticipants.find(x => x.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        } else {
            this.listOfParticipants = this.listOfParticipants.filter(x => x.name != name);
            return `The ${name} removed successfully.`
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(x => x.name == participant1);

        if (!player1) {
            throw new Error(`Invalid entered name/s.`);
        }

        if (typeOfGame == "WaterBalloonFights") {
            let player2 = this.listOfParticipants.find(x => x.name == participant2);
            if (!player2) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (player1.condition != player2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if(player1.power > player2.power){
                player1.wins ++;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`
            } else if(player2.power > player1.power){
                player2.wins++;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`
            } else{
                return `There is no winner.`;
            }

        } else if (typeOfGame == "Battleship") {
            player1.power += 20;
            return `The ${player1.name} successfully completed the game ${typeOfGame}.`
        }
    }


    toString(){
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length } participants on camping to ${this.location}`)
        this.listOfParticipants.sort((a,b) => b.wins - a.wins)
        .forEach(a => result.push(`${a.name} - ${a.condition} - ${a.power} - ${a.wins}`));

        return result.join('\n');
   
    }

}