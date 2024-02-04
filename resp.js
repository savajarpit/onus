burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightnav=document.querySelector('.rightnav')
navlistd=document.querySelector('.navlistd')
burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    navlistd.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})