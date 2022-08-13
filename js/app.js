/**
 * When the user clicks on an image, the imageUpdate function is called and the image is changed to the
 * image that was clicked on.
 * @param image - The image to be displayed.
 */
function imageUpdate(image) {
    document.getElementById('image').src = image;
}

const menu = document.querySelector('.menu');
const toogleBtnMenu = document.querySelector('.menu-toggle');

/**
 * When the user clicks on the menu button, toggle the class 'menu-opened' on the menu element.
 */
function toggleMenu(){
    menu.classList.toggle('menu-opened');
    const icon = document.getElementById('menu-icon');

    if(menu.classList.contains('menu-opened')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-close');
    }else {
        icon.classList.remove('fa-close');
        icon.classList.add('fa-bars');
    }
}

toogleBtnMenu.addEventListener('click',toggleMenu);

