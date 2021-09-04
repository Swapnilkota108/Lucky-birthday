const button = document.querySelector('.btn');

const dateInput = document.querySelector('.date');
const luckyNumberInput = document.querySelector('.luckyNum');
const output = document.querySelector('.output');
const cake = document.querySelector('.cakeImg');
 
cake.style.display = 'none'; 
function calculateSum(dob){
   dob = dob.replaceAll('-','');
  let sum=0;
  for(let i=0;i<dob.length;i++){
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

function compareValues(sum,value){
    
  if(sum%value===0){
     output.innerText='Congrats,your birth date is a lucky number 🥳 🤩';
    cake.style.display = 'block';
  }
  else{
    output.innerText= 'You create your own luck 🤗 😉';
    cake.style.display = 'none';
  }
}










button.addEventListener('click',function clickhandler(){
  const dob = dateInput.value;
  const sum = calculateSum(dob);
  const value=luckyNumberInput.value;
  
  compareValues(sum,value);
}
)
