function solve(data) {
    let res = [];

    for (let e of data) {
        let [command, element] = e.split(' ');
        mutator(command, element)

    }

    function mutator(command, element) {
        switch (command) {
            case "add":
                res.push(element);
                break;
            case "remove":
                res = res.filter(a => !a.includes(element));
                break;
            case "print":
                console.log(res.join(','));
                break
        }
        return res;
    }


}


solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']
);