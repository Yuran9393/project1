window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.subheader_list'),
    menuItem = document.querySelectorAll('.subheader_list'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('subheader_list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('subheader_list_active');
        })
    })
})