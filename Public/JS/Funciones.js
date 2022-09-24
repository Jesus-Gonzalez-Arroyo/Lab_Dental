const menu_mobile = document.querySelector('#menu_mobile')
const menuham = document.querySelector('#menu-ham')
const link = document.querySelector('#link-menu')
const ul = document.querySelector('#ul-menu')
const cancel = document.querySelector('#icon-cancel')
const main = document.querySelector('#main')

menu_mobile.addEventListener('click', ()=>{
    menuham.classList.remove('remove')
    menuham.classList.add('menu')
    ul.classList.remove('remove')
    ul.classList.add('lista-menu')
    main.classList.add('desenfoque')
})

link.addEventListener('click',()=>{
    menuham.classList.add('remove')
    ul.classList.add('remove')
    main.classList.remove('desenfoque')
})

cancel.addEventListener('click', ()=>{
    menuham.classList.add('remove')
    ul.classList.add('remove')
    main.classList.remove('desenfoque')
})
