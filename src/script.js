const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const downarrow = document.getElementById('downarrowimg');
function buttonClicked(){
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
    downarrow.classList.toggle('hidden');
}