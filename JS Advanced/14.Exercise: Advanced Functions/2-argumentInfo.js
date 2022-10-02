function solve(...params) {
    let res = {};

    for (let e of params) {
        let type = typeof (e);

        console.log(`${type}: ${e}`);
        if (!res[type]) {
            res[type] = 0;
        }

        res[type]++;
    }
    let buff = "";
    for (let [k, v] of Object.entries(res)) {
        buff += `${k} = ${v}\n`
    }
    console.log(buff);

}


solve('cat', 42, function () { console.log('Hello world!'); }
);