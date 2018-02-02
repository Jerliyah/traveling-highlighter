/* ====== DOM Grab ====== */
const highlighter = document.querySelector('span#highlighter');
const hl_items = Array.from( document.querySelectorAll('a') );

const test = document.querySelector('#test');





/* ====== Variables ====== */
const padding = 10



/* ====== Functions ====== */
function highlight_me(e) {
    e.preventDefault();

    my = this.getClientRects()[0]

    highlighter.style.cssText = `top: ${my.top - padding}px;
                                 left: ${my.left - padding}px;
                                 width: ${my.width + (padding * 2)}px;
                                 height: ${my.height + (padding * 2)}px;`
}


/* ====== Events ====== */
hl_items.forEach( (item) => item.addEventListener('mouseover', highlight_me))
