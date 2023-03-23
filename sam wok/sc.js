let number = 2
let inputNumber = parseInt(prompt("Ведите число"))

 function checkNumber() {
  if (typeof inputNumber !== "number") {
    alert("Please enter a number")
  } 
  else { 
    if (inputNumber == number) {
        alert("Вы угадали")    
    }
    else if (inputNumber > number) {
        alert("Меньше")
    }
    else if (inputNumber < number) {
        alert("Больше")
    }
 }    
}
checkNumber()