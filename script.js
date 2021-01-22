const toggleText = document.querySelectorAll('.question');
const heading2 = document.querySelectorAll('h2');
const box = document.querySelector('.box');

toggleText.forEach(x =>{
    x.addEventListener('click',toggle);
})

function toggle(){
    const hiddenText = this.nextElementSibling;
    const title = this.firstElementChild;
    const arrow = this.lastElementChild;
    if(hiddenText.classList.contains('hide')){
        hiddenText.classList.remove('hide');
        arrow.classList.add('rotate');
        title.classList.add('active');
    }else{
        hiddenText.classList.add('hide');
        arrow.classList.remove('rotate');
        title.classList.remove('active');
    }
}

heading2.forEach(item  => {
    item.addEventListener('mouseover',(e)=>{
        box.classList.add('box_move');
    })
    item.addEventListener('mouseout',(e)=>{
        box.classList.remove('box_move');
    })
})