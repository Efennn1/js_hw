let objects = [
{ name: 'Василий', surname: 'Васильев' },
{ name: 'Иван', surname: 'Иванов' },
{ name: 'Пётр', surname: 'Петров' }
]
let clean = []

function filter(mass, Иван1, name1 ) {
    for (let i = 0; i < mass.length; i++) {
        if (mass[i].name === Иван1) {
            clean.push(mass[i])
        }
    }
    console.log(clean[0])
    console.log(clean);
}
filter(objects, "Иван",)