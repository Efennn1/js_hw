"Use strict";
//n1
let email = ["kkkk@email.com", "m", "nnnnnn@email.com", "llllll@email.com"]
let blackList = ["m","llllll@email.com"]

function filter(inBlackList, inEmail) {
    let whiteList = [];
    for (let i = 0; i < inEmail.length; i++) {
        if (inBlackList.indexOf(inEmail[i]) == -1)  {
            whiteList.push(inEmail[i])
        }
    }
    console.log(whiteList)    
}

filter(blackList, email)
console.log('                                                                                     ');
// n2
function calculate(sumBascket, count, promocod = null) {

    let countFiveProcent = 0.95
    let countTwentyProcent = 0.8
    let countFifteenProcent = 0.85
    
    if (promocod = 'ДАРИМ300' && sumBascket < 300) {
      sumBascket = 0;
      console.log('ДАРИМ300 ' + sumBascket);
    } else if (promocod = 'ДАРИМ300') {
      sumBascket -= 300;
      console.log('ДАРИМ300 ' + sumBascket);
    }
    
    if (count >= 10) {
      sumBascket *= countFiveProcent;
      console.log('больше 10 товаров, скидка 5% , сумма:' + sumBascket);
    }
    
    if (sumBascket > 50000) {
      sumBascket = 50000 + ((sumBascket - 50000) * countTwentyProcent) 
      console.log('больше 50 000 ₽, скидка к превышению 20%, сумма: ' + sumBascket);
      
    }
    console.log('Стоимость равна ' + sumBascket)
    if (promocod == 'СКИДКА15' && sumBascket >= 20000) {
      sumBascket *= countFifteenProcent
      console.log('СКИДКА15, сумма:' + sumBascket); 
    }
    
  }
  
  calculate(100000, 12, 'ДАРИМ300');
