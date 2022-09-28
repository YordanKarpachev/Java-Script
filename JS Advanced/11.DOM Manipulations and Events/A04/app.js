function attachGradientEvents() {
    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', function (event) {
        let pos = event.offsetX;
        let gradientWidth = event.target.offsetWidth;
        let res = Math.trunc(pos / gradientWidth * 100);

        
            document.getElementById('result').textContent = res + '%';
 


    })

    gradient.addEventListener('mouseout', function(event) {
        document.getElementById('result').textContent = "NaN%";
    })
}