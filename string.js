// n1

let email = "robin_singh@example.com"
let leng = email.length 
let podstr = email.indexOf("@")
let polstr = Math.floor(podstr / 2)

let email1 = email.slice(0, polstr) + '...' + email.slice(podstr, leng)
console.log(email1)

// n3

let str1 = "Nm"
let maxlengh = 7
let x =str1.slice(0, maxlengh)
  
if (str1.length > maxlengh){
    console.log(str1.slice(0, maxlengh) + '...')
}
else (console.log(str1.slice(0, maxlengh)) )



