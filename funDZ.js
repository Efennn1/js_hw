// n1
let mas = [10, 1, 100, -13, 26, -3, 5]
let cleanMass = []
    function isNumberRange(){
        for (let i = 0; i < mas.length; i++) {
            if (mas[i] > 0 && mas[i] < 10) {
                cleanMass.push(mas[i])
                console.log("true")
            }
            else {console.log('false');}
        }
    console.log('Очищеный массив', cleanMass)
}    
isNumberRange()
console.log('                                                                                     ');
// n2

let age = ['Ребёнок', 'Молодой',' Зрелый', 'Старый']
function check(){
    for (let i = 1; i < 101; i++) {
        if (i <= 17){
            console.log(i, age[0]);
        }
        if (i >= 18 && i <= 30) {
            console.log(i, age[1])
        }
        if (i > 30 && i <= 55) {
            console.log(i, age[2]);
        }
        if (i > 55) {
            console.log(i, age[3])
        }

    }
}
//check()

//n 3
console.log(typeof Undefined);
let arry = [-1, 2, "", false, true, undefined, "LoL", 0, null, [1, 2], {}]
let clearArry = []

function filter () {
    for (let i = 0; i < arry.length; i++){
        if (arry[i] != false) {
           
            if (arry[i] != null) 
            {   
                clearArry.push(arry[i])
            }
        }
    }   
    console.log(clearArry)
}
filter()
console.log('                                                                                     ');

// n4

let allFigny = [1, 1, 1, "lol", "lol", "pop", 1, null, null,]
let clearFigny = []

function x () {
    for (let i = 0; i < allFigny.length; i++) {
        if (clearFigny.includes(allFigny[i]) != true) {
            clearFigny.push(allFigny[i])
        }
    }
    console.log(clearFigny);
}
x()