let scrollBar = document.querySelector('.scroll_bar');

let scrollConatiner = document.querySelector('.blog_scroll');

const desctopScroll = 440;
const mobileScroll = 330;

function myScroll() {
    if (window.screen.width > 768) {
        scrollBar.style.top = 96 + (Math.round(scrollConatiner.scrollTop) / (scrollConatiner.scrollHeight / desctopScroll)) + 'px';
    } else {
        scrollBar.style.top = 60 + (Math.round(scrollConatiner.scrollTop) / (scrollConatiner.scrollHeight / mobileScroll)) + 'px';
    }
}