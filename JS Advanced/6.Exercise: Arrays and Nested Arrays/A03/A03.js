function arraysDemo(commands) {

    let output = [];

    for (let i = 0; i < commands.length; i++) {
        let currendCommand = commands[i];

        if (currendCommand === 'add') {

            output.push(i + 1);
        } else if (currendCommand === 'remove') {

            output.pop();
        }

    }

    if (output.length === 0) {
        console.log('Empty');
    } else {
        console.log(output.join('\n'));
    }
}