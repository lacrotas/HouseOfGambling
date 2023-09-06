const closeButton = document.querySelector('.small_image-close');
const openButton = document.querySelector('.small_image-burger');
const modal = document.querySelector('.modal');

function OpenModal(){
    openButton.style.display = 'none';
    closeButton.style.display = 'block';
    modal.style.left = 0;
}
function CloseModal(){
    openButton.style.display = 'block';
    closeButton.style.display = 'none';
    modal.style.left = -1000 + 'px';
}