let hower = document.querySelectorAll(".nav__hover")
let icon = document.querySelector('.icons')
let dnone = document.querySelector('.none1')
let korzina = document.querySelector('.korzina')
let box = document.querySelector('.box1')
let account = document.querySelector(".account")
let profil = document.querySelector('.profil')
console.log(account);
// console.log(hower);

icon.addEventListener('click', (event) => {
    dnone.classList.toggle('none')
})

korzina.addEventListener('click', (event) => {
    box.classList.toggle('none')
})

profil.addEventListener('click', (event) => {
    account.classList.toggle('none')
})

