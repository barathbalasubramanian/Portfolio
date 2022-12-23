
// page1

const cursor = document.querySelector('.cursor')
const H = document.querySelector('.Hi')
const dot = document.querySelector('.dot')
const emoji = document.querySelector('.emoji')
const letter = document.querySelectorAll('.home span');
const theme = document.querySelector('.theme')
const circle = document.querySelector('.circle')
const root = document.querySelector(':root');

theme.addEventListener('click' , () => {
    circle.classList.toggle('circle-act')
    if (circle.classList.contains('circle-act')) { 
        root.style.setProperty('--white' , '#1d1d1d' ) ; 
        root.style.setProperty('--bg-color' , '#fff' ) ; 
    }
    else {  root.style.setProperty('--white' , '#fff' ); root.style.setProperty('--bg-color' , '#1d1d1d' )  }
})

document.addEventListener('mousemove' , e => {
    cursor.setAttribute('style' , 'top:' + (e.pageY - 10 )+ 'px; left:' + (e.pageX -10 )+ 'px')
})

document.addEventListener('click' , () => {
    cursor.classList.add('extend')
    H.classList.add('hi')
    setTimeout(() => { cursor.classList.remove('extend'); H.classList.remove('hi') } , 500)
})

letter.forEach(box => {
    box.addEventListener('mouseover', () => {
        if (box.classList.contains('B') || (box.classList.contains('o') ) || (box.classList.contains('emoji') )) {
        }
        else {
            box.classList.add('letter')
            setTimeout(() => { box.classList.remove('letter');  },500 )
        }
    });
});

// page3

// water images
const waterProject = document.querySelector('.water-project')

let imageArray = [ 'orders.png' , 'placeorder.png' , 'editOrder.png' ]

let imageIndex = 0;

const startImage = () => {
    waterProject.setAttribute("src", 'project/'+imageArray[imageIndex]) 

    imageIndex++;
    if(imageIndex >= imageArray.length){
        imageIndex = 0;
    }
}

setInterval(startImage,3000);

// chatbox images
const chatBox = document.querySelector('.chat-project')

let chatArray = [ 'chatsignup.png' , 'signin.png' , 'chatbox.png' ]

let chatIndex = 0;

const startchat = () => {
    chatBox.setAttribute("src", 'project/'+chatArray[chatIndex]) 

    chatIndex++;
    if(chatIndex >= chatArray.length){
        chatIndex = 0;
    }
}

setInterval(startchat,3000);

// crud 

const crudBox = document.querySelector('.crud-project')

let crudArray = [ 'newuser.png' , 'edituser.png' ]

let crudIndex = 0;

const startcrud = () => {
    crudBox.setAttribute("src", 'project/'+crudArray[crudIndex]) 

    crudIndex++;
    if(crudIndex >= crudArray.length){
        crudIndex = 0;
    }
}

setInterval(startcrud,3000);

// quiz

const quizBox = document.querySelector('.quiz-project')

let quizArray = [ 'question.png' , 'crt.png' , 'wrong.png' ]

let quizIndex = 0;

const startquiz = () => {
    quizBox.setAttribute("src", 'project/'+quizArray[quizIndex]) 

    quizIndex++;
    if(quizIndex >= quizArray.length){
        quizIndex = 0;
    }
}

setInterval(startquiz,3000);

startImage()
startchat()
startcrud()
startquiz()