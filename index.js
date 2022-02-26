// Variable declarations
const toggleBtn = document.querySelector('.toggle-btn');





toggleBtn.addEventListener('click', showNav);


function showNav(e) {
    
    if(toggleBtn.firstElementChild.classList.contains('fa-bars')) {
        toggleBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else if (toggleBtn.firstElementChild.classList.contains('fa-xmark')) {
        toggleBtn.innerHTML =`<i class="fa-solid fa-bars"></i>`;
    }


    e.prventDefault();
}