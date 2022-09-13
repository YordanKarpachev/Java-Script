function solve(day) {
    let week = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        if(week.includes(day)){
            console.log(week.indexOf(day));
        } else{
            console.log('error');
        }
}

solve('Friday');