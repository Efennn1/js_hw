const users = [{name: "Nik", login: "nnnn@.com", password: "12345"}, {name: "John", login: "jjjj@.com", password: "54321"}]

let inputLogin = prompt("Ведите логин")
let inputPassword = prompt("Введите пароль")

let checkLogin = inputLogin
let checkPassword1 = inputPassword

function check (){
    for (let i = 0; i < users.length; i++) {
        if (inputLogin == users[i].login && inputPassword == users[i].password) {
            alert(`Здравствуйте ${users[i].nik}`)
        }
        else {alert("Ошибка авторизации")}
        return
    }
}
check()
