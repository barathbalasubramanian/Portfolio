
const cursor = document.querySelector('.cursor')
const H = document.querySelector('.Hi')
const dot = document.querySelector('.dot')
const emoji = document.querySelector('.emoji')
const letter = document.querySelectorAll('span');

document.addEventListener('mousemove' , e => {
    cursor.setAttribute('style' , 'top:' + (e.pageY - 10 )+ 'px; left:' + (e.pageX -10 )+ 'px')
})

document.addEventListener('click' , () => {
    cursor.classList.add('extend')
    H.classList.add('hi')
    setTimeout(() => { cursor.classList.remove('extend'); H.classList.remove('hi') ; emoji.classList.remove('emoji-act') } , 500)
})

letter.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.classList.add('letter')
        setTimeout(() => { box.classList.remove('letter');  },500 )
    });
});
