let burger = document.getElementById('burger')
let navItems = document.getElementsByClassName('nav-items')

burger.addEventListener('onclick',function(){
    navItems.style.display = "block";
})