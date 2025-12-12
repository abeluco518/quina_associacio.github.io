import './sass/main.scss'

let numbers = document.querySelectorAll('.number-container')

for (let number of numbers) {
    number.addEventListener('click', (e) => {
        e.preventDefault()
        const circle = e.currentTarget.querySelector(".bingo__circle");
        circle.classList.toggle('bingo__circle-on');
        document.getElementById('number-show__number').textContent=number.querySelector('.number').textContent
    })
}

