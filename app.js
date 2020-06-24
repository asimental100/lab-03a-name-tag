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

const changeNameButton = document.getElementById("nameInput");

changeNameButton.addEventListener('click' () => {
    const newName = changeNameButton.value,
    console.log('newName'),
})