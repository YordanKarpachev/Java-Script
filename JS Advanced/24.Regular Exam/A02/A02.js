class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName,
            this.country = country,
            this.invitedPlayers = [];

    }



    newAdditions(footballPlayers) {

        let res = [];
        let currentRes = "You successfully invite ";

        for (let player of footballPlayers) {


            let [name, age, value] = player.split("/");
            let currentPlayer = this.invitedPlayers.find(a => a.nae == name);

            if (!currentPlayer) {
                this.invitedPlayers.push({
                    name: name,
                    age: age,
                    value: value
                });
            } else
                if (value > currentPlayer.value) {
                    currentPlayer.value = value;
                };
            res.push(name)

        }

        currentRes += res.join(", ")
        currentRes += ".";
        return currentRes;
    }

    signContract(selectedPlayer) {
        let [name, offer] = selectedPlayer.split("/");
        let currentPlayer = this.invitedPlayers.find(a => a.name == name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (offer < currentPlayer.value) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${currentPlayer.value - offer} million more are needed to sign the contract!"`)
        }
        currentPlayer.value = "Bought";

        return `Congratulations! You sign a contract with ${currentPlayer.name} for ${offer} million dollars.`
    }

    ageLimit(name, age) {
        let currentPlayer = this.invitedPlayers.find(a => a.name == name);
        if (!currentPlayer) {
            throw Error(`${name} is not invited to the selection list!`)
        }

        if (Number(currentPlayer.age)  >= age) {
            return `${name} is above age limit!`
        } else if (Number(currentPlayer.age) + 5 <= age) {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        } else  {
            return `${name} will sign a contract for ${Number(age - currentPlayer.age) } years with ${this.clubName} in ${this.country}!`
        }
    }


    transferWindowResult(){
        let res = [];
        res.push("Players list:");
        this.invitedPlayers.forEach(a => res.push(`Player ${a.name}-${a.value}`));
        return res.join("\n")
    }

}


let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Lionel Messi", 33));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.signContract("Kylian Mbappé/240"));
