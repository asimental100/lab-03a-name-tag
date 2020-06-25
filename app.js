const changeToPinkButton = document.getElementById("pink-button");

const changeToLightGreenButton = document.getElementById("light-green-button");

const changeToLightBlueButton = document.getElementById("light-blue-button");

changeToPinkButton.addEventListener('click', () => {
    bigboi.style.backgroundColor = "Pink";
    bigboi.style.border = "solid pink 10px";
})

changeToLightGreenButton.addEventListener('click', () => {
    bigboi.style.backgroundColor = "lightGreen";
    bigboi.style.border = "solid lightGreen 10px";
})

changeToLightBlueButton.addEventListener('click', () => {
    bigboi.style.backgroundColor = "lightBlue";
    bigboi.style.border = "solid lightBlue 10px";
})

document.getElementById("submit-button").addEventListener('click', () => {
    document.getElementById("name").textContent = document.getElementById("nameInput");
})