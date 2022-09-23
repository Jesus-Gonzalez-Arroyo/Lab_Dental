const menu_mobile = document.querySelector('#menu_mobile')
const menuham = document.querySelector('#menu-ham')
const link = document.querySelector('#link-menu')
const ul = document.querySelector('#ul-menu')

menu_mobile.addEventListener('click', (e)=>{
    menuham.classList.add('menu')
})

link.addEventListener('click', ()=>{
    menuham.classList.remove('menu')
    ul.classList.add('remove')
})

