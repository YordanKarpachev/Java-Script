function solution() {
    let res = "";
    return {
        append(string) {
            res += string;
        },
        removeStart(n) {
            res = res.substring(n)
        },
        removeEnd(n) {
            res = res.substring(0, res.length  - n)
        },
        print() {
            console.log(res);
        }
    };

}





console.log('------------');

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();