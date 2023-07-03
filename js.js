var box = document.getElementById('box');
var cx,cy;

function setPosition(x, y) {
    box.style.left = x + 'px';
    box.style.top = y + 'px';
}

box.addEventListener('mousedown', initDrag);
document.addEventListener('mouseup', endDrag);

function initDrag(evt) {
    cx = evt.clientX - pxToNum(box.style.left);
    cy = evt.clientY - pxToNum(box.style.top);
    box.classList.add("dragging");
    document.addEventListener('mousemove', drag)
}

function endDrag(evt) {
    box.classList.remove("dragging");
    document.removeEventListener('mousemove', drag)
}

function drag(evt) {
    var x = evt.clientX;
    var y = evt.clientY;  
    setPosition(x - cx, y - cy);
}
function pxToNum(s) {
    return +(s.replace('px', ''));
}
