const calender = document.querySelector('.calender');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    calender.classList.toggle('active');
})

calender.addEventListener('click', event => {
    event.target.classList.toggle('active');
})
