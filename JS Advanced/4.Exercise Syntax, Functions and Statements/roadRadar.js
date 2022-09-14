function solve(speed, area) {

    switch (area) {

        case "motorway":
            speedCheck(speed, 130);
            break;

        case "interstate":
            speedCheck(speed, 90);
            break;

        case "city":
            speedCheck(speed, 50);
            break;

        case "residential":
            speedCheck(speed, 20);
            break;
    }

    function speedCheck(currentSpeed, limit) {
        let status = '';
        if (currentSpeed <= limit) {
            console.log(`Driving ${currentSpeed} km/h in a ${limit} zone`);
            return;
        } else if (currentSpeed <= limit + 20) {
            status = 'speeding';
        } else if (currentSpeed <= limit + 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${Math.abs(limit - currentSpeed)} km/h faster than the allowed speed of ${limit} - ${status}`);
    }

}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');