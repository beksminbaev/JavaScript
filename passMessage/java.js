const input =document.querySelector('#input')
const button=document.querySelector('#btn')
const alert=document.querySelector('#alert')
const message=document.querySelector('#message')

button.addEventListener('click', function(){
    if(input.value === ''){
        alert.style.display='block';
        alert.innerHTML='Please type a message ';
        setTimeout(hideAlert, 2000);
    }else {
        message.innerText=input.value;
        input.value=""
    }
});
function hideAlert(){
    alert.style.display='none'
}

input.addEventListener('change', function(){ // change event shows you result after you DONE TYPING!
    alert.style.display='block'
    alert.innerHTML="Make sure you done "
    setTimeout(hideAlert, 2000);
})
input.addEventListener('input', function(){ //input event shows you result WHILE typing!
    message.innerText=input.value;
})