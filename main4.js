// n1
let m = 0
let n = 100 
let n1 = n - m
let count = 4 
let mass = []
 for (let i = 0; i < count; i++){
    mass.push(random = Math.round(Math.random() * n1) + m)
 } 
 console.log(mass)

 //n2

 let string ="Привет, мир!"
 let reverse = ""
 

 for(let i = string.length - 1; i >= 0; i--){
    reverse += string[i]
 }
 console.log(reverse)

 //n3
// let roadMines = [false, false, true, false, false, false, true, false, false, true];
// let hp = 2;
// for (let i = 0; i < roadMines.length; i++) {
//     if (roadMines[i]== true) {
//         hp -= 1;
//     }
//     if (hp == 0) {
//         console.log("Танк уничтожен на", i+1);
//         break
//     }
//     if (roadMines[i] == true) {
//         console.log("Танк повреждён на", i+1);
//     } else if (roadMines[i] == false) {
//         console.log("Танк доехал до ", i+1);
//     }
// }
let weekday = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
let days = []
let dayWeek = 1
for (let i = 1; i <= 31; i++) {
   days.push(i);
}
console.log(weekday[(7) % 7])
for (let i = 0; i < days.length; i++){
console.log(days[i] + " " + weekday[(i + dayWeek -1) % 7]) 
}

 