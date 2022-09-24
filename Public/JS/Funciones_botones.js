const menuham = document.querySelector('#menu-ham')
const link = document.querySelector('#link-menu')
const ul = document.querySelector('#ul-menu')

menu_mobile.addEventListener('click', (e)=>{
    menuham.classList.remove('remove')
    menuham.classList.add('menu')
    console.log('click')
})

link.addEventListener('click',()=>{
    menuham.classList.add('remove')
    ul.classList.add('remove')
})
