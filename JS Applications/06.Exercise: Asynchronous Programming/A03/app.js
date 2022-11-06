function attachEvents() {
    const button = document.getElementById("submit");




    button.addEventListener("click", async () => {
        const forecast = document.getElementById("forecast");
        const input = document.getElementById("location");
        const inputValue = input.value;
        const location = await fetch("http://localhost:3030/jsonstore/forecaster/locations");
        const data = await location.json();
        const info = data.find(a => a.name == inputValue);



        const currentTime = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${info.code}`);
        const threeDays = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${info.code}`);

        const currentTimeData = await currentTime.json();
        const threeDaysData = await threeDays.json();


        forecast.style.display = "block";


        let current = document.getElementById("current");

        let div = createDivCurrentTime(currentTimeData)
        current.appendChild(div);

        function createSymbol(str) {
            let currentSymbol = ""
            switch (str) {
                case "Sunny":
                    currentSymbol = "&#x2600";
                    break;
                case "Partly sunny":
                    currentSymbol = "&#x26C5";
                    break;
                case "Overcast":
                    currentSymbol = "&#x2601";
                    break;
                case "Rain":
                    currentSymbol = "&#x2614";
                    break;

            }
            return currentSymbol;
        }

   
        function createDivCurrentTime(currentTimeData) {
            let currentSymbol = createSymbol(currentTimeData.forecast.condition);



            let currentDiv = document.createElement("div");
            currentDiv.classList.add("forecast")

            const span = document.createElement("span");
            span.classList.add("condition");
            span.classList.add("symbol")
            span.innerHTML = currentSymbol;
            currentDiv.appendChild(span);

            const spanCondition = document.createElement("span");
            spanCondition.classList.add("condition");

            const foreCastData = document.createElement("span");
            foreCastData.classList.add("forecast-data");
            foreCastData.textContent = `${currentTimeData.name}`;
            spanCondition.appendChild(foreCastData);


            const foreCastData2 = document.createElement("span");
            foreCastData2.classList.add("forecast-data");
            foreCastData2.innerHTML = `${currentTimeData.forecast.low}&#176/${currentTimeData.forecast.high}&#176`;
            spanCondition.appendChild(foreCastData2);

            const foreCastData3 = document.createElement("span");
            foreCastData3.classList.add("forecast-data");
            foreCastData3.textContent = currentTimeData.forecast.condition;
            spanCondition.appendChild(foreCastData3);
            currentDiv.appendChild(spanCondition)
            return currentDiv;


        }

        const upComing = document.getElementById("upcoming");

        const upComingDiv = createUpComingDiv(threeDaysData);
        upComing.appendChild(upComingDiv);

       
        function createUpComingDiv(threeDaysData) {

            const currentDiv = document.createElement("div");
            currentDiv.classList.add("forecast");
            currentDiv.classList.add("info");

            const span = createSpan(threeDaysData.forecast[0]);
            const span2 = createSpan(threeDaysData.forecast[1]);
            const span3 = createSpan(threeDaysData.forecast[2]);
            currentDiv.appendChild(span);
            currentDiv.appendChild(span2);
            currentDiv.appendChild(span3);
            return currentDiv;
            


            function createSpan(obj) {

                const span = document.createElement("span");
                span.classList.add("upcoming");

                const foreCastSpan = document.createElement("span");
                foreCastSpan.classList.add("symbol");
                const currentSymbol = createSymbol(obj.condition)
                foreCastSpan.innerHTML = currentSymbol;
                span.appendChild(foreCastSpan)

                const span2 = document.createElement("span");
                span2.classList.add("forecast-data");
                span2.innerHTML = `${obj.low}&#176/${obj.high}&#176`
                span.appendChild(span2)

                const span3 = document.createElement("span");
                span3.classList.add("forecast-data");
                span3.textContent = obj.condition;
                span.appendChild(span3)

                return span;
            }

        }

    })

}

attachEvents();