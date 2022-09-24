const menuham = document.querySelector('#menu-ham')
const link = document.querySelector('#link-menu')
const ul = document.querySelector('#ul-menu')
const cancel = document.querySelector('#icon-cancel')

menu_mobile.addEventListener('click', (e)=>{
    menuham.classList.remove('remove')
    menuham.classList.add('menu')
    ul.classList.remove('remove')
    ul.classList.add('lista-menu')
})

link.addEventListener('click',()=>{
    menuham.classList.add('remove')
    ul.classList.add('remove')
})

cancel.addEventListener('click', ()=>{
    menuham.classList.add('remove')
    ul.classList.add('remove')
})
