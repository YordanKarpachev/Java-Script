function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', coder);
    buttons[1].addEventListener('click', decoder);

    function coder() {
        let result = "";
        let textArea = document.querySelectorAll('textarea');
        let currentText = textArea[0].value;

        for (let i = 0; i < currentText.length; i++) {
            let currentChar = currentText[i].charCodeAt();
            result += String.fromCharCode(currentChar + 1);

        }
        let currentTextArea = textArea[0];
        currentTextArea.value = "";
        let resultTextArea = textArea[1];
        resultTextArea.value = result;
    }



    function decoder(e) {
        let currentArea = e.target.parentElement.children[1];
        let currentText = currentArea.value;
        let result = "";
        for (let i = 0; i < currentText.length; i++) {
            let ch = textInput[i].charCodeAt();
            result += String.fromCharCode(ch - 1);

        }

        currentArea.value = result;
    }
}