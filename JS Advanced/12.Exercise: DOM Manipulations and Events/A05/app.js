function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', coder);
    buttons[1].addEventListener('click', decoder);

    function coder() {
        let result = "";
        let textAreas = document.querySelectorAll('textarea');
        let currentText = textAreas[0].value;

        for (let i = 0; i < currentText.length; i++) {
            let currentCh = currentText[i].charCodeAt();
            result += String.fromCharCode(currentCh + 1);

        }
        let resultTextArea = textAreas[1];
        resultTextArea.value = result;
        let currentTextArea = textAreas[0]
        currentTextArea.value = "";
    }



    function decoder(e) {
        let currentArea = e.target.parentElement.children[1];
        let currentText = currentArea.value;
        let resultMsg = "";
        for (let i = 0; i < currentText.length; i++) {
            let ch = currentText[i].charCodeAt();
            resultMsg += String.fromCharCode(ch - 1);

        }

        currentArea.value = resultMsg;
    }
}