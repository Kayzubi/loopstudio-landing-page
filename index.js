// Variable declarations
const toggleBtn = document.querySelector('.toggle-btn');
const collapseNavBar = document.querySelector('.navbar-collapse');





toggleBtn.addEventListener('click', showNav);


function showNav(e) {
    

    //change toggle button icon
    if(toggleBtn.firstElementChild.classList.contains('fa-bars')) {
        toggleBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        collapseNavBar.classList.replace('m-fadeOut', 'm-fadeIn');
        document.body.classList.add('overflow');
    } else if (toggleBtn.firstElementChild.classList.contains('fa-xmark')) {
        toggleBtn.innerHTML =`<i class="fa-solid fa-bars"></i>`;
        collapseNavBar.classList.replace('m-fadeIn', 'm-fadeOut');
        document.body.classList.remove('overflow');
    }

    e.prventDefault();
}