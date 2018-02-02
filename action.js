/* ====== DOM Grab ====== */
const highlighter = document.querySelector('span#highlighter');
const hl_items = Array.from( document.querySelectorAll('a') );



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

function back_to_station(e) {
    position = e.target.getClientRects()[0];

    let top = position.y > (window.innerHeight / 2) ? window.innerHeight - 30 :  0;
    let left = position.x > (window.innerWidth / 2) ?  window.innerWidth - 36 :  0;

    let b1 = top <= 0 && left <= 0 ?  "0" :  "1em";
    let b2 = top <= 0 && left > 0 ?  "0" :  "1em"; 
    let b3 = top > 0 && left > 0 ?  "0":  "1em";
    let b4 = top > 0 && left <= 0 ?  "0" :  "1em";

    highlighter.style.cssText = `top: ${top}px;
                                 left: ${left}px;
                                 border-radius: ${b1} ${b2} ${b3} ${b4}; 

                                 width: 30px;
                                 height: 30px;`
}



/* ====== Events ====== */
hl_items.forEach( (item) => item.addEventListener('mouseenter', highlight_me))
hl_items.forEach( (item) => item.addEventListener('mouseleave', back_to_station))

// hl_items.forEach( (item) => item.style.)
