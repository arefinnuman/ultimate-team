function getValueById(elementId){
    const fieldValue = document.getElementById(elementId);
    const stringValue = fieldValue.value;
    const value = parseFloat(stringValue);
    return value;
}

function setValueById(elementId, value){
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}

function disableBtn(btn) {
    btn.disabled = true;
}

