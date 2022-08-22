// Getting value from a Field

function getValueById(elementId) {
    const fieldValue = document.getElementById(elementId);
    const stringValue = fieldValue.value;
    const value = parseFloat(stringValue);
    return value;
}

// Set the value of the element

function setValueById(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}

// Disable Button
function disableBtn(btn) {
    btn.disabled = true;
}
