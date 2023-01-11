const menuContainer=document.querySelector('.menu-container')
const listContainer=document.querySelector('.list-container')

const darkModeBtn = document.getElementById('darkModeBtn');
const darkModeIcon = darkModeBtn.children[0];
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');
    darkModeIcon.classList.toggle('fa-moon');
    darkModeBtn.classList.toggle('background');
});


menuContainer.addEventListener('click',()=>{
    listContainer.classList.toggle('blockAndNone')
})