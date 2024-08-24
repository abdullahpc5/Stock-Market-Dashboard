document.addEventListener('DOMContentLoaded', function () {

const chart = document.querySelector('#chart').getContext('2d');

// create a new chart instance //
new Chart (chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
            label: 'GOLD',
            data: [1796, 1836, 1734, 1842, 1840, 2032, 2830, 2731, 2024],
            borderColor: 'green',
            borderWidth: 2
        },
        {
            label: 'ETH',
            data: [2688, 2922, 3282, 2728, 1940, 7396, 2842, 7429, 3792],
            borderColor: 'blue',
            borderWidth: 2
        }
        ]
    },
    options: {
        responsive: true
    }
});
});

// show or hide sidebar //
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () =>{
    sidebar.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none'
})

// change theme //
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
   
})