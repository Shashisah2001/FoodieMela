let menu = document.querryselector("#Menu-icon");
let navbar = document.querryselector(".navbar");

menu.addEventlistener("click",function(){
    navbar.classList.toggle("active")
});

window.onscroll = () => {
    navbar.classlist.remove("active");
};