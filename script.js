
// //// Toggle icon navbar ///
let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');
menuIcon.onclick=()=>
{
    menuIcon.classList.toggle('fx-x');
    navbar.classList.toggle('active');
}





let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
 windows.onscrol=()=>{
    sections.forEach(sec=>{
        let top= window.scrollY;
        let offset= sec.offsetTop -150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');
        if(top>= offset && top< offset+height)
        {
            navlinks.forEach(links =>
            {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add(active);
                
            });
        };
    });
    // Sticky navbar/////////////////////////////////
    let header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY> 100);
 };
// scroll reveal 
ScrollReveal({
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay:200
 });
 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.services-container, .project-box, .contact form',{origin: 'bottom'});
 ScrollReveal().reveal('.home-content, .h1', { origin: 'left' });





