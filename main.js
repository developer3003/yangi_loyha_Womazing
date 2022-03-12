let elList = document.querySelector('#element');
let elBigImg = document.querySelector('#elImg');
let childImg = document.querySelector('#child');
let childImg2 = document.querySelector('#child-2');

function handleClick(evt) {
    evt.preventDefault();
    elBigImg.src = evt.target.src
}

elList.addEventListener('click', handleClick)
