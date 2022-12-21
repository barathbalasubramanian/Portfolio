
const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove' , e => {
    cursor.setAttribute('style' , 'top:' + (e.pageY - 10 )+ 'px; left:' + (e.pageX -10 )+ 'px')
})

document.addEventListener('click' , () => {
    cursor.classList.add('extend')
    setTimeout(() => { cursor.classList.remove('extend')} , 500)
})

