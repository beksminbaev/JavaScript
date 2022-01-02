const input = document.querySelector('input');
const result = document.querySelector('.result');


input.addEventListener('input', function(){
    const str = input.value;
    const srtWoSpace = str.replace(/ /g, "") // replace (/ (things we want to change) /g, (place for what we want to change things))
    const countOfStr=srtWoSpace.length;
    result.innerHTML= countOfStr;
})
input.addEventListener('click', function(){
    input.value=""
    result.innerHTML=""
})
// const input =document.querySelector('input');
// const toggleBtn =document.querySelector('button');



// toggleBtn.addEventListener('click', function(){
   
//     if(input.type==="text"){
//         input.type='password'
//     }else {
//         input.type='text'
//     }
// })