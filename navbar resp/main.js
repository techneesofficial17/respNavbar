document.querySelector('.crossbar').addEventListener('click' , () => {
    document.querySelector('nav').style.opacity = "100%";
    document.querySelector('.cross').style.display = "block";    
    document.querySelector('.crossbar').style.display = "none";    
})
document.querySelector('.cross').addEventListener('click' , () => {
    document.querySelector('nav').style.opacity = "0%";
    document.querySelector('.cross').style.display = "none";    
    document.querySelector('.crossbar').style.display = "block";    
})