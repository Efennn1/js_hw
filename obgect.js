// //n1
// let user = {}

// user.name = "John"
// user.surname = "Smith"
// user.name = "Pete"
// delete user.name
// console.log(user);

// //n2
// let obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' };

// console.log(obj.Коля);

// //n2.1

// let sortM = [{name : "ivan", age : 23},{name : "Alex", age : 24},{name : "Nik", age : 22}]

//     function getSotr(sotr) {
//         for (let i = 0; i < sortM.length; i++) {
//             console.log(sotr[i].name, sotr[i].age, "года");
//         }   
//     }
//getSotr(sortM)

// n3

// let user1 = [{
//                 name: "John",
//                 age: 30
//             },
//             {
//                 name: "Bob",
//                 age: 21
//             },
//             {
//                 name: "Anna",
//                 age: 19
//             }]
//     let bobik
// let filter = function () {
//         for (let i = 0; i < user1.length; i++) {
//             if (user1[i].name == "Bob")
//             {
//                  bobik = user1[i] 
//                 break
//             }
//             else{}
//         }

//         console.log(bobik);
//     }
//     filter();

//     let delite = function (){
//         for (let i = 0; i < user1.length; i++) {
//             if (user1[i].name == "Anna")
//             {
//                 //user1.slice(i, 1)
//                 delete user1[i]
//                 console.log(user1); 
//                 break
//             }
//             else{}
//         }
//     } 
//     delite()   
    

 /// n4 
// let a = "Бабыйка"
// let b = "Гы"

// let obj = {
//    name: a,
//    surname: b,
//    hi(){
//     console.log(this.name, this.surname)
//    }
// }
// let abc = function() {
//     console.log("My name ... ")
// }
// abc()
// obj.abc
// console.log(obj)

// /// n5



let calculete = function(num1, num2){
 let calculator = {
    num1: 1,
    num2: 3,
    sum : function () {
        console.log("Сумма:", this.num1 + this.num2)

    },
    mul : function () {
        console.log("Произведение:", this.num1 * this.num2)
    },

 }
 calculator.sum()
 calculator.mul()
}
calculete()