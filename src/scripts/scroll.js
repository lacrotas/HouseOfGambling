let scrollBar = document.querySelector('.scroll_bar');

let scrollConatiner = document.querySelector('.blog_scroll');


function myScroll() {
    let totalHeight = scrollConatiner.scrollHeight - scrollConatiner.clientHeight;

    if (window.screen.width > 1400) {
        scrollBar.style.top = ((scrollConatiner.scrollTop / totalHeight) * 307) + 96 + "px";
    } else {
        scrollBar.style.top = ((scrollConatiner.scrollTop / totalHeight) * 244) + 60 + "px";
    }
}