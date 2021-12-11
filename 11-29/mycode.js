const minInput = document.querySelector('#lowLimit');
const maxInput = document.querySelector('#upLimit');
const generateBtn = document.querySelector('#generateBtn');
const clearBtn = document.querySelector('#clearBtn');
const randomNumSpan= document.querySelector('#randomNum');

function generateRandomNum(){
    const minNum = Number(minInput.value);
    const maxNum = Number(maxInput.value);
    if(minNum > maxNum || !maxInput.value || !minInput.value){
        randomNumSpan.innerHTML= 'Invalid Input'
    }else {
    let randomNum = Math.floor((maxNum-minNum +1)*Math.random()) + minNum
    randomNumSpan.innerHTML= randomNum
    }
   
    // console.log(`I am ${randomNum} year old`) // Template literals 
    // let step1 = maxNum - minNum +1
    // let step2 = Math.random() * step1
    // let randomNum = Math.floor(step2)+ minNum 
    
}
function clearResult(){
     randomNumSpan.innerHTML=""
     minInput.value=""
     maxInput.value=""
}