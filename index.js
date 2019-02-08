const getFirstSelector = function(selector){
  return document.querySelector(selector)
}

const nestedTarget = function() {
  return document.getElementById('nested').querySelector('.target')
}

const increaseRankBy = function (n) {
  const list = document.querySelectorAll('.ranked-list');
    for (number of list) {
      console.log(number)
      parseInt(number) + 1
    }
}


// const deepestChild = function() {
//   let firstElement = document.getElementById('grand-node').querySelectorAll('div');
//     for (const element of firstElement) {
//       return textElement === 'boo!'
//     }
// }
